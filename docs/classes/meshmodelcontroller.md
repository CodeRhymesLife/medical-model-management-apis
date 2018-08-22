[medical-model-manager-apis](../README.md) > [MeshModelController](../classes/meshmodelcontroller.md)

# Class: MeshModelController

## Hierarchy

**MeshModelController**

## Index

### Methods

* [create](meshmodelcontroller.md#create)
* [get](meshmodelcontroller.md#get)
* [list](meshmodelcontroller.md#list)
* [load](meshmodelcontroller.md#load)
* [remove](meshmodelcontroller.md#remove)
* [update](meshmodelcontroller.md#update)

---

## Methods

<a id="create"></a>

### `<Static>` create

▸ **create**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`< `void` &#124; `Response`>

*Defined in [routes/meshes/meshes.controller.ts:52](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L52)*

Create new mesh from the passed in files

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`< `void` &#124; `Response`>

___
<a id="get"></a>

### `<Static>` get

▸ **get**(req: *`Request`*, res: *`Response`*): `Promise`<`void`>

*Defined in [routes/meshes/meshes.controller.ts:47](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L47)*

Get loaded mesh

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |

**Returns:** `Promise`<`void`>

___
<a id="list"></a>

### `<Static>` list

▸ **list**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`< `void` &#124; `Response`>

*Defined in [routes/meshes/meshes.controller.ts:33](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L33)*

List the meshes associated with the given user

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`< `void` &#124; `Response`>

___
<a id="load"></a>

### `<Static>` load

▸ **load**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*, id: *`string`*): `Promise`<`void`>

*Defined in [routes/meshes/meshes.controller.ts:17](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L17)*

Load mesh and append to req.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |
| id | `string` |  The mesh's id |

**Returns:** `Promise`<`void`>

___
<a id="remove"></a>

### `<Static>` remove

▸ **remove**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`< `void` &#124; `Response`>

*Defined in [routes/meshes/meshes.controller.ts:98](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L98)*

Remove the mesh by id

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`< `void` &#124; `Response`>

___
<a id="update"></a>

### `<Static>` update

▸ **update**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`< `void` &#124; `Response`>

*Defined in [routes/meshes/meshes.controller.ts:75](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L75)*

Updates mesh metadata, but not its files

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`< `void` &#124; `Response`>

___

