# This script takes in a list of model files, opens them, prepares them to be openned in
# Unity, then saves them to a location specified.
#
# Why? ---
# 		  | 
#	     \_/
# In Unity, to grab an object we need to collide with it.
# In order to collide with an object the object neds a collider.
# However, convex Unity colliders can only have a max of 255 triangles,
# which is way too few for large meshes.
# As a result, we are duplicating every object and creating a slimmed down version of it
# to use as a collider.

import bpy
import sys
import os
import argparse
import os.path
import logging
import bmesh
import json

# The max number of triangles a convex collider can have in Unity
UNITY_MAX_TRIANGLE_COUNT = 255

# Setup logging
root = logging.getLogger()
root.setLevel(logging.DEBUG)
ch = logging.StreamHandler(sys.stdout)
ch.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
root.addHandler(ch)

# Parse the arguments expected by this script
parser = argparse.ArgumentParser(description='Process arguments')
parser.add_argument('--meshId', required="true", help="Mesh id")
parser.add_argument('--meshFilePaths', nargs='+', required="true", help="A list of paths to mesh files to process")
parser.add_argument('--outputDir', required="true", help="The directory where output is stored")
parser.add_argument('--filesAreContinuous', dest='filesAreContinuous', action='store_true', help="True if each file should be a continuous mesh")
parser.add_argument('--colors', nargs='+', help="Colors in hex to add to model parts")

# All arguments after the "--" are for this script
args = parser.parse_args(sys.argv[sys.argv.index("--") + 1:])

# Loop over each model and texture to make sure it exists
def ensure_files_exist(files):
    for filePath in files:
        if (
                filePath is None or \
                not os.path.isfile(filePath)
        ):
            logging.error("File " + filePath + " does not exist. Exiting.")
            sys.exit()

# Get an RGB dict from the hex string
# Borrowed from https://gist.github.com/dyf/51b25bddfc3338c5cdf3311402dc3610
def hex_str_to_rgb(hex_str):
    # convert a hex string (e.g. "FFFFFF") to an RGB dictionary
    val = int(hex_str, 16)
    return { 
        'r': (val & 0x0000ff) / 255,
        'g': ((val & 0x00ff00) >> 8) / 255,
        'b': (val >> 16) / 255
    }

# Removes default objects from the scene
def remove_default_objects():
    # Remove all objects from the scene
    # NOTE:
    #		An exception is thrown if no objets exist
    #		In that case just ignore the exception
    try:
        bpy.ops.object.mode_set(mode='OBJECT')
        bpy.ops.object.select_by_type(type='MESH')
        bpy.ops.object.delete(use_global=False)
        for item in bpy.data.meshes:
            bpy.data.meshes.remove(item)
    except:
        logging.exception("no objects to remove from scene. Moving on.")
        pass

# Load each model into our scene
def load_model_files(models):
    for modelPath in models:
        # Load the model
        logging.info("Openning file " + modelPath)
        filename, fileExtension = os.path.splitext(modelPath)
        fileExtension = fileExtension.lower()
        if fileExtension == ".obj":
            bpy.ops.import_scene.obj(filepath=modelPath)
        elif fileExtension == ".stl":
            bpy.ops.import_mesh.stl(filepath=modelPath)
        elif fileExtension == ".fbx":
            bpy.ops.import_scene.fbx(filepath=modelPath)
        else:
            logging.error("File extension " + fileExtension + " not yet supported")
            continue

        # If each file is continuous, join everything was just imported
        if(args.filesAreContinuous):
            # Set the first selected object to active
            for obj in bpy.data.objects:
                if(obj.select):
                    bpy.context.scene.objects.active = obj
                    break

                # Join everything
                bpy.ops.object.join()

        # Deselct everything
        for obj in bpy.data.objects:
            obj.select = False

# Add colors if they were specified
def add_colors():
    # If there are no colors return
    if (args.colors is None) or (len(args.colors) <= 0):
        return

    # Create a material for each color
    for color_hex in args.colors:
        logging.info('Creating new material for color {}'.format(color_hex))
        rgb_dict = hex_str_to_rgb(color_hex)
        mat = bpy.data.materials.new(color_hex)
        mat.diffuse_color = (rgb_dict['r'], rgb_dict['g'], rgb_dict['b'])
        mat.diffuse_shader = 'LAMBERT'
        mat.diffuse_intensity = 1.0

    # Get all of the meshes
    meshes = [item for item in bpy.data.objects if item.type == "MESH"]

    # Loop over each mesh and add a color to it
    color_index = 0
    for mesh in meshes:
        # Get the color
        color_hex = args.colors[color_index]

        # Get the material
        mat = bpy.data.materials.get(color_hex)

        # if a material exists overwrite it
        logging.info('Applying material of color ' + color_hex)
        if len(mesh.data.materials):
            # assign to 1st material slot
            mesh.data.materials[0] = mat

        # if there is no material append it
        else:
            mesh.data.materials.append(mat)

            # Move on to the next color
            color_index = (color_index + 1) % len(args.colors)

def add_unity_collider():
    # Get all of the meshes
    meshes = [item for item in bpy.data.objects if item.type == "MESH"]

    # Prepare each object for unity
    modelPartData = []
    partNum = 0
    for mesh in meshes:
        # Name each part uniquely
        partNum += 1
        originalName = mesh.name
        mesh.name = "{}_{}".format( args.modelId, partNum )

        # Duplicate this mesh
        collider = mesh.copy()
        collider.data = mesh.data.copy()
        bpy.context.scene.objects.link(collider)

        # Make sure the collider ends in "_collider" so Unity knows that it's a collider
        collider.name = "{}_collider".format(mesh.name)

        # Make the collider a child of the original mesh
        mesh.select = True
        collider.select = True
        bpy.context.scene.objects.active = mesh
        bpy.ops.object.parent_set(keep_transform=False)

        # Get the mesh's triangle count
        triangulate_object(collider)
        colliderTriangleCount = len(collider.data.polygons)
        logging.info("'{}' has '{}' triangles".format(collider.name, colliderTriangleCount))

        # Decimate the collider if it's too large
        if colliderTriangleCount >= UNITY_MAX_TRIANGLE_COUNT:
            decimateModifier = collider.modifiers.new(name='decimate', type='DECIMATE')
            decimateModifier.ratio = round((UNITY_MAX_TRIANGLE_COUNT - 1) / colliderTriangleCount, 3)
            logging.info("decimating '{}' with ratio {}. New triangle count {}.".format(collider.name, decimateModifier.ratio, len(collider.data.polygons)))

        mesh.select = False
        collider.select = False

        # Finally, add this model to the list of data we're going to return to the caller
        # This data is stored in the OrganModelPart collection
        modelPartData.append({
            'originalName': originalName,
            'internalName': mesh.name,
            'name': "Part " + str( partNum ),
        })

    return modelPartData

# Save each image to the textures dir
def save_images_to_textures_dir():
    if len(bpy.data.images) <= 0:
        logging.info( "No images to save")
        return 

    logging.info("Saving images...")
    imageFilePaths = []
    for image in bpy.data.images:
        logging.info ("processing image: " + image.filepath)
 
        filename = os.path.basename(image.filepath)

        # pack the image before we change it's path
        try:
            image.pack()
        except:
            logging.exception("Failed to pack image '{}'. Moving on...".format(filename))
            continue
 
        # change the images path and save
        logging.info("filename: " + filename)
        image.filepath = os.path.join(args.outputDir, filename)
        logging.info("new filepath: " + image.filepath)
        image.save()
        imageFilePaths.append(image.filepath)

    return imageFilePaths

def triangulate_object(obj):
    me = obj.data
    # Get a BMesh representation
    bm = bmesh.new()
    bm.from_mesh(me)

    bmesh.ops.triangulate(bm, faces=bm.faces[:], quad_method=0, ngon_method=0)

    # Finish up, write the bmesh back to the mesh
    bm.to_mesh(me)
    bm.free()

def create_obj_for_each_part ():
    # Deselect everything
    for obj in bpy.data.objects:
        obj.select = False

    # Get all of the meshes
    meshes = [item for item in bpy.data.objects if item.type == "MESH"]

    # Create an obj file for each mesh
    objMtlFilePaths = []
    for mesh in meshes:
        if "_collider" not in mesh.name:
            objPath = os.path.join( args.objsDir, mesh.name + ".obj" )
            mtlPath = os.path.join( args.objsDir, mesh.name + ".mtl" )
            mesh.select = True
            bpy.ops.export_scene.obj( filepath=objPath, use_selection=True )
            objMtlFilePaths.append({
                'objFilePath': objPath,
                'mtlFilePath': mtlPath,
            })
            mesh.select = False

    return objMtlFilePaths

def take_picture():
    scene = bpy.context.scene

    # Only select meshes
    # and hide colliders
    for obj in scene.objects:
        if obj.type == "MESH":
            # All colliders should be hidden from Render
            if "_collider" in obj.name:
                obj.hide_render = True
                obj.select = False
            else:
                obj.select = True
        else:
            obj.select = False

    # Point the camera at all of the meshes
    bpy.ops.view3d.camera_to_view_selected()

    # Disable the default lamp
    bpy.data.objects["Lamp"].data.energy = 0

    # Create a new hemi lamp with the same position and orientation as the camera
    lamp = bpy.ops.object.lamp_add( type='HEMI', location=scene.camera.location, rotation=scene.camera.rotation_euler )

    # Make sure we capture the entire model, even if it's far away from the camera
    bpy.data.cameras["Camera"].clip_end = 1000

    # Set Scenes camera and output filename
    scene.render.image_settings.file_format = 'PNG'
    scene.render.filepath = os.path.join( args.outputDir, "model.png" )

    # Render Scene and store the scene
    scene.render.engine = 'BLENDER_RENDER'
    scene.render.alpha_mode = 'TRANSPARENT' 
    scene.render.image_settings.color_mode ='RGBA'
    bpy.ops.render.render( write_still=True )

    # Show colliders so they have a mesh renderer in Unity
    for obj in scene.objects:
        if obj.type == "MESH" and "_collider" in obj.name:
            obj.hide_render = False

    return scene.render.filepath

ensure_files_exist(args.modelFilePaths)

remove_default_objects()

# Save a reference to our scene so we can update it later
scene = bpy.context.scene

load_model_files(args.modelFilePaths)

add_colors()

modelPartData = add_unity_collider()

# Save blender file
blendPath = os.path.join(args.outputDir, "model.blend")
logging.info("Saving blend to: {}".format(blendPath))
bpy.ops.wm.save_as_mainfile(filepath=blendPath)

textureFilePaths = save_images_to_textures_dir()

# If there are images use binary. Otherwise, use ASCII
fbxVersion = 'ASCII6100'
if len(bpy.data.images) > 0:
    fbxVersion = 'BIN7400'

# Export an fbx file
fbxPath = os.path.join( args.outputDir, "model.fbx" )
logging.info( "Saving fbx to: {}".format( fbxPath ) )
bpy.ops.export_scene.fbx( filepath=fbxPath, object_types={'MESH'}, version=fbxVersion )

# Create an .obj for each part
objMtlFilePaths = create_obj_for_each_part()

# Take a picture of the model
picturePath = take_picture()

# Return data by printing it to the console
response = {
    'blendFilePath': blendPath,
    'fbxFilePath': fbxPath,
    'objMtlFilePaths': objMtlFilePaths,
    'textureFilePaths': textureFilePaths,
    'partInfo': modelPartData,
}

# Save the response to a json file
responseFile = os.path.join(args.outputDir, "response.json")
with open(responseFile, 'w') as outFile:
    json.dump(response, responseFile)
