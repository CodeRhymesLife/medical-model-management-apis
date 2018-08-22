[Medical Model Management APIs](../README.md) > [OBJMTLPair](../classes/objmtlpair.md)

# Class: OBJMTLPair

Represents an OBJ and MTL file

## Hierarchy

 `Typegoose`

**↳ OBJMTLPair**

## Index

### Properties

* [mtl](objmtlpair.md#mtl)
* [obj](objmtlpair.md#obj)

### Methods

* [getModelForClass](objmtlpair.md#getmodelforclass)
* [setModelForClass](objmtlpair.md#setmodelforclass)

---

## Properties

<a id="mtl"></a>

###  mtl

**● mtl**: *`Ref`<[GridFSFile](gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:156](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L156)*

The mtl file

___
<a id="obj"></a>

###  obj

**● obj**: *`Ref`<[GridFSFile](gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:152](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/meshes/meshes.model.ts#L152)*

The obj file

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

