[medical-model-manager-apis](../README.md) > [BlenderResponse](../interfaces/blenderresponse.md)

# Interface: BlenderResponse

Represents data contained in the response from Blender

## Hierarchy

**BlenderResponse**

## Index

### Properties

* [blendFilePath](blenderresponse.md#blendfilepath)
* [fbxFilePath](blenderresponse.md#fbxfilepath)
* [objMtlFilePaths](blenderresponse.md#objmtlfilepaths)
* [partInfo](blenderresponse.md#partinfo)
* [pictureFilePath](blenderresponse.md#picturefilepath)
* [textureFilePaths](blenderresponse.md#texturefilepaths)

---

## Properties

<a id="blendfilepath"></a>

###  blendFilePath

**● blendFilePath**: *`string`*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:204](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L204)*

The path to the blend file created in Blender

___
<a id="fbxfilepath"></a>

###  fbxFilePath

**● fbxFilePath**: *`string`*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:210](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L210)*

The path to the FBX file created in Blender

___
<a id="objmtlfilepaths"></a>

###  objMtlFilePaths

**● objMtlFilePaths**: *[ObjMtlFilePaths](objmtlfilepaths.md)[]*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:213](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L213)*

Paths to the .obj and .mtl files created in Blender

___
<a id="partinfo"></a>

###  partInfo

**● partInfo**: *[MeshPartInfo](meshpartinfo.md)[]*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:219](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L219)*

Information about the separate parts this mesh is made of

___
<a id="picturefilepath"></a>

###  pictureFilePath

**● pictureFilePath**: *`string`*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:207](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L207)*

The path to the picture created in Blender

___
<a id="texturefilepaths"></a>

###  textureFilePaths

**● textureFilePaths**: *`string`[]*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:216](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L216)*

Paths to the textures created in Blender

___

