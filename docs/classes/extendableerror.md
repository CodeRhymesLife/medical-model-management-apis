[Medical Model Management APIs](../README.md) > [ExtendableError](../classes/extendableerror.md)

# Class: ExtendableError

*__extends__*: Error

## Hierarchy

 `Error`

**↳ ExtendableError**

↳  [APIError](apierror.md)

## Index

### Constructors

* [constructor](extendableerror.md#constructor)

### Properties

* [isOperational](extendableerror.md#isoperational)
* [isPublic](extendableerror.md#ispublic)
* [message](extendableerror.md#message)
* [name](extendableerror.md#name)
* [stack](extendableerror.md#stack)
* [status](extendableerror.md#status)
* [Error](extendableerror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ExtendableError**(message: *`string`*, status: *`Number`*, isPublic: *`boolean`*): [ExtendableError](extendableerror.md)

*Defined in [routes/helpers/APIError.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/helpers/APIError.ts#L14)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| message | `string` |
| status | `Number` |
| isPublic | `boolean` |

**Returns:** [ExtendableError](extendableerror.md)

___

## Properties

<a id="isoperational"></a>

###  isOperational

**● isOperational**: *`boolean`*

*Defined in [routes/helpers/APIError.ts:14](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/helpers/APIError.ts#L14)*

Is this error operational

___
<a id="ispublic"></a>

###  isPublic

**● isPublic**: *`boolean`*

*Defined in [routes/helpers/APIError.ts:11](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/helpers/APIError.ts#L11)*

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

*Defined in [routes/helpers/APIError.ts:8](https://github.com/drryanjames/medical-model-management-apis/blob/53e4d53/src/routes/helpers/APIError.ts#L8)*

Http status code

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:914*

___

