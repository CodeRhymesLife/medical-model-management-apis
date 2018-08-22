[medical-model-manager-apis](../README.md) > ["routes/meshes/meshes.model"](../modules/_routes_meshes_meshes_model_.md) > [MeshFileCollection](../classes/_routes_meshes_meshes_model_.meshfilecollection.md)

# Class: MeshFileCollection

File associated with the mesh

## Hierarchy

 `Typegoose`

**↳ MeshFileCollection**

## Index

### Properties

* [blendFile](_routes_meshes_meshes_model_.meshfilecollection.md#blendfile)
* [fbx](_routes_meshes_meshes_model_.meshfilecollection.md#fbx)
* [objMtlFiles](_routes_meshes_meshes_model_.meshfilecollection.md#objmtlfiles)
* [originalFiles](_routes_meshes_meshes_model_.meshfilecollection.md#originalfiles)
* [picture](_routes_meshes_meshes_model_.meshfilecollection.md#picture)
* [textures](_routes_meshes_meshes_model_.meshfilecollection.md#textures)

### Methods

* [getModelForClass](_routes_meshes_meshes_model_.meshfilecollection.md#getmodelforclass)
* [setModelForClass](_routes_meshes_meshes_model_.meshfilecollection.md#setmodelforclass)
* [createWithOriginalFiles](_routes_meshes_meshes_model_.meshfilecollection.md#createwithoriginalfiles)

---

## Properties

<a id="blendfile"></a>

###  blendFile

**● blendFile**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:163](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L163)*

Blend file

___
<a id="fbx"></a>

###  fbx

**● fbx**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:166](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L166)*

FBX file of the model

___
<a id="objmtlfiles"></a>

###  objMtlFiles

**● objMtlFiles**: *`Ref`<[OBJMTLPair](_routes_meshes_meshes_model_.objmtlpair.md)>[]*

*Defined in [routes/meshes/meshes.model.ts:170](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L170)*

List of obj and mtl files

___
<a id="originalfiles"></a>

###  originalFiles

**● originalFiles**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>[]*

*Defined in [routes/meshes/meshes.model.ts:174](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L174)*

Array of associated files

___
<a id="picture"></a>

###  picture

**● picture**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:178](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L178)*

Picture of the mesh

___
<a id="textures"></a>

###  textures

**● textures**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>[]*

*Defined in [routes/meshes/meshes.model.ts:182](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L182)*

Textures

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
<a id="createwithoriginalfiles"></a>

### `<Static>` createWithOriginalFiles

▸ **createWithOriginalFiles**(this: * `ModelType`<[MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)> & [MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)*, files: *`File`[]*): `Promise`<`InstanceType`<[MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)>>

*Defined in [routes/meshes/meshes.model.ts:186](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L186)*

Saves the given files in the DB and returns a mesh file collection

**Parameters:**

| Param | Type |
| ------ | ------ |
| this |  `ModelType`<[MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)> & [MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)|
| files | `File`[] |

**Returns:** `Promise`<`InstanceType`<[MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)>>

___

