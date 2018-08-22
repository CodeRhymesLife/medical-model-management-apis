[medical-model-manager-apis](../README.md) > [MeshProcessor](../classes/meshprocessor.md)

# Class: MeshProcessor

Handles mesh processing. Meshes are processed in a queue using kue. During processing, mesh files are loaded in Blender and prepared for the web and virtual reality. Blender exports an FBX file that's then passed to Unity which creates an asset package for VR, AR and other platforms so apps on those platforms can load meshes at runtime.

## Hierarchy

**MeshProcessor**

## Index

### Constructors

* [constructor](meshprocessor.md#constructor)

### Properties

* [queue](meshprocessor.md#queue)
* [void](meshprocessor.md#void)

### Methods

* [attachEvents](meshprocessor.md#attachevents)
* [enqueue](meshprocessor.md#enqueue)
* [process](meshprocessor.md#process)
* [createMeshJob](meshprocessor.md#createmeshjob)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MeshProcessor**(): [MeshProcessor](meshprocessor.md)

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:23](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L23)*

**Returns:** [MeshProcessor](meshprocessor.md)

___

## Properties

<a id="queue"></a>

###  queue

**● queue**: *`Queue`*

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:23](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L23)*

___
<a id="void"></a>

### `<Private>` void

**● void**: *`any`*

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:82](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L82)*

Attach events that are fired as the mesh moves through the queue

___

## Methods

<a id="attachevents"></a>

###  attachEvents

▸ **attachEvents**(job: *`Job`*): `void`

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:82](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| job | `Job` |

**Returns:** `void`

___
<a id="enqueue"></a>

###  enqueue

▸ **enqueue**(req: *`Request`*, mesh: *`InstanceType`<[Mesh](mesh.md)>*): `void`

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:34](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L34)*

Enque a new mesh for processing

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| mesh | `InstanceType`<[Mesh](mesh.md)> |

**Returns:** `void`

___
<a id="process"></a>

###  process

▸ **process**(job: *`Job`*, done: *`kue.DoneCallback`*): `Promise`<`void`>

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:57](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L57)*

Begin processing a mesh

**Parameters:**

| Param | Type |
| ------ | ------ |
| job | `Job` |
| done | `kue.DoneCallback` |

**Returns:** `Promise`<`void`>

___
<a id="createmeshjob"></a>

### `<Static>``<Private>` createMeshJob

▸ **createMeshJob**(job: *`Job`*): [MeshJob](../interfaces/meshjob.md)

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:132](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L132)*

Create a mesh job from the kue job. Kue returns a job with data that is not typed. We cast the kue job to an object that has the data we need to process the model. When includeMesh is true we retrieve the mesh from the DB

**Parameters:**

| Param | Type |
| ------ | ------ |
| job | `Job` |

**Returns:** [MeshJob](../interfaces/meshjob.md)

___

