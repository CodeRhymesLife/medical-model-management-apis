[medical-model-manager-apis](../README.md) > [GridFSFile](../classes/gridfsfile.md)

# Class: GridFSFile

Represents a gridfs file

## Hierarchy

 `Typegoose`

**↳ GridFSFile**

## Index

### Properties

* [contentType](gridfsfile.md#contenttype)
* [filename](gridfsfile.md#filename)

### Methods

* [getModelForClass](gridfsfile.md#getmodelforclass)
* [saveToFolder](gridfsfile.md#savetofolder)
* [setModelForClass](gridfsfile.md#setmodelforclass)
* [save](gridfsfile.md#save)

---

## Properties

<a id="contenttype"></a>

###  contentType

**● contentType**: *`string`*

*Defined in [routes/meshes/meshes.model.ts:36](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L36)*

The type of the file's content. Used like mimetype

___
<a id="filename"></a>

###  filename

**● filename**: *`string`*

*Defined in [routes/meshes/meshes.model.ts:32](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L32)*

The file's name

___

## Methods

<a id="getmodelforclass"></a>

###  getModelForClass

▸ **getModelForClass**T(t: *`T`*, __namedParameters?: *`object`*):  `Model`<`InstanceType`<`this`>> & `this` & `T`

*Inherited from Typegoose.getModelForClass*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typegoose/lib/typegoose.d.ts:17*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| t | `T` |
| `Optional` __namedParameters | `object` |

**Returns:**  `Model`<`InstanceType`<`this`>> & `this` & `T`

___
<a id="savetofolder"></a>

###  saveToFolder

▸ **saveToFolder**(this: *`InstanceType`<[GridFSFile](gridfsfile.md)>*, dirPath: *`string`*): `Promise`<`string`>

*Defined in [routes/meshes/meshes.model.ts:40](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L40)*

Reads the file from gridfs

**Parameters:**

| Param | Type |
| ------ | ------ |
| this | `InstanceType`<[GridFSFile](gridfsfile.md)> |
| dirPath | `string` |

**Returns:** `Promise`<`string`>

___
<a id="setmodelforclass"></a>

###  setModelForClass

▸ **setModelForClass**T(t: *`T`*, __namedParameters?: *`object`*):  `Model`<`InstanceType`<`this`>> & `this` & `T`

*Inherited from Typegoose.setModelForClass*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typegoose/lib/typegoose.d.ts:18*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| t | `T` |
| `Optional` __namedParameters | `object` |

**Returns:**  `Model`<`InstanceType`<`this`>> & `this` & `T`

___
<a id="save"></a>

### `<Static>` save

▸ **save**(this: * `ModelType`<[GridFSFile](gridfsfile.md)> & [GridFSFile](gridfsfile.md)*, name: *`string`*, bufferOrPath: * `Buffer` &#124; `string`*, mimeType: *`string`*): `Promise`<`InstanceType`<[GridFSFile](gridfsfile.md)>>

*Defined in [routes/meshes/meshes.model.ts:88](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L88)*

Save file buffer to gridfs

**Parameters:**

| Param | Type |
| ------ | ------ |
| this |  `ModelType`<[GridFSFile](gridfsfile.md)> & [GridFSFile](gridfsfile.md)|
| name | `string` |
| bufferOrPath |  `Buffer` &#124; `string`|
| mimeType | `string` |

**Returns:** `Promise`<`InstanceType`<[GridFSFile](gridfsfile.md)>>

___

