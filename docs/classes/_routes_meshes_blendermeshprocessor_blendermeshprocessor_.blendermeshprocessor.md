[medical-model-manager-apis](../README.md) > ["routes/meshes/blenderMeshProcessor/blenderMeshProcessor"](../modules/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.md) > [BlenderMeshProcessor](../classes/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blendermeshprocessor.md)

# Class: BlenderMeshProcessor

Processes meshes in Blender To prepare a mesh to be viewed in third part applications, such as on a website or in virtual reality, we need to process the mesh and export files that are compatible with different platforms. This class does just that.

## Hierarchy

**BlenderMeshProcessor**

## Index

### Methods

* [process](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blendermeshprocessor.md#process)
* [processInBlender](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blendermeshprocessor.md#processinblender)
* [saveBlenderResponseFiles](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blendermeshprocessor.md#saveblenderresponsefiles)
* [saveFilesToDisk](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blendermeshprocessor.md#savefilestodisk)

---

## Methods

<a id="process"></a>

### `<Static>` process

▸ **process**(mesh: *`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>*): `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:41](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L41)*

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
| mesh | `InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> |

**Returns:** `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

___
<a id="processinblender"></a>

### `<Static>``<Private>` processInBlender

▸ **processInBlender**(mesh: *`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>*, meshFilePaths: *`string`[]*): `Promise`<[BlenderResponse](../interfaces/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blenderresponse.md)>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:100](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L100)*

Tells Blender to process the mesh's files with our python script

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> |
| meshFilePaths | `string`[] |

**Returns:** `Promise`<[BlenderResponse](../interfaces/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blenderresponse.md)>
data about the files Blender created during processing

___
<a id="saveblenderresponsefiles"></a>

### `<Static>``<Private>` saveBlenderResponseFiles

▸ **saveBlenderResponseFiles**(mesh: *`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>*, blenderResponse: *[BlenderResponse](../interfaces/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blenderresponse.md)*): `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:141](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L141)*

Blender produces several files while it's processing. This function saves those files to the DB

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> |
| blenderResponse | [BlenderResponse](../interfaces/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.blenderresponse.md) |

**Returns:** `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

___
<a id="savefilestodisk"></a>

### `<Static>``<Private>` saveFilesToDisk

▸ **saveFilesToDisk**(mesh: *`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>*): `Promise`<`string`[]>

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:61](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L61)*

Saves mesh files from gridfs to disk so Blender can read them

**Parameters:**

| Param | Type |
| ------ | ------ |
| mesh | `InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> |

**Returns:** `Promise`<`string`[]>
a promise that resolves an array containing the path to each saved file

___

