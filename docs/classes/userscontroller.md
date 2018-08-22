[Medical Model Management APIs](../README.md) > [UsersController](../classes/userscontroller.md)

# Class: UsersController

## Hierarchy

**UsersController**

## Index

### Methods

* [create](userscontroller.md#create)
* [get](userscontroller.md#get)
* [load](userscontroller.md#load)
* [remove](userscontroller.md#remove)

---

## Methods

<a id="create"></a>

### `<Static>` create

▸ **create**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`< `void` &#124; `Response`>

*Defined in [routes/users/users.controller.ts:32](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.controller.ts#L32)*

Create new user from the google id token

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

*Defined in [routes/users/users.controller.ts:27](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.controller.ts#L27)*

Get user

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |

**Returns:** `Promise`<`void`>

___
<a id="load"></a>

### `<Static>` load

▸ **load**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*, id: *`string`*): `Promise`<`void`>

*Defined in [routes/users/users.controller.ts:15](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.controller.ts#L15)*

Load user and append to req.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |
| id | `string` |  The user's id |

**Returns:** `Promise`<`void`>

___
<a id="remove"></a>

### `<Static>` remove

▸ **remove**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`< `void` &#124; `Response`>

*Defined in [routes/users/users.controller.ts:48](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/users/users.controller.ts#L48)*

Create new user from the google id token

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`< `void` &#124; `Response`>

___

