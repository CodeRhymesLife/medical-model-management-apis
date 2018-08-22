[medical-model-manager-apis](../README.md) > [TestUser](../interfaces/testuser.md)

# Interface: TestUser

A test user

## Hierarchy

**TestUser**

## Index

### Properties

* [auth](testuser.md#auth)
* [idToken](testuser.md#idtoken)

---

## Properties

<a id="auth"></a>

###  auth

**● auth**: *[GoogleAuthData](googleauthdata.md)*

*Defined in [tests/testUtils.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L14)*

The test user's fake auth data

___
<a id="idtoken"></a>

###  idToken

**● idToken**: *`string`*

*Defined in [tests/testUtils.ts:17](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L17)*

The test user's id token, which is just a strigified version of the auth data

___

