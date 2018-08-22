
Medical Model Management: APIs
==============================

> MedMod-APIs is a RESTful and scalable node cloud service that processes and manages medical images and 3D models. MedMod-APIs run on docker and process models programatically using Blender and Unity.

I initially developed these APIs as a backend to support a virtual reality medical imaging viewer (video below). I decided to open source this work to give others a foundational tool for medical model management and image processing. My hope is that this project supports medical research in, but not limited to, the following areas:

*   Virtual and Mixed Reality
*   AI / Machine Learning / Image Processing
*   Medical Simulation / Training
*   Surgical Planning
*   Procedural Guidance
*   3D Printing

Status
------

This project is unfinished but in active development. Please send me a message if you are interested in staying up to date.

Setup
-----

1.  Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
2.  Install [Docker Compose](https://docs.docker.com/compose/install/#install-compose)
3.  Install yarn `npm install yarn -g`
4.  Run setup `yarn setup`

Running a Dev Server
--------------------

`yarn start`

Testing
-------

`yarn test`

Deploying a Production Server
-----------------------------

`yarn deploy:prod`

Videos
------

Here are a few applications that use this service:

[![Bosc](https://img.youtube.com/vi/H1NS6GyttLg/0.jpg)](https://www.youtube.com/watch?v=H1NS6GyttLg "Bosc")

[![Baby Z](https://i.ytimg.com/vi_webp/8SUFeplhgBI/hqdefault.webp)](https://www.youtube.com/watch?v=8SUFeplhgBI, "Baby Z")

[![EP Procedural Guidance](https://user-images.githubusercontent.com/2764891/44436623-1eb40c80-a56b-11e8-949d-e2d1d00ff861.png)](https://drive.google.com/a/pyrusmedical.com/file/d/1Pss_oNLa64zbB8OdCJjUB1zj7Vb4KNYv/view?usp=drivesdk, "EP Procedural Guidance")

[![IR Procedural Guidance](https://user-images.githubusercontent.com/2764891/44436599-f7f5d600-a56a-11e8-9fde-1a2373b0f44c.png)](https://drive.google.com/a/pyrusmedical.com/file/d/1lUXK06cWIYIcm8cMJcoedTnnCohcmmdV/view?usp=drivesdk, "IR Procedural Guidance")

## Index

### Enumerations

* [ResourceStates](enums/resourcestates.md)

### Classes

* [APIError](classes/apierror.md)
* [Blender](classes/blender.md)
* [BlenderMeshProcessor](classes/blendermeshprocessor.md)
* [ExtendableError](classes/extendableerror.md)
* [GoogleUser](classes/googleuser.md)
* [GridFSFile](classes/gridfsfile.md)
* [Mesh](classes/mesh.md)
* [MeshFileCollection](classes/meshfilecollection.md)
* [MeshModelController](classes/meshmodelcontroller.md)
* [MeshProcessor](classes/meshprocessor.md)
* [MeshStorage](classes/meshstorage.md)
* [OBJMTLPair](classes/objmtlpair.md)
* [TestCollateral](classes/testcollateral.md)
* [User](classes/user.md)
* [UsersAuthUtils](classes/usersauthutils.md)
* [UsersController](classes/userscontroller.md)

### Interfaces

* [BlenderResponse](interfaces/blenderresponse.md)
* [GoogleAuthData](interfaces/googleauthdata.md)
* [LoggerData](interfaces/loggerdata.md)
* [MedModeSuperTest](interfaces/medmodesupertest.md)
* [MeshJob](interfaces/meshjob.md)
* [MeshJobData](interfaces/meshjobdata.md)
* [MeshPartInfo](interfaces/meshpartinfo.md)
* [ObjMtlFilePaths](interfaces/objmtlfilepaths.md)
* [TestData](interfaces/testdata.md)
* [TestMesh](interfaces/testmesh.md)
* [TestMeshCollection](interfaces/testmeshcollection.md)
* [TestUser](interfaces/testuser.md)
* [TestUserCollection](interfaces/testusercollection.md)

### Variables

* [FieldName](#fieldname)
* [GridFSFileModel](#gridfsfilemodel)
* [Joi](#joi)
* [LOG_TAG](#log_tag)
* [MaxFiles](#maxfiles)
* [MeshFileCollectionModel](#meshfilecollectionmodel)
* [MeshFileExtensions](#meshfileextensions)
* [MeshFileMimeTypes](#meshfilemimetypes)
* [MeshModel](#meshmodel)
* [OBJMTLPairModel](#objmtlpairmodel)
* [PYTHON_SCRIPT_PATH](#python_script_path)
* [QUEUE_NAME](#queue_name)
* [ResourceFileExtensions](#resourcefileextensions)
* [ResourceFileMimeTypes](#resourcefilemimetypes)
* [TEST_SCRIPT](#test_script)
* [UserModel](#usermodel)
* [app](#app)
* [authClient](#authclient)
* [envVars](#envvars)
* [envVarsSchema](#envvarsschema)
* [error](#error)
* [expect](#expect)
* [logger](#logger)
* [requestClass](#requestclass)
* [rootCollateralDir](#rootcollateraldir)
* [router](#router)
* [transports](#transports)

### Functions

* [cleanMongoose](#cleanmongoose)
* [connectToDb](#connecttodb)
* [createMesh](#createmesh)
* [createReqLogger](#createreqlogger)
* [createUser](#createuser)
* [mountRoutes](#mountroutes)
* [request](#request)
* [setupReqLogger](#setupreqlogger)

### Object literals

* [WINSTON_LOGGING_CONFIG](#winston_logging_config)
* [config](#config)
* [test1UserAuthData](#test1userauthdata)
* [test2UserAuthData](#test2userauthdata)
* [testData](#testdata)

---

## Variables

<a id="fieldname"></a>

### `<Const>` FieldName

**● FieldName**: *"modelFile"* = "modelFile"

*Defined in [routes/meshes/meshes.storage.ts:16](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L16)*

The name of the field used to upload

___
<a id="gridfsfilemodel"></a>

### `<Const>` GridFSFileModel

**● GridFSFileModel**: * `Model`< [GridFSFile](classes/gridfsfile.md) & `Document`> & [GridFSFile](classes/gridfsfile.md) & [GridFSFile](classes/gridfsfile.md)
* =  new GridFSFile().getModelForClass(GridFSFile, {
    schemaOptions: {
        collection: 'fs.files',
        toJSON: { virtuals: true }
    },
})

*Defined in [routes/meshes/meshes.model.ts:398](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L398)*

___
<a id="joi"></a>

### `<Const>` Joi

**● Joi**: *`any`* =  require('joi')

*Defined in [config/param-validation.ts:1](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/param-validation.ts#L1)*

___
<a id="log_tag"></a>

### `<Const>` LOG_TAG

**● LOG_TAG**: *"[TestSetup]"* = "[TestSetup]"

*Defined in [config/winston.ts:6](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L6)*
*Defined in [config/config.ts:6](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L6)*
*Defined in [index.routes.ts:7](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/index.routes.ts#L7)*
*Defined in [index.ts:13](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/index.ts#L13)*
*Defined in [routes/meshes/blender/blender.ts:6](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blender/blender.ts#L6)*
*Defined in [routes/meshes/meshes.storage.ts:10](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L10)*
*Defined in [routes/users/users.model.ts:12](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.model.ts#L12)*
*Defined in [routes/meshes/meshes.model.ts:26](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L26)*
*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:20](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L20)*
*Defined in [routes/users/users.auth.ts:12](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L12)*
*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L8)*
*Defined in [routes/meshes/meshes.controller.ts:10](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.controller.ts#L10)*
*Defined in [routes/users/users.controller.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.controller.ts#L8)*
*Defined in [tests/setup.test.ts:5](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/setup.test.ts#L5)*

___
<a id="maxfiles"></a>

### `<Const>` MaxFiles

**● MaxFiles**: *`100`* = 100

*Defined in [routes/meshes/meshes.storage.ts:13](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L13)*

The max number of files that can be uploaded

___
<a id="meshfilecollectionmodel"></a>

### `<Const>` MeshFileCollectionModel

**● MeshFileCollectionModel**: * `Model`< [MeshFileCollection](classes/meshfilecollection.md) & `Document`> & [MeshFileCollection](classes/meshfilecollection.md) & [MeshFileCollection](classes/meshfilecollection.md)
* =  new MeshFileCollection().getModelForClass(MeshFileCollection, {
    schemaOptions: { toJSON: { virtuals: true } },
})

*Defined in [routes/meshes/meshes.model.ts:394](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L394)*

___
<a id="meshfileextensions"></a>

### `<Const>` MeshFileExtensions

**● MeshFileExtensions**: *`RegExp`* =  /.obj|.fbx|.stl/

*Defined in [routes/meshes/meshes.storage.ts:18](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L18)*

___
<a id="meshfilemimetypes"></a>

### `<Const>` MeshFileMimeTypes

**● MeshFileMimeTypes**: *`RegExp`* =  /octet-stream|text\/plain/

*Defined in [routes/meshes/meshes.storage.ts:19](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L19)*

___
<a id="meshmodel"></a>

### `<Const>` MeshModel

**● MeshModel**: * `Model`< [Mesh](classes/mesh.md) & `Document`> & [Mesh](classes/mesh.md) & [Mesh](classes/mesh.md)
* =  new Mesh().getModelForClass(Mesh, {
    schemaOptions: { toJSON: { virtuals: true } },
})

*Defined in [routes/meshes/meshes.model.ts:390](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L390)*

___
<a id="objmtlpairmodel"></a>

### `<Const>` OBJMTLPairModel

**● OBJMTLPairModel**: * `Model`< [OBJMTLPair](classes/objmtlpair.md) & `Document`> & [OBJMTLPair](classes/objmtlpair.md) & [OBJMTLPair](classes/objmtlpair.md)
* =  new OBJMTLPair().getModelForClass(OBJMTLPair)

*Defined in [routes/meshes/meshes.model.ts:405](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.model.ts#L405)*

___
<a id="python_script_path"></a>

### `<Const>` PYTHON_SCRIPT_PATH

**● PYTHON_SCRIPT_PATH**: *`string`* =  `${__dirname}/prepMeshInBlender.py`

*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts:21](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.ts#L21)*

___
<a id="queue_name"></a>

### `<Const>` QUEUE_NAME

**● QUEUE_NAME**: *"mesh_processor"* = "mesh_processor"

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:10](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L10)*

___
<a id="resourcefileextensions"></a>

### `<Const>` ResourceFileExtensions

**● ResourceFileExtensions**: *`RegExp`* =  /.jpg|.jpeg|.mtl|.png/

*Defined in [routes/meshes/meshes.storage.ts:20](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L20)*

___
<a id="resourcefilemimetypes"></a>

### `<Const>` ResourceFileMimeTypes

**● ResourceFileMimeTypes**: *`RegExp`* =  /octet-stream|jpeg|png/

*Defined in [routes/meshes/meshes.storage.ts:21](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.storage.ts#L21)*

___
<a id="test_script"></a>

### `<Const>` TEST_SCRIPT

**● TEST_SCRIPT**: *`string`* =  `${__dirname}/blender.test.py`

*Defined in [routes/meshes/blender/blender.test.ts:7](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blender/blender.test.ts#L7)*

___
<a id="usermodel"></a>

### `<Const>` UserModel

**● UserModel**: * `Model`< [User](classes/user.md) & `Document`> & [User](classes/user.md) & [User](classes/user.md)
* =  new User().getModelForClass(User, { schemaOptions: { toJSON: {virtuals: true } } })

*Defined in [routes/users/users.model.ts:107](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.model.ts#L107)*

___
<a id="app"></a>

### `<Const>` app

**● app**: *`Express`* =  express()

*Defined in [config/express.ts:20](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/express.ts#L20)*

___
<a id="authclient"></a>

### `<Const>` authClient

**● authClient**: *`OAuth2Client`* =  new OAuth2Client('', '', '')

*Defined in [routes/users/users.auth.ts:15](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.auth.ts#L15)*

___
<a id="envvars"></a>

###  envVars

**● envVars**: *`ProcessEnv`*

*Defined in [config/config.ts:31](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L31)*

___
<a id="envvarsschema"></a>

### `<Const>` envVarsSchema

**● envVarsSchema**: *`ObjectSchema`* =  Joi.object({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test', 'provision'])
        .default('development'),
    PORT: Joi.number()
        .default(3000),
    MONGOOSE_DEBUG: Joi.boolean()
        .when('NODE_ENV', {
            is: Joi.string().equal('development'),
            then: Joi.boolean().default(true),
            otherwise: Joi.boolean().default(false),
        }),
    MONGO_HOST: Joi.string().required()
        .description('Mongo DB host url'),
    MONGO_PORT: Joi.number()
        .default(27017),
}).unknown()
    .required()

*Defined in [config/config.ts:12](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L12)*

___
<a id="error"></a>

###  error

**● error**: *`ValidationError`*

*Defined in [config/config.ts:31](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L31)*

___
<a id="expect"></a>

### `<Const>` expect

**● expect**: *`ExpectStatic`* =  chai.expect

*Defined in [routes/meshes/blender/blender.test.ts:5](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blender/blender.test.ts#L5)*
*Defined in [routes/meshes/blenderMeshProcessor/blenderMeshProcessor.test.ts:9](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/blenderMeshProcessor/blenderMeshProcessor.test.ts#L9)*
*Defined in [routes/meshes/meshes.test.ts:18](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.test.ts#L18)*
*Defined in [routes/users/users.test.ts:9](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.test.ts#L9)*

___
<a id="logger"></a>

### `<Const>` logger

**● logger**: *`any`* =  winston

*Defined in [config/winston.ts:72](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L72)*

___
<a id="requestclass"></a>

### `<Const>` requestClass

**● requestClass**: *`any`* =  (<any>supertest).Test

*Defined in [tests/testUtils.ts:167](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L167)*

___
<a id="rootcollateraldir"></a>

### `<Const>` rootCollateralDir

**● rootCollateralDir**: *`string`* =  `${rootPath}/testCollateral`

*Defined in [tests/testUtils.ts:44](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L44)*

___
<a id="router"></a>

### `<Const>` router

**● router**: *`Router`* =  express.Router()

*Defined in [index.routes.ts:9](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/index.routes.ts#L9)*
*Defined in [routes/meshes/meshes.route.ts:9](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshes.route.ts#L9)*
*Defined in [routes/users/users.route.ts:6](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/users/users.route.ts#L6)*

___
<a id="transports"></a>

### `<Const>` transports

**● transports**: *`any`[]* =  [
    new (logger.transports.Console)({
        json: true,
        colorize: true,
    }),
]

*Defined in [config/express.ts:56](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/express.ts#L56)*

___

## Functions

<a id="cleanmongoose"></a>

### `<Const>` cleanMongoose

▸ **cleanMongoose**(): `Promise`<`void`>

*Defined in [tests/setup.test.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/setup.test.ts#L8)*

Cleans the mongoose object after each test

**Returns:** `Promise`<`void`>

___
<a id="connecttodb"></a>

### `<Const>` connectToDb

▸ **connectToDb**(): `Promise`<`void`>

*Defined in [index.ts:19](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/index.ts#L19)*

Connect to mongo db

**Returns:** `Promise`<`void`>

___
<a id="createmesh"></a>

### `<Const>` createMesh

▸ **createMesh**(owner: *`InstanceType`<[User](classes/user.md)>*, testMesh: *[TestMesh](interfaces/testmesh.md)*, state?: *[ResourceStates](enums/resourcestates.md)*): `Promise`<`InstanceType`<[Mesh](classes/mesh.md)>>

*Defined in [tests/testUtils.ts:202](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L202)*

Creates a test mesh based on the specified data

**Parameters:**

| Param | Type |
| ------ | ------ |
| owner | `InstanceType`<[User](classes/user.md)> |
| testMesh | [TestMesh](interfaces/testmesh.md) |
| `Optional` state | [ResourceStates](enums/resourcestates.md) |

**Returns:** `Promise`<`InstanceType`<[Mesh](classes/mesh.md)>>

___
<a id="createreqlogger"></a>

### `<Const>` createReqLogger

▸ **createReqLogger**(reqId: *`string`*, sessionId: *`string`*): `any`

*Defined in [config/winston.ts:57](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| reqId | `string` |
| sessionId | `string` |

**Returns:** `any`

___
<a id="createuser"></a>

### `<Const>` createUser

▸ **createUser**(testUser: *[TestUser](interfaces/testuser.md)*): `Promise`<`InstanceType`<[User](classes/user.md)>>

*Defined in [tests/testUtils.ts:197](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L197)*

Creates a test user based on the specified token values

**Parameters:**

| Param | Type |
| ------ | ------ |
| testUser | [TestUser](interfaces/testuser.md) |

**Returns:** `Promise`<`InstanceType`<[User](classes/user.md)>>

___
<a id="mountroutes"></a>

### `<Const>` mountRoutes

▸ **mountRoutes**(): `void`

*Defined in [index.routes.ts:16](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/index.routes.ts#L16)*

Mounts all routes defined in *.route.js files in routes/

**Returns:** `void`

___
<a id="request"></a>

### `<Const>` request

▸ **request**(app: *`any`*): `SuperTest`<[MedModeSuperTest](interfaces/medmodesupertest.md)>

*Defined in [tests/testUtils.ts:192](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L192)*

Tests should import this reqesust to get extensions through intellidense

**Parameters:**

| Param | Type |
| ------ | ------ |
| app | `any` |

**Returns:** `SuperTest`<[MedModeSuperTest](interfaces/medmodesupertest.md)>

___
<a id="setupreqlogger"></a>

### `<Const>` setupReqLogger

▸ **setupReqLogger**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `void`

*Defined in [config/winston.ts:74](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| req | `Request` |
| res | `Response` |
| next | `NextFunction` |

**Returns:** `void`

___

## Object literals

<a id="winston_logging_config"></a>

### `<Const>` WINSTON_LOGGING_CONFIG

**WINSTON_LOGGING_CONFIG**: *`object`*

*Defined in [config/winston.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L8)*

<a id="winston_logging_config.transports"></a>

####  transports

**transports**: *`object`*

*Defined in [config/winston.ts:9](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L9)*

<a id="winston_logging_config.transports.console"></a>

####  console

**console**: *`object`*

*Defined in [config/winston.ts:10](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L10)*

<a id="winston_logging_config.transports.console.colorize"></a>

####  colorize

**● colorize**: *`boolean`* = true

*Defined in [config/winston.ts:13](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L13)*

___
<a id="winston_logging_config.transports.console.enabled"></a>

####  enabled

**● enabled**: *`boolean`* = true

*Defined in [config/winston.ts:11](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L11)*

___
<a id="winston_logging_config.transports.console.handleexceptions"></a>

####  handleExceptions

**● handleExceptions**: *`boolean`* = true

*Defined in [config/winston.ts:16](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L16)*

___
<a id="winston_logging_config.transports.console.json"></a>

####  json

**● json**: *`boolean`* = false

*Defined in [config/winston.ts:15](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L15)*

___
<a id="winston_logging_config.transports.console.timestamp"></a>

####  timestamp

**● timestamp**: *`boolean`* = false

*Defined in [config/winston.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L14)*

___

___
<a id="winston_logging_config.transports.file"></a>

####  file

**file**: *`object`*

*Defined in [config/winston.ts:19](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L19)*

<a id="winston_logging_config.transports.file.colorize-1"></a>

####  colorize

**● colorize**: *`boolean`* = true

*Defined in [config/winston.ts:22](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L22)*

___
<a id="winston_logging_config.transports.file.enabled-1"></a>

####  enabled

**● enabled**: *`boolean`* = true

*Defined in [config/winston.ts:20](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L20)*

___
<a id="winston_logging_config.transports.file.filename"></a>

####  filename

**● filename**: *`string`* = "logs/apis.log"

*Defined in [config/winston.ts:23](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L23)*

___
<a id="winston_logging_config.transports.file.handleexceptions-1"></a>

####  handleExceptions

**● handleExceptions**: *`boolean`* = true

*Defined in [config/winston.ts:25](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L25)*

___
<a id="winston_logging_config.transports.file.json-1"></a>

####  json

**● json**: *`boolean`* = true

*Defined in [config/winston.ts:26](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L26)*

___
<a id="winston_logging_config.transports.file.maxsize"></a>

####  maxsize

**● maxsize**: *`number`* = 5242880

*Defined in [config/winston.ts:27](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L27)*

___
<a id="winston_logging_config.transports.file.timestamp-1"></a>

####  timestamp

**● timestamp**: *`boolean`* = true

*Defined in [config/winston.ts:24](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/winston.ts#L24)*

___

___

___

___
<a id="config"></a>

### `<Const>` config

**config**: *`object`*

*Defined in [config/config.ts:36](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L36)*

<a id="config.env"></a>

####  env

**● env**: *`string`* =  envVars.NODE_ENV

*Defined in [config/config.ts:37](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L37)*

___
<a id="config.mongoosedebug"></a>

####  mongooseDebug

**● mongooseDebug**: *`string`* =  envVars.MONGOOSE_DEBUG

*Defined in [config/config.ts:39](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L39)*

___
<a id="config.port"></a>

####  port

**● port**: *`string`* =  envVars.PORT

*Defined in [config/config.ts:38](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L38)*

___
<a id="config.mongo"></a>

####  mongo

**mongo**: *`object`*

*Defined in [config/config.ts:40](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L40)*

<a id="config.mongo.host"></a>

####  host

**● host**: *`string`* =  envVars.MONGO_HOST

*Defined in [config/config.ts:41](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L41)*

___
<a id="config.mongo.port-1"></a>

####  port

**● port**: *`string`* =  envVars.MONGO_PORT

*Defined in [config/config.ts:42](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/config/config.ts#L42)*

___

___

___
<a id="test1userauthdata"></a>

### `<Const>` test1UserAuthData

**test1UserAuthData**: *`object`*

*Defined in [tests/testUtils.ts:94](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L94)*

Auth data for the first test user

<a id="test1userauthdata.email"></a>

####  email

**● email**: *`string`* = "test1@test.com"

*Defined in [tests/testUtils.ts:98](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L98)*

___
<a id="test1userauthdata.id"></a>

####  id

**● id**: *`string`* = "123456789"

*Defined in [tests/testUtils.ts:96](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L96)*

___
<a id="test1userauthdata.idtoken"></a>

####  idToken

**● idToken**: *`string`* = "abcdefg"

*Defined in [tests/testUtils.ts:95](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L95)*

___
<a id="test1userauthdata.name"></a>

####  name

**● name**: *`string`* = "Test User 1"

*Defined in [tests/testUtils.ts:97](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L97)*

___

___
<a id="test2userauthdata"></a>

### `<Const>` test2UserAuthData

**test2UserAuthData**: *`object`*

*Defined in [tests/testUtils.ts:102](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L102)*

Auth data for the first test user

<a id="test2userauthdata.email"></a>

####  email

**● email**: *`string`* = "test2@test.com"

*Defined in [tests/testUtils.ts:106](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L106)*

___
<a id="test2userauthdata.id"></a>

####  id

**● id**: *`string`* = "987654321"

*Defined in [tests/testUtils.ts:104](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L104)*

___
<a id="test2userauthdata.idtoken"></a>

####  idToken

**● idToken**: *`string`* = "hijklmnop"

*Defined in [tests/testUtils.ts:103](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L103)*

___
<a id="test2userauthdata.name"></a>

####  name

**● name**: *`string`* = "Test User 2"

*Defined in [tests/testUtils.ts:105](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L105)*

___

___
<a id="testdata"></a>

### `<Const>` testData

**testData**: *`object`*

*Defined in [tests/testUtils.ts:110](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L110)*

A collection of test data for use in automation

<a id="testdata.invalidid"></a>

####  invalidId

**● invalidId**: *`string`* = "5b52594de29d171ae09642da"

*Defined in [tests/testUtils.ts:156](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L156)*

___
<a id="testdata.meshes"></a>

####  meshes

**meshes**: *`object`*

*Defined in [tests/testUtils.ts:123](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L123)*

<a id="testdata.meshes.objmtl"></a>

####  objMtl

**objMtl**: *`object`*

*Defined in [tests/testUtils.ts:148](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L148)*

<a id="testdata.meshes.objmtl.files"></a>

####  files

**● files**: *`File`[]* =  [TestCollateral.Cube_OBJ, TestCollateral.Cube_MTL]

*Defined in [tests/testUtils.ts:152](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L152)*

___
<a id="testdata.meshes.objmtl.longdesc"></a>

####  longDesc

**● longDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:151](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L151)*

___
<a id="testdata.meshes.objmtl.name"></a>

####  name

**● name**: *`string`* = "Test Mesh - obj file"

*Defined in [tests/testUtils.ts:149](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L149)*

___
<a id="testdata.meshes.objmtl.shortdesc"></a>

####  shortDesc

**● shortDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:150](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L150)*

___

___
<a id="testdata.meshes.one"></a>

####  one

**one**: *`object`*

*Defined in [tests/testUtils.ts:124](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L124)*

<a id="testdata.meshes.one.files-1"></a>

####  files

**● files**: *`File`[]* =  [TestCollateral.Cube_FBX]

*Defined in [tests/testUtils.ts:128](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L128)*

___
<a id="testdata.meshes.one.longdesc-1"></a>

####  longDesc

**● longDesc**: *`string`* = "This is a really, really, really long description that's not actually all that long"

*Defined in [tests/testUtils.ts:127](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L127)*

___
<a id="testdata.meshes.one.name-1"></a>

####  name

**● name**: *`string`* = "Test Mesh 1"

*Defined in [tests/testUtils.ts:125](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L125)*

___
<a id="testdata.meshes.one.shortdesc-1"></a>

####  shortDesc

**● shortDesc**: *`string`* = "This is a short description"

*Defined in [tests/testUtils.ts:126](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L126)*

___

___
<a id="testdata.meshes.two"></a>

####  two

**two**: *`object`*

*Defined in [tests/testUtils.ts:131](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L131)*

<a id="testdata.meshes.two.files-2"></a>

####  files

**● files**: *`File`[]* =  [TestCollateral.Cube_FBX]

*Defined in [tests/testUtils.ts:135](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L135)*

___
<a id="testdata.meshes.two.longdesc-2"></a>

####  longDesc

**● longDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:134](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L134)*

___
<a id="testdata.meshes.two.name-2"></a>

####  name

**● name**: *`string`* = "Test Mesh 2"

*Defined in [tests/testUtils.ts:132](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L132)*

___
<a id="testdata.meshes.two.shortdesc-2"></a>

####  shortDesc

**● shortDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:133](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L133)*

___

___
<a id="testdata.meshes.withtexture"></a>

####  withTexture

**withTexture**: *`object`*

*Defined in [tests/testUtils.ts:138](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L138)*

<a id="testdata.meshes.withtexture.files-3"></a>

####  files

**● files**: *`File`[]* =  [
                TestCollateral.CubeWithTexture_FBX,
                TestCollateral.BlenderImage,
            ]

*Defined in [tests/testUtils.ts:142](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L142)*

___
<a id="testdata.meshes.withtexture.longdesc-3"></a>

####  longDesc

**● longDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:141](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L141)*

___
<a id="testdata.meshes.withtexture.name-3"></a>

####  name

**● name**: *`string`* = "Test Mesh With Textures"

*Defined in [tests/testUtils.ts:139](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L139)*

___
<a id="testdata.meshes.withtexture.shortdesc-3"></a>

####  shortDesc

**● shortDesc**: *`undefined`* =  undefined

*Defined in [tests/testUtils.ts:140](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L140)*

___

___

___
<a id="testdata.users"></a>

####  users

**users**: *`object`*

*Defined in [tests/testUtils.ts:111](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L111)*

<a id="testdata.users.one-1"></a>

####  one

**one**: *`object`*

*Defined in [tests/testUtils.ts:112](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L112)*

<a id="testdata.users.one-1.auth"></a>

####  auth

**● auth**: *[GoogleAuthData](interfaces/googleauthdata.md)* =  test1UserAuthData

*Defined in [tests/testUtils.ts:113](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L113)*

___
<a id="testdata.users.one-1.idtoken"></a>

####  idToken

**● idToken**: *`string`* =  JSON.stringify(test1UserAuthData)

*Defined in [tests/testUtils.ts:114](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L114)*

___

___
<a id="testdata.users.two-1"></a>

####  two

**two**: *`object`*

*Defined in [tests/testUtils.ts:117](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L117)*

<a id="testdata.users.two-1.auth-1"></a>

####  auth

**● auth**: *[GoogleAuthData](interfaces/googleauthdata.md)* =  test2UserAuthData

*Defined in [tests/testUtils.ts:118](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L118)*

___
<a id="testdata.users.two-1.idtoken-1"></a>

####  idToken

**● idToken**: *`string`* =  JSON.stringify(test2UserAuthData)

*Defined in [tests/testUtils.ts:119](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L119)*

___

___

___

___

