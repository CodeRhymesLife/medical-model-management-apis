[medical-model-manager-apis](../README.md) > ["routes/meshes/meshes.storage"](../modules/_routes_meshes_meshes_storage_.md) > [MeshStorage](../classes/_routes_meshes_meshes_storage_.meshstorage.md)

# Class: MeshStorage

Handles storing mesh models

## Hierarchy

**MeshStorage**

## Index

### Methods

* [IsMeshFile](_routes_meshes_meshes_storage_.meshstorage.md#ismeshfile)
* [IsMeshResourceFile](_routes_meshes_meshes_storage_.meshstorage.md#ismeshresourcefile)
* [limitFileTypes](_routes_meshes_meshes_storage_.meshstorage.md#limitfiletypes)
* [uploadFilesToTempDir](_routes_meshes_meshes_storage_.meshstorage.md#uploadfilestotempdir)

---

## Methods

<a id="ismeshfile"></a>

### `<Static>` IsMeshFile

▸ **IsMeshFile**(filename: *`string`*, mimeType: *`string`*): `boolean`

*Defined in [routes/meshes/meshes.storage.ts:44](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.storage.ts#L44)*

Tells whether the given file has a mesh file extension and mime type

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| mimeType | `string` |

**Returns:** `boolean`
true if file has a mesh file extension and mimetype. False otherwise

___
<a id="ismeshresourcefile"></a>

### `<Static>` IsMeshResourceFile

▸ **IsMeshResourceFile**(filename: *`string`*, mimeType: *`string`*): `boolean`

*Defined in [routes/meshes/meshes.storage.ts:53](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.storage.ts#L53)*

Tells whether the given file has a resource file extension and mime type

**Parameters:**

| Param | Type |
| ------ | ------ |
| filename | `string` |
| mimeType | `string` |

**Returns:** `boolean`
true if file has a resource file extension and mimetype. False otherwise

___
<a id="limitfiletypes"></a>

### `<Static>``<Private>` limitFileTypes

▸ **limitFileTypes**(req: *`Request`*, file: *`File`*, callback: *`function`*): `void`

*Defined in [routes/meshes/meshes.storage.ts:59](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.storage.ts#L59)*

Ensure the uploaded files have a valid extension and a valid mimetype

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| file | `File` |
| callback | `function` |

**Returns:** `void`

___
<a id="uploadfilestotempdir"></a>

### `<Static>` uploadFilesToTempDir

▸ **uploadFilesToTempDir**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `void`

*Defined in [routes/meshes/meshes.storage.ts:26](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.storage.ts#L26)*

Upload and validates mesh files

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `void`

___

