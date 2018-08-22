[medical-model-manager-apis](../README.md) > [UsersAuthUtils](../classes/usersauthutils.md)

# Class: UsersAuthUtils

## Hierarchy

**UsersAuthUtils**

## Index

### Methods

* [getUser](usersauthutils.md#getuser)
* [getUserFromDevEmail](usersauthutils.md#getuserfromdevemail)
* [getUserFromIdToken](usersauthutils.md#getuserfromidtoken)
* [isMaster](usersauthutils.md#ismaster)
* [load](usersauthutils.md#load)
* [verifyIdToken](usersauthutils.md#verifyidtoken)

---

## Methods

<a id="getuser"></a>

### `<Static>` getUser

▸ **getUser**(req: *`Request`*): `Promise`<`InstanceType`<[User](user.md)>>

*Defined in [routes/users/users.auth.ts:126](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L126)*

Gets the user based on their id token or if in development mode an email in a request header.

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |

**Returns:** `Promise`<`InstanceType`<[User](user.md)>>

___
<a id="getuserfromdevemail"></a>

### `<Static>` getUserFromDevEmail

▸ **getUserFromDevEmail**(req: *`Request`*): `Promise`<`InstanceType`<[User](user.md)>>

*Defined in [routes/users/users.auth.ts:98](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L98)*

Attempts to get a user based on an email address in the request header. The header key is defined in settings.json. This method will only succeed in development mode.

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |

**Returns:** `Promise`<`InstanceType`<[User](user.md)>>

___
<a id="getuserfromidtoken"></a>

### `<Static>` getUserFromIdToken

▸ **getUserFromIdToken**(req: *`Request`*): `Promise`<`InstanceType`<[User](user.md)>>

*Defined in [routes/users/users.auth.ts:78](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L78)*

Gets the user from the google id token

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |

**Returns:** `Promise`<`InstanceType`<[User](user.md)>>

___
<a id="ismaster"></a>

### `<Static>` isMaster

▸ **isMaster**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`<`void`>

*Defined in [routes/users/users.auth.ts:153](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L153)*

Ensures the user is a master user

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`<`void`>

___
<a id="load"></a>

### `<Static>` load

▸ **load**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `Promise`<`void`>

*Defined in [routes/users/users.auth.ts:140](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L140)*

Load user and append to req.

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `Promise`<`void`>

___
<a id="verifyidtoken"></a>

### `<Static>` verifyIdToken

▸ **verifyIdToken**(req: *`Request`*): `Promise`<[GoogleAuthData](../interfaces/googleauthdata.md)>

*Defined in [routes/users/users.auth.ts:34](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L34)*

Verifies the google id token is valid and returns its payload

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |

**Returns:** `Promise`<[GoogleAuthData](../interfaces/googleauthdata.md)>

___

