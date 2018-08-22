[medical-model-manager-apis](../README.md) > [BlenderMeshProcessor](../classes/blendermeshprocessor.md)

# Class: BlenderMeshProcessor

Processes meshes in Blender To prepare a mesh to be viewed in third part applications, such as on a website or in virtual reality, we need to process the mesh and export files that are compatible with different platforms. This class does just that.

## Hierarchy

**BlenderMeshProcessor**

## Index

### Methods

* [process](blendermeshprocessor.md#process)
* [processInBlender](blendermeshprocessor.md#processinblender)
* [saveBlenderResponseFiles](blendermeshprocessor.md#saveblenderresponsefiles)
* [saveFilesToDisk](blendermeshprocessor.md#savefilestodisk)

---

## Methods

<a id="process"></a>

### `<Static>` process

▸ **process**(mesh: *`InstanceType`<[Mesh](mesh.md)>*): `Promise`<`InstanceType`<[Mesh](mesh.md)>>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:41](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L41)*

Processes the given mesh in Blender by: 1) Saving its files to disk so they can be read by Blender 2) Processing the files in Blender with a python script 3) Saving the files Blender produces (listed bleow) to the DB

```
- model.blend: a blend file packed with everything
 - picture.png: a picture of the model
 - model.fbx: an fbx of the model we can use to pass to other processes, like Unity
 - <.obj, .mtl>[]: an array of obj and mtl files that we later use to render the model in web applications
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](mesh.md)> |

**Returns:** `Promise`<`InstanceType`<[Mesh](mesh.md)>>

___
<a id="processinblender"></a>

### `<Static>``<Private>` processInBlender

▸ **processInBlender**(mesh: *`InstanceType`<[Mesh](mesh.md)>*, meshFilePaths: *`string`[]*): `Promise`<[BlenderResponse](../interfaces/blenderresponse.md)>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:100](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L100)*

Tells Blender to process the mesh's files with our python script

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](mesh.md)> |
| meshFilePaths | `string`[] |

**Returns:** `Promise`<[BlenderResponse](../interfaces/blenderresponse.md)>
data about the files Blender created during processing

___
<a id="saveblenderresponsefiles"></a>

### `<Static>``<Private>` saveBlenderResponseFiles

▸ **saveBlenderResponseFiles**(mesh: *`InstanceType`<[Mesh](mesh.md)>*, blenderResponse: *[BlenderResponse](../interfaces/blenderresponse.md)*): `Promise`<`InstanceType`<[Mesh](mesh.md)>>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:141](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L141)*

Blender produces several files while it's processing. This function saves those files to the DB

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](mesh.md)> |
| blenderResponse | [BlenderResponse](../interfaces/blenderresponse.md) |

**Returns:** `Promise`<`InstanceType`<[Mesh](mesh.md)>>

___
<a id="savefilestodisk"></a>

### `<Static>``<Private>` saveFilesToDisk

▸ **saveFilesToDisk**(mesh: *`InstanceType`<[Mesh](mesh.md)>*): `Promise`<`string`[]>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:61](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L61)*

Saves mesh files from gridfs to disk so Blender can read them

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](mesh.md)> |

**Returns:** `Promise`<`string`[]>
a promise that resolves an array containing the path to each saved file

___

