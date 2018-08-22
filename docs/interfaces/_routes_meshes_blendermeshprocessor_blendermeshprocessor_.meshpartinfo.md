[medical-model-manager-apis](../README.md) > ["routes/meshes/blenderMeshProcessor/blenderMeshProcessor"](../modules/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.md) > [MeshPartInfo](../interfaces/_routes_meshes_blendermeshprocessor_blendermeshprocessor_.meshpartinfo.md)

# Interface: MeshPartInfo

Meshes can be segmented into individdual parts. Knowing this information is useful in third party applications that, for example, allow the user to interact with individual parts This interface describes each part based on output from Blender.

## Hierarchy

**MeshPartInfo**

## Index

### Properties

* [internalName](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.meshpartinfo.md#internalname)
* [name](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.meshpartinfo.md#name)
* [originalName](_routes_meshes_blendermeshprocessor_blendermeshprocessor_.meshpartinfo.md#originalname)

---

## Properties

<a id="internalname"></a>

###  internalName

**● internalName**: *`string`*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:242](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L242)*

Our internal name of the part

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:245](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L245)*

A display name of the part

___
<a id="originalname"></a>

###  originalName

**● originalName**: *`string`*

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:239](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L239)*

The original name of the part in Blender

___

