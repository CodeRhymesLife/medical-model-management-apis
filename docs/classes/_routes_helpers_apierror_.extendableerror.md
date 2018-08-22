[medical-model-manager-apis](../README.md) > ["routes/helpers/APIError"](../modules/_routes_helpers_apierror_.md) > [ExtendableError](../classes/_routes_helpers_apierror_.extendableerror.md)

# Class: ExtendableError

*__extends__*: Error

## Hierarchy

 `Error`

**↳ ExtendableError**

↳  [APIError](_routes_helpers_apierror_.apierror.md)

## Index

### Constructors

* [constructor](_routes_helpers_apierror_.extendableerror.md#constructor)

### Properties

* [isOperational](_routes_helpers_apierror_.extendableerror.md#isoperational)
* [isPublic](_routes_helpers_apierror_.extendableerror.md#ispublic)
* [message](_routes_helpers_apierror_.extendableerror.md#message)
* [name](_routes_helpers_apierror_.extendableerror.md#name)
* [stack](_routes_helpers_apierror_.extendableerror.md#stack)
* [status](_routes_helpers_apierror_.extendableerror.md#status)
* [Error](_routes_helpers_apierror_.extendableerror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtendableError**(message: *`string`*, status: *`Number`*, isPublic: *`boolean`*): [ExtendableError](_routes_helpers_apierror_.extendableerror.md)

*Defined in [routes/helpers/APIError.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/helpers/APIError.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `string` |
| status | `Number` |
| isPublic | `boolean` |

**Returns:** [ExtendableError](_routes_helpers_apierror_.extendableerror.md)

___

## Properties

<a id="isoperational"></a>

###  isOperational

**● isOperational**: *`boolean`*

*Defined in [routes/helpers/APIError.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/helpers/APIError.ts#L14)*

Is this error operational

___
<a id="ispublic"></a>

###  isPublic

**● isPublic**: *`boolean`*

*Defined in [routes/helpers/APIError.ts:11](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/helpers/APIError.ts#L11)*

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

*Defined in [routes/helpers/APIError.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/f5b2e31/src/routes/helpers/APIError.ts#L8)*

Http status code

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:914*

___

