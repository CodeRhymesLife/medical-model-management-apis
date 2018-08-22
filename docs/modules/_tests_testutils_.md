[medical-model-manager-apis](../README.md) > ["tests/testUtils"](../modules/_tests_testutils_.md)

# External module: "tests/testUtils"

## Index

### Classes

* [TestCollateral](../classes/_tests_testutils_.testcollateral.md)

### Interfaces

* [MedModeSuperTest](../interfaces/_tests_testutils_.medmodesupertest.md)
* [TestData](../interfaces/_tests_testutils_.testdata.md)
* [TestMesh](../interfaces/_tests_testutils_.testmesh.md)
* [TestMeshCollection](../interfaces/_tests_testutils_.testmeshcollection.md)
* [TestUser](../interfaces/_tests_testutils_.testuser.md)
* [TestUserCollection](../interfaces/_tests_testutils_.testusercollection.md)

### Variables

* [requestClass](_tests_testutils_.md#requestclass)
* [rootCollateralDir](_tests_testutils_.md#rootcollateraldir)

### Functions

* [createMesh](_tests_testutils_.md#createmesh)
* [createUser](_tests_testutils_.md#createuser)
* [request](_tests_testutils_.md#request)

### Object literals

* [test1UserAuthData](_tests_testutils_.md#test1userauthdata)
* [test2UserAuthData](_tests_testutils_.md#test2userauthdata)
* [testData](_tests_testutils_.md#testdata-1)

---

## Variables

<a id="requestclass"></a>

### `<Const>` requestClass

**● requestClass**: *`any`* =  (<any>supertest).Test

*Defined in [tests/testUtils.ts:167](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L167)*

___
<a id="rootcollateraldir"></a>

### `<Const>` rootCollateralDir

**● rootCollateralDir**: *`string`* =  `${rootPath}/testCollateral`

*Defined in [tests/testUtils.ts:44](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L44)*

___

## Functions

<a id="createmesh"></a>

### `<Const>` createMesh

▸ **createMesh**(owner: *`InstanceType`<[User](../classes/_routes_users_users_model_.user.md)>*, testMesh: *[TestMesh](../interfaces/_tests_testutils_.testmesh.md)*, state?: *[ResourceStates](../enums/_routes_meshes_meshes_model_.resourcestates.md)*): `Promise`<`InstanceType`<[Mesh](../classes/_routes_meshes_meshes_model_.mesh.md)>>

*Defined in [tests/testUtils.ts:202](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L202)*

Creates a test mesh based on the specified data

**Parameters:**

| Param | Type |
| ------ | ------ |
| owner | `InstanceType`<[User](../classes/_routes_users_users_model_.user.md)> |
| testMesh | [TestMesh](../interfaces/_tests_testutils_.testmesh.md) |
| `Optional` state | [ResourceStates](../enums/_routes_meshes_meshes_model_.resourcestates.md) |

**Returns:** `Promise`<`InstanceType`<[Mesh](../classes/_routes_meshes_meshes_model_.mesh.md)>>

___
<a id="createuser"></a>

### `<Const>` createUser

▸ **createUser**(testUser: *[TestUser](../interfaces/_tests_testutils_.testuser.md)*): `Promise`<`InstanceType`<[User](../classes/_routes_users_users_model_.user.md)>>

*Defined in [tests/testUtils.ts:197](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L197)*

Creates a test user based on the specified token values

**Parameters:**

| Param | Type |
| ------ | ------ |
| testUser | [TestUser](../interfaces/_tests_testutils_.testuser.md) |

**Returns:** `Promise`<`InstanceType`<[User](../classes/_routes_users_users_model_.user.md)>>

___
<a id="request"></a>

### `<Const>` request

▸ **request**(app: *`any`*): `SuperTest`<[MedModeSuperTest](../interfaces/_tests_testutils_.medmodesupertest.md)>

*Defined in [tests/testUtils.ts:192](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L192)*

Tests should import this reqesust to get extensions through intellidense

**Parameters:**

| Param | Type |
| ------ | ------ |
| app | `any` |

**Returns:** `SuperTest`<[MedModeSuperTest](../interfaces/_tests_testutils_.medmodesupertest.md)>

___

## Object literals

<a id="test1userauthdata"></a>

### `<Const>` test1UserAuthData

**test1UserAuthData**: *`object`*

*Defined in [tests/testUtils.ts:94](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L94)*

Auth data for the first test user

<a id="test1userauthdata.email"></a>

####  email

**● email**: *`string`* = "test1@test.com"

*Defined in [tests/testUtils.ts:98](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L98)*

___
<a id="test1userauthdata.id"></a>

####  id

**● id**: *`string`* = "123456789"

*Defined in [tests/testUtils.ts:96](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L96)*

___
<a id="test1userauthdata.idtoken"></a>

####  idToken

**● idToken**: *`string`* = "abcdefg"

*Defined in [tests/testUtils.ts:95](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L95)*

___
<a id="test1userauthdata.name"></a>

####  name

**● name**: *`string`* = "Test User 1"

*Defined in [tests/testUtils.ts:97](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L97)*

___

___
<a id="test2userauthdata"></a>

### `<Const>` test2UserAuthData

**test2UserAuthData**: *`object`*

*Defined in [tests/testUtils.ts:102](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L102)*

Auth data for the first test user

<a id="test2userauthdata.email-1"></a>

####  email

**● email**: *`string`* = "test2@test.com"

*Defined in [tests/testUtils.ts:106](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L106)*

___
<a id="test2userauthdata.id-1"></a>

####  id

**● id**: *`string`* = "987654321"

*Defined in [tests/testUtils.ts:104](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L104)*

___
<a id="test2userauthdata.idtoken-1"></a>

####  idToken

**● idToken**: *`string`* = "hijklmnop"

*Defined in [tests/testUtils.ts:103](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L103)*

___
<a id="test2userauthdata.name-1"></a>

####  name

**● name**: *`string`* = "Test User 2"

*Defined in [tests/testUtils.ts:105](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L105)*

___

___
<a id="testdata-1"></a>

### `<Const>` testData

**testData**: *`object`*

*Defined in [tests/testUtils.ts:110](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L110)*

A collection of test data for use in automation

<a id="testdata-1.invalidid"></a>

####  invalidId

**● invalidId**: *`string`* = "5b52594de29d171ae09642da"

*Defined in [tests/testUtils.ts:156](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L156)*

___
<a id="testdata-1.meshes"></a>

####  meshes

**meshes**: *`object`*

*Defined in [tests/testUtils.ts:123](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L123)*

<a id="testdata-1.meshes.objmtl"></a>

####  objMtl

**objMtl**: *`object`*

*Defined in [tests/testUtils.ts:148](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L148)*

<a id="testdata-1.meshes.objmtl.files"></a>

####  files

**● files**: *`File`[]* =  [TestCollateral.Cube_OBJ, TestCollateral.Cube_MTL]

*Defined in [tests/testUtils.ts:152](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L152)*

___
<a id="testdata-1.meshes.objmtl.longdesc"></a>

####  longDesc

**● longDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:151](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L151)*

___
<a id="testdata-1.meshes.objmtl.name-2"></a>

####  name

**● name**: *`string`* = "Test Mesh - obj file"

*Defined in [tests/testUtils.ts:149](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L149)*

___
<a id="testdata-1.meshes.objmtl.shortdesc"></a>

####  shortDesc

**● shortDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:150](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L150)*

___

___
<a id="testdata-1.meshes.one"></a>

####  one

**one**: *`object`*

*Defined in [tests/testUtils.ts:124](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L124)*

<a id="testdata-1.meshes.one.files-1"></a>

####  files

**● files**: *`File`[]* =  [TestCollateral.Cube_FBX]

*Defined in [tests/testUtils.ts:128](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L128)*

___
<a id="testdata-1.meshes.one.longdesc-1"></a>

####  longDesc

**● longDesc**: *`string`* = "This is a really, really, really long description that's not actually all that long"

*Defined in [tests/testUtils.ts:127](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L127)*

___
<a id="testdata-1.meshes.one.name-3"></a>

####  name

**● name**: *`string`* = "Test Mesh 1"

*Defined in [tests/testUtils.ts:125](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L125)*

___
<a id="testdata-1.meshes.one.shortdesc-1"></a>

####  shortDesc

**● shortDesc**: *`string`* = "This is a short description"

*Defined in [tests/testUtils.ts:126](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L126)*

___

___
<a id="testdata-1.meshes.two"></a>

####  two

**two**: *`object`*

*Defined in [tests/testUtils.ts:131](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L131)*

<a id="testdata-1.meshes.two.files-2"></a>

####  files

**● files**: *`File`[]* =  [TestCollateral.Cube_FBX]

*Defined in [tests/testUtils.ts:135](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L135)*

___
<a id="testdata-1.meshes.two.longdesc-2"></a>

####  longDesc

**● longDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:134](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L134)*

___
<a id="testdata-1.meshes.two.name-4"></a>

####  name

**● name**: *`string`* = "Test Mesh 2"

*Defined in [tests/testUtils.ts:132](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L132)*

___
<a id="testdata-1.meshes.two.shortdesc-2"></a>

####  shortDesc

**● shortDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:133](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L133)*

___

___
<a id="testdata-1.meshes.withtexture"></a>

####  withTexture

**withTexture**: *`object`*

*Defined in [tests/testUtils.ts:138](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L138)*

<a id="testdata-1.meshes.withtexture.files-3"></a>

####  files

**● files**: *`File`[]* =  [
                TestCollateral.CubeWithTexture_FBX,
                TestCollateral.BlenderImage,
            ]

*Defined in [tests/testUtils.ts:142](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L142)*

___
<a id="testdata-1.meshes.withtexture.longdesc-3"></a>

####  longDesc

**● longDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:141](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L141)*

___
<a id="testdata-1.meshes.withtexture.name-5"></a>

####  name

**● name**: *`string`* = "Test Mesh With Textures"

*Defined in [tests/testUtils.ts:139](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L139)*

___
<a id="testdata-1.meshes.withtexture.shortdesc-3"></a>

####  shortDesc

**● shortDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:140](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L140)*

___

___

___
<a id="testdata-1.users"></a>

####  users

**users**: *`object`*

*Defined in [tests/testUtils.ts:111](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L111)*

<a id="testdata-1.users.one-1"></a>

####  one

**one**: *`object`*

*Defined in [tests/testUtils.ts:112](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L112)*

<a id="testdata-1.users.one-1.auth"></a>

####  auth

**● auth**: *[GoogleAuthData](../interfaces/_routes_users_users_auth_.googleauthdata.md)* =  test1UserAuthData

*Defined in [tests/testUtils.ts:113](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L113)*

___
<a id="testdata-1.users.one-1.idtoken-2"></a>

####  idToken

**● idToken**: *`string`* =  JSON.stringify(test1UserAuthData)

*Defined in [tests/testUtils.ts:114](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L114)*

___

___
<a id="testdata-1.users.two-1"></a>

####  two

**two**: *`object`*

*Defined in [tests/testUtils.ts:117](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L117)*

<a id="testdata-1.users.two-1.auth-1"></a>

####  auth

**● auth**: *[GoogleAuthData](../interfaces/_routes_users_users_auth_.googleauthdata.md)* =  test2UserAuthData

*Defined in [tests/testUtils.ts:118](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L118)*

___
<a id="testdata-1.users.two-1.idtoken-3"></a>

####  idToken

**● idToken**: *`string`* =  JSON.stringify(test2UserAuthData)

*Defined in [tests/testUtils.ts:119](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/tests/testUtils.ts#L119)*

___

___

___

___

