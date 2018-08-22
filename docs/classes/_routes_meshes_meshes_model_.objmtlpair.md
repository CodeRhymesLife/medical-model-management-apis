[medical-model-manager-apis](../README.md) > ["routes/meshes/meshes.model"](../modules/_routes_meshes_meshes_model_.md) > [OBJMTLPair](../classes/_routes_meshes_meshes_model_.objmtlpair.md)

# Class: OBJMTLPair

Represents an OBJ and MTL file

## Hierarchy

 `Typegoose`

**↳ OBJMTLPair**

## Index

### Properties

* [mtl](_routes_meshes_meshes_model_.objmtlpair.md#mtl)
* [obj](_routes_meshes_meshes_model_.objmtlpair.md#obj)

### Methods

* [getModelForClass](_routes_meshes_meshes_model_.objmtlpair.md#getmodelforclass)
* [setModelForClass](_routes_meshes_meshes_model_.objmtlpair.md#setmodelforclass)

---

## Properties

<a id="mtl"></a>

###  mtl

**● mtl**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:156](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L156)*

The mtl file

___
<a id="obj"></a>

###  obj

**● obj**: *`Ref`<[GridFSFile](_routes_meshes_meshes_model_.gridfsfile.md)>*

*Defined in [routes/meshes/meshes.model.ts:152](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L152)*

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

