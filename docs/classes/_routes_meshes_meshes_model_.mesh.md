[medical-model-manager-apis](../README.md) > ["routes/meshes/meshes.model"](../modules/_routes_meshes_meshes_model_.md) > [Mesh](../classes/_routes_meshes_meshes_model_.mesh.md)

# Class: Mesh

Represents a Mesh model

## Hierarchy

 `Typegoose`

**↳ Mesh**

## Index

### Properties

* [created](_routes_meshes_meshes_model_.mesh.md#created)
* [files](_routes_meshes_meshes_model_.mesh.md#files)
* [lastAccessed](_routes_meshes_meshes_model_.mesh.md#lastaccessed)
* [longDesc](_routes_meshes_meshes_model_.mesh.md#longdesc)
* [name](_routes_meshes_meshes_model_.mesh.md#name)
* [owner](_routes_meshes_meshes_model_.mesh.md#owner)
* [shortDesc](_routes_meshes_meshes_model_.mesh.md#shortdesc)
* [state](_routes_meshes_meshes_model_.mesh.md#state)
* [version](_routes_meshes_meshes_model_.mesh.md#version)

### Methods

* [getModelForClass](_routes_meshes_meshes_model_.mesh.md#getmodelforclass)
* [isAuthorized](_routes_meshes_meshes_model_.mesh.md#isauthorized)
* [setModelForClass](_routes_meshes_meshes_model_.mesh.md#setmodelforclass)
* [updateState](_routes_meshes_meshes_model_.mesh.md#updatestate)
* [createMesh](_routes_meshes_meshes_model_.mesh.md#createmesh)
* [get](_routes_meshes_meshes_model_.mesh.md#get)

---

## Properties

<a id="created"></a>

###  created

**● created**: *`Date`*

*Defined in [routes/meshes/meshes.model.ts:264](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L264)*

The date the model was created

___
<a id="files"></a>

###  files

**● files**: *`Ref`<[MeshFileCollection](_routes_meshes_meshes_model_.meshfilecollection.md)>*

*Defined in [routes/meshes/meshes.model.ts:272](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L272)*

Files associated with this mesh

___
<a id="lastaccessed"></a>

###  lastAccessed

**● lastAccessed**: *`Date`*

*Defined in [routes/meshes/meshes.model.ts:268](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L268)*

The date the model was last accessed

___
<a id="longdesc"></a>

###  longDesc

**● longDesc**: *`string`*

*Defined in [routes/meshes/meshes.model.ts:253](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L253)*

A long description of the model

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Defined in [routes/meshes/meshes.model.ts:247](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L247)*

The name of this model

___
<a id="owner"></a>

###  owner

**● owner**: *`Ref`<[User](_routes_users_users_model_.user.md)>*

*Defined in [routes/meshes/meshes.model.ts:239](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L239)*

The owner of this model

___
<a id="shortdesc"></a>

###  shortDesc

**● shortDesc**: *`string`*

*Defined in [routes/meshes/meshes.model.ts:250](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L250)*

A short description of the model

___
<a id="state"></a>

###  state

**● state**: *[ResourceStates](../enums/_routes_meshes_meshes_model_.resourcestates.md)*

*Defined in [routes/meshes/meshes.model.ts:260](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L260)*

The state of the model

___
<a id="version"></a>

###  version

**● version**: *`number`*

*Defined in [routes/meshes/meshes.model.ts:243](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L243)*

The version of this model

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
<a id="isauthorized"></a>

###  isAuthorized

▸ **isAuthorized**(user: *`InstanceType`<[User](_routes_users_users_model_.user.md)>*): `boolean`

*Defined in [routes/meshes/meshes.model.ts:276](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L276)*

Returns whether the given user is authorized to interact with this mesh

**Parameters:**

| Param | Type |
| ------ | ------ |
| user | `InstanceType`<[User](_routes_users_users_model_.user.md)> |

**Returns:** `boolean`

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
<a id="updatestate"></a>

###  updateState

▸ **updateState**(this: *`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>*, newState: *[ResourceStates](../enums/_routes_meshes_meshes_model_.resourcestates.md)*): `Promise`<`boolean`>

*Defined in [routes/meshes/meshes.model.ts:285](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L285)*

Set the mesh's state

**Parameters:**

| Param | Type |
| ------ | ------ |
| this | `InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> |
| newState | [ResourceStates](../enums/_routes_meshes_meshes_model_.resourcestates.md) |

**Returns:** `Promise`<`boolean`>
false if there was an error, true otherwise

___
<a id="createmesh"></a>

### `<Static>` createMesh

▸ **createMesh**(this: * `ModelType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> & [Mesh](_routes_meshes_meshes_model_.mesh.md)*, owner: *`InstanceType`<[User](_routes_users_users_model_.user.md)>*, name: *`string`*, shortDesc: *`string`*, longDesc: *`string`*, files: *`File`[]*): `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

*Defined in [routes/meshes/meshes.model.ts:350](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L350)*

Create mesh

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| this |  `ModelType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> & [Mesh](_routes_meshes_meshes_model_.mesh.md)|
| owner | `InstanceType`<[User](_routes_users_users_model_.user.md)> |
| name | `string` |  The name of the mesh |
| shortDesc | `string` |  a short description of the mesh |
| longDesc | `string` |  a long description of the mesh |
| files | `File`[] |

**Returns:** `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

___
<a id="get"></a>

### `<Static>` get

▸ **get**(this: * `ModelType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> & [Mesh](_routes_meshes_meshes_model_.mesh.md)*, user: *`InstanceType`<[User](_routes_users_users_model_.user.md)>*, id: *`string`*): `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

*Defined in [routes/meshes/meshes.model.ts:310](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/meshes/meshes.model.ts#L310)*

Gets a model by its id

**Parameters:**

| Param | Type |
| ------ | ------ |
| this |  `ModelType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)> & [Mesh](_routes_meshes_meshes_model_.mesh.md)|
| user | `InstanceType`<[User](_routes_users_users_model_.user.md)> |
| id | `string` |

**Returns:** `Promise`<`InstanceType`<[Mesh](_routes_meshes_meshes_model_.mesh.md)>>

___

