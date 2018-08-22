[medical-model-manager-apis](../README.md) > ["config/winston"](../modules/_config_winston_.md)

# External module: "config/winston"

## Index

### Variables

* [LOG_TAG](_config_winston_.md#log_tag)
* [logger](_config_winston_.md#logger)

### Functions

* [createReqLogger](_config_winston_.md#createreqlogger)
* [setupReqLogger](_config_winston_.md#setupreqlogger)

### Object literals

* [WINSTON_LOGGING_CONFIG](_config_winston_.md#winston_logging_config)

---

## Variables

<a id="log_tag"></a>

### `<Const>` LOG_TAG

**● LOG_TAG**: *"[medmod-apis-winston]"* = "[medmod-apis-winston]"

*Defined in [config/winston.ts:6](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L6)*

___
<a id="logger"></a>

### `<Const>` logger

**● logger**: *`any`* =  winston

*Defined in [config/winston.ts:72](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L72)*

___

## Functions

<a id="createreqlogger"></a>

### `<Const>` createReqLogger

▸ **createReqLogger**(reqId: *`string`*, sessionId: *`string`*): `any`

*Defined in [config/winston.ts:57](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| reqId | `string` |
| sessionId | `string` |

**Returns:** `any`

___
<a id="setupreqlogger"></a>

### `<Const>` setupReqLogger

▸ **setupReqLogger**(req: *`Request`*, res: *`Response`*, next: *`NextFunction`*): `void`

*Defined in [config/winston.ts:74](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L74)*

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

*Defined in [config/winston.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L8)*

<a id="winston_logging_config.transports"></a>

####  transports

**transports**: *`object`*

*Defined in [config/winston.ts:9](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L9)*

<a id="winston_logging_config.transports.console"></a>

####  console

**console**: *`object`*

*Defined in [config/winston.ts:10](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L10)*

<a id="winston_logging_config.transports.console.colorize"></a>

####  colorize

**● colorize**: *`boolean`* = true

*Defined in [config/winston.ts:13](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L13)*

___
<a id="winston_logging_config.transports.console.enabled"></a>

####  enabled

**● enabled**: *`boolean`* = true

*Defined in [config/winston.ts:11](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L11)*

___
<a id="winston_logging_config.transports.console.handleexceptions"></a>

####  handleExceptions

**● handleExceptions**: *`boolean`* = true

*Defined in [config/winston.ts:16](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L16)*

___
<a id="winston_logging_config.transports.console.json"></a>

####  json

**● json**: *`boolean`* = false

*Defined in [config/winston.ts:15](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L15)*

___
<a id="winston_logging_config.transports.console.timestamp"></a>

####  timestamp

**● timestamp**: *`boolean`* = false

*Defined in [config/winston.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L14)*

___

___
<a id="winston_logging_config.transports.file"></a>

####  file

**file**: *`object`*

*Defined in [config/winston.ts:19](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L19)*

<a id="winston_logging_config.transports.file.colorize-1"></a>

####  colorize

**● colorize**: *`boolean`* = true

*Defined in [config/winston.ts:22](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L22)*

___
<a id="winston_logging_config.transports.file.enabled-1"></a>

####  enabled

**● enabled**: *`boolean`* = true

*Defined in [config/winston.ts:20](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L20)*

___
<a id="winston_logging_config.transports.file.filename"></a>

####  filename

**● filename**: *`string`* = "logs/apis.log"

*Defined in [config/winston.ts:23](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L23)*

___
<a id="winston_logging_config.transports.file.handleexceptions-1"></a>

####  handleExceptions

**● handleExceptions**: *`boolean`* = true

*Defined in [config/winston.ts:25](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L25)*

___
<a id="winston_logging_config.transports.file.json-1"></a>

####  json

**● json**: *`boolean`* = true

*Defined in [config/winston.ts:26](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L26)*

___
<a id="winston_logging_config.transports.file.maxsize"></a>

####  maxsize

**● maxsize**: *`number`* = 5242880

*Defined in [config/winston.ts:27](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L27)*

___
<a id="winston_logging_config.transports.file.timestamp-1"></a>

####  timestamp

**● timestamp**: *`boolean`* = true

*Defined in [config/winston.ts:24](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/config/winston.ts#L24)*

___

___

___

___

