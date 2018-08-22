[Medical Model Management APIs](../README.md) > [MeshFileCollection](../classes/meshfilecollection.md)

# Class: MeshFileCollection

File associated with the mesh

## Hierarchy

 `Typegoose`

**↳ MeshFileCollection**

## Index

### Properties

* [blendFile](meshfilecollection.md#blendfile)
* [fbx](meshfilecollection.md#fbx)
* [objMtlFiles](meshfilecollection.md#objmtlfiles)
* [originalFiles](meshfilecollection.md#originalfiles)
* [picture](meshfilecollection.md#picture)
* [textures](meshfilecollection.md#textures)

### Methods

* [getModelForClass](meshfilecollection.md#getmodelforclass)
* [setModelForClass](meshfilecollection.md#setmodelforclass)
* [createWithOriginalFiles](meshfilecollection.md#createwithoriginalfiles)

---

## Properties

<a id="blendfile"></a>

###  blendFile

**● blendFile**: *`Ref`<[GridFSFile](gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:163](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L163)*

Blend file

___
<a id="fbx"></a>

###  fbx

**● fbx**: *`Ref`<[GridFSFile](gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:166](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L166)*

FBX file of the model

___
<a id="objmtlfiles"></a>

###  objMtlFiles

**● objMtlFiles**: *`Ref`<[OBJMTLPair](objmtlpair.md)>[]*

*Defined in [routes/meshes/meshes.model.ts:170](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L170)*

List of obj and mtl files

___
<a id="originalfiles"></a>

###  originalFiles

**● originalFiles**: *`Ref`<[GridFSFile](gridfsfile.md)>[]*

*Defined in [routes/meshes/meshes.model.ts:174](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L174)*

Array of associated files

___
<a id="picture"></a>

###  picture

**● picture**: *`Ref`<[GridFSFile](gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:178](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L178)*

Picture of the mesh

___
<a id="textures"></a>

###  textures

**● textures**: *`Ref`<[GridFSFile](gridfsfile.md)>[]*

*Defined in [routes/meshes/meshes.model.ts:182](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L182)*

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

▸ **createWithOriginalFiles**(this: * `ModelType`<[MeshFileCollection](meshfilecollection.md)> & [MeshFileCollection](meshfilecollection.md)*, files: *`File`[]*): `Promise`<`InstanceType`<[MeshFileCollection](meshfilecollection.md)>>

*Defined in [routes/meshes/meshes.model.ts:186](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L186)*

Saves the given files in the DB and returns a mesh file collection

**Parameters:**

| Param | Type |
| ------ | ------ |
| this |  `ModelType`<[MeshFileCollection](meshfilecollection.md)> & [MeshFileCollection](meshfilecollection.md)|
| files | `File`[] |

**Returns:** `Promise`<`InstanceType`<[MeshFileCollection](meshfilecollection.md)>>

___

