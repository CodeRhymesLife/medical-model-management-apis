[Medical Model Management APIs](../README.md) > [User](../classes/user.md)

# Class: User

Represents a User

## Hierarchy

 `Typegoose`

**↳ User**

## Index

### Properties

* [created](user.md#created)
* [google](user.md#google)

### Accessors

* [email](user.md#email)
* [isMaster](user.md#ismaster)
* [name](user.md#name)

### Methods

* [getModelForClass](user.md#getmodelforclass)
* [setModelForClass](user.md#setmodelforclass)
* [createUser](user.md#createuser)
* [getUser](user.md#getuser)

---

## Properties

<a id="created"></a>

###  created

**● created**: *`Date`*

*Defined in [routes/users/users.model.ts:37](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L37)*

The date this user was created

___
<a id="google"></a>

###  google

**● google**: *[GoogleUser](googleuser.md)*

*Defined in [routes/users/users.model.ts:33](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L33)*

Data from google describing this user

___

## Accessors

<a id="email"></a>

###  email

getemail(): `string`

*Defined in [routes/users/users.model.ts:47](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L47)*

User's email

**Returns:** `string`

___
<a id="ismaster"></a>

###  isMaster

getisMaster(): `boolean`

*Defined in [routes/users/users.model.ts:52](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L52)*

Returns whether this user is a master user

**Returns:** `boolean`

___
<a id="name"></a>

###  name

getname(): `string`

*Defined in [routes/users/users.model.ts:41](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L41)*

User's name

**Returns:** `string`

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
<a id="createuser"></a>

### `<Static>` createUser

▸ **createUser**(this: * `ModelType`<[User](user.md)> & [User](user.md)*, googleId: *`string`*, googleName: *`string`*, googleEmail: *`string`*): `Promise`<`InstanceType`<[User](user.md)>>

*Defined in [routes/users/users.model.ts:82](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L82)*

Create user

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| this |  `ModelType`<[User](user.md)> & [User](user.md)|
| googleId | `string` |  The id of the user on google. |
| googleName | `string` |  The name of the user on google. |
| googleEmail | `string` |  The user's gmail. |

**Returns:** `Promise`<`InstanceType`<[User](user.md)>>

___
<a id="getuser"></a>

### `<Static>` getUser

▸ **getUser**(this: * `ModelType`<[User](user.md)> & [User](user.md)*, id: *`string`*): `Promise`<`InstanceType`<[User](user.md)>>

*Defined in [routes/users/users.model.ts:61](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.model.ts#L61)*

Get user

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| this |  `ModelType`<[User](user.md)> & [User](user.md)|
| id | `string` |  The objectId of the user. |

**Returns:** `Promise`<`InstanceType`<[User](user.md)>>

___

