[medical-model-manager-apis](../README.md) > ["config/config"](../modules/_config_config_.md)

# External module: "config/config"

## Index

### Variables

* [LOG_TAG](_config_config_.md#log_tag)
* [envVars](_config_config_.md#envvars)
* [envVarsSchema](_config_config_.md#envvarsschema)
* [error](_config_config_.md#error)

### Object literals

* [config](_config_config_.md#config)

---

## Variables

<a id="log_tag"></a>

### `<Const>` LOG_TAG

**● LOG_TAG**: *"[Config]"* = "[Config]"

*Defined in [config/config.ts:6](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L6)*

___
<a id="envvars"></a>

###  envVars

**● envVars**: *`ProcessEnv`*

*Defined in [config/config.ts:31](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L31)*

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

*Defined in [config/config.ts:12](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L12)*

___
<a id="error"></a>

###  error

**● error**: *`ValidationError`*

*Defined in [config/config.ts:31](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L31)*

___

## Object literals

<a id="config"></a>

### `<Const>` config

**config**: *`object`*

*Defined in [config/config.ts:36](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L36)*

<a id="config.env"></a>

####  env

**● env**: *`string`* =  envVars.NODE_ENV

*Defined in [config/config.ts:37](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L37)*

___
<a id="config.mongoosedebug"></a>

####  mongooseDebug

**● mongooseDebug**: *`string`* =  envVars.MONGOOSE_DEBUG

*Defined in [config/config.ts:39](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L39)*

___
<a id="config.port"></a>

####  port

**● port**: *`string`* =  envVars.PORT

*Defined in [config/config.ts:38](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L38)*

___
<a id="config.mongo"></a>

####  mongo

**mongo**: *`object`*

*Defined in [config/config.ts:40](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L40)*

<a id="config.mongo.host"></a>

####  host

**● host**: *`string`* =  envVars.MONGO_HOST

*Defined in [config/config.ts:41](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L41)*

___
<a id="config.mongo.port-1"></a>

####  port

**● port**: *`string`* =  envVars.MONGO_PORT

*Defined in [config/config.ts:42](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/config.ts#L42)*

___

___

___

