[medical-model-manager-apis](../README.md) > [APIError](../classes/apierror.md)

# Class: APIError

Class representing an API error.
*__extends__*: ExtendableError

## Hierarchy

↳  [ExtendableError](extendableerror.md)

**↳ APIError**

## Index

### Constructors

* [constructor](apierror.md#constructor)

### Properties

* [isOperational](apierror.md#isoperational)
* [isPublic](apierror.md#ispublic)
* [message](apierror.md#message)
* [name](apierror.md#name)
* [stack](apierror.md#stack)
* [status](apierror.md#status)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new APIError**(message: *`string`*, status?: *`Number`*, isPublic?: *`boolean`*): [APIError](apierror.md)

*Overrides [ExtendableError](extendableerror.md).[constructor](extendableerror.md#constructor)*

*Defined in [routes/helpers/APIError.ts:31](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/helpers/APIError.ts#L31)*

Creates an API error.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| message | `string` | - |  Error message. |
| `Default value` status | `Number` |  httpStatus.INTERNAL_SERVER_ERROR |  HTTP status code of error. |
| `Default value` isPublic | `boolean` | false |  Whether the message should be visible to user or not. |

**Returns:** [APIError](apierror.md)

___

## Properties

<a id="isoperational"></a>

###  isOperational

**● isOperational**: *`boolean`*

*Inherited from [ExtendableError](extendableerror.md).[isOperational](extendableerror.md#isoperational)*

*Defined in [routes/helpers/APIError.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/helpers/APIError.ts#L14)*

Is this error operational

___
<a id="ispublic"></a>

###  isPublic

**● isPublic**: *`boolean`*

*Inherited from [ExtendableError](extendableerror.md).[isPublic](extendableerror.md#ispublic)*

*Defined in [routes/helpers/APIError.ts:11](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/helpers/APIError.ts#L11)*

Is this error public

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from Error.message*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:904*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:903*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:905*

___
<a id="status"></a>

###  status

**● status**: *`Number`*

*Inherited from [ExtendableError](extendableerror.md).[status](extendableerror.md#status)*

*Defined in [routes/helpers/APIError.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/helpers/APIError.ts#L8)*

Http status code

___

