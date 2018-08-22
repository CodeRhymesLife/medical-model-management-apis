[medical-model-manager-apis](../README.md) > [MedModeSuperTest](../interfaces/medmodesupertest.md)

# Interface: MedModeSuperTest

## Hierarchy

 `Test`

**↳ MedModeSuperTest**

## Index

### Properties

* [Promise](medmodesupertest.md#promise)
* [__@toStringTag](medmodesupertest.md#___tostringtag)
* [app](medmodesupertest.md#app)
* [cookies](medmodesupertest.md#cookies)
* [method](medmodesupertest.md#method)
* [url](medmodesupertest.md#url)

### Methods

* [abort](medmodesupertest.md#abort)
* [accept](medmodesupertest.md#accept)
* [agent](medmodesupertest.md#agent)
* [attach](medmodesupertest.md#attach)
* [attachTestMesh](medmodesupertest.md#attachtestmesh)
* [auth](medmodesupertest.md#auth)
* [buffer](medmodesupertest.md#buffer)
* [ca](medmodesupertest.md#ca)
* [catch](medmodesupertest.md#catch)
* [cert](medmodesupertest.md#cert)
* [clearTimeout](medmodesupertest.md#cleartimeout)
* [end](medmodesupertest.md#end)
* [expect](medmodesupertest.md#expect)
* [field](medmodesupertest.md#field)
* [get](medmodesupertest.md#get)
* [key](medmodesupertest.md#key)
* [ok](medmodesupertest.md#ok)
* [on](medmodesupertest.md#on)
* [parse](medmodesupertest.md#parse)
* [part](medmodesupertest.md#part)
* [pfx](medmodesupertest.md#pfx)
* [pipe](medmodesupertest.md#pipe)
* [query](medmodesupertest.md#query)
* [redirects](medmodesupertest.md#redirects)
* [responseType](medmodesupertest.md#responsetype)
* [retry](medmodesupertest.md#retry)
* [send](medmodesupertest.md#send)
* [serialize](medmodesupertest.md#serialize)
* [serverAddress](medmodesupertest.md#serveraddress)
* [set](medmodesupertest.md#set)
* [then](medmodesupertest.md#then)
* [timeout](medmodesupertest.md#timeout)
* [type](medmodesupertest.md#type)
* [unset](medmodesupertest.md#unset)
* [use](medmodesupertest.md#use)
* [withCredentials](medmodesupertest.md#withcredentials)
* [write](medmodesupertest.md#write)

---

## Properties

<a id="promise"></a>

###  Promise

**● Promise**: *`PromiseConstructor`*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es2015.promise.d.ts:216*

___
<a id="___tostringtag"></a>

###  __@toStringTag

**● __@toStringTag**: *"Promise"*

*Inherited from Promise.[Symbol.toStringTag]*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:169*

___
<a id="app"></a>

### `<Optional>` app

**● app**: *`any`*

*Inherited from Test.app*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:21*

___
<a id="cookies"></a>

###  cookies

**● cookies**: *`string`*

*Inherited from SuperAgentRequest.cookies*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:39*

___
<a id="method"></a>

###  method

**● method**: *`string`*

*Inherited from SuperAgentRequest.method*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:40*

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Inherited from Test.url*

*Overrides SuperAgentRequest.url*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:22*

___

## Methods

<a id="abort"></a>

###  abort

▸ **abort**(): `void`

*Inherited from Request.abort*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:119*

**Returns:** `void`

___
<a id="accept"></a>

###  accept

▸ **accept**(type: *`string`*): `this`

*Inherited from Request.accept*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:120*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `this`

___
<a id="agent"></a>

###  agent

▸ **agent**(agent?: *`Agent`*): `this`

*Inherited from SuperAgentRequest.agent*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:37*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` agent | `Agent` |

**Returns:** `this`

___
<a id="attach"></a>

###  attach

▸ **attach**(field: *`string`*, file: *`MultipartValueSingle`*, options?: * `string` &#124; `object`*): `this`

*Inherited from Request.attach*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:121*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |
| file | `MultipartValueSingle` |
| `Optional` options |  `string` &#124; `object`|

**Returns:** `this`

___
<a id="attachtestmesh"></a>

###  attachTestMesh

▸ **attachTestMesh**(testMesh: *[TestMesh](testmesh.md)*): [MedModeSuperTest](medmodesupertest.md)

*Defined in [tests/testUtils.ts:163](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/tests/testUtils.ts#L163)*

attaches a test mesh to the request

**Parameters:**

| Param | Type |
| ------ | ------ |
| testMesh | [TestMesh](testmesh.md) |

**Returns:** [MedModeSuperTest](medmodesupertest.md)

___
<a id="auth"></a>

###  auth

▸ **auth**(user: *`string`*, pass: *`string`*, options?: *`object`*): `this`

▸ **auth**(token: *`string`*, options: *`object`*): `this`

*Inherited from Request.auth*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:122*

**Parameters:**

| Param | Type |
| ------ | ------ |
| user | `string` |
| pass | `string` |
| `Optional` options | `object` |

**Returns:** `this`

*Inherited from Request.auth*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:123*

**Parameters:**

| Param | Type |
| ------ | ------ |
| token | `string` |
| options | `object` |

**Returns:** `this`

___
<a id="buffer"></a>

###  buffer

▸ **buffer**(val?: *`boolean`*): `this`

*Inherited from Request.buffer*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:124*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` val | `boolean` |

**Returns:** `this`

___
<a id="ca"></a>

###  ca

▸ **ca**(cert: *`Buffer`*): `this`

*Inherited from Request.ca*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:125*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cert | `Buffer` |

**Returns:** `this`

___
<a id="catch"></a>

###  catch

▸ **catch**TResult(onrejected?: * `function` &#124; `undefined` &#124; `null`*): `Promise`< `Response` &#124; `TResult`>

*Inherited from Promise.catch*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:1343*

Attaches a callback for only the rejection of the Promise.

**Type parameters:**

#### TResult 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` onrejected |  `function` &#124; `undefined` &#124; `null`|  The callback to execute when the Promise is rejected. |

**Returns:** `Promise`< `Response` &#124; `TResult`>
A Promise for the completion of the callback.

___
<a id="cert"></a>

###  cert

▸ **cert**(cert: * `Buffer` &#124; `string`*): `this`

*Inherited from Request.cert*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:126*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cert |  `Buffer` &#124; `string`|

**Returns:** `this`

___
<a id="cleartimeout"></a>

###  clearTimeout

▸ **clearTimeout**(): `this`

*Inherited from Request.clearTimeout*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:127*

**Returns:** `this`

___
<a id="end"></a>

###  end

▸ **end**(callback?: *`CallbackHandler`*): `this`

*Inherited from Test.end*

*Overrides Request.end*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:32*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

___
<a id="expect"></a>

###  expect

▸ **expect**(status: *`number`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(status: *`number`*, body: *`any`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(body: *`string`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(body: *`RegExp`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(body: *`Object`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(field: *`string`*, val: *`string`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(field: *`string`*, val: *`RegExp`*, callback?: *`CallbackHandler`*): `this`

▸ **expect**(checker: *`function`*): `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:24*

**Parameters:**

| Param | Type |
| ------ | ------ |
| status | `number` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| status | `number` |
| body | `any` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:26*

**Parameters:**

| Param | Type |
| ------ | ------ |
| body | `string` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:27*

**Parameters:**

| Param | Type |
| ------ | ------ |
| body | `RegExp` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:28*

**Parameters:**

| Param | Type |
| ------ | ------ |
| body | `Object` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:29*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |
| val | `string` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:30*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |
| val | `RegExp` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

*Inherited from Test.expect*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:31*

**Parameters:**

| Param | Type |
| ------ | ------ |
| checker | `function` |

**Returns:** `this`

___
<a id="field"></a>

###  field

▸ **field**(name: *`string`*, val: *`MultipartValue`*): `this`

▸ **field**(fields: *`object`*): `this`

*Inherited from Request.field*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:129*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| val | `MultipartValue` |

**Returns:** `this`

*Inherited from Request.field*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:130*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fields | `object` |

**Returns:** `this`

___
<a id="get"></a>

###  get

▸ **get**(field: *`string`*): `string`

*Inherited from Request.get*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:131*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `string`

___
<a id="key"></a>

###  key

▸ **key**(cert: * `Buffer` &#124; `string`*): `this`

*Inherited from Request.key*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:132*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cert |  `Buffer` &#124; `string`|

**Returns:** `this`

___
<a id="ok"></a>

###  ok

▸ **ok**(callback: *`function`*): `this`

*Inherited from Request.ok*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:133*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(name: *"error"*, handler: *`function`*): `this`

▸ **on**(name: *"progress"*, handler: *`function`*): `this`

▸ **on**(name: *`string`*, handler: *`function`*): `this`

*Inherited from Request.on*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:134*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | "error" |
| handler | `function` |

**Returns:** `this`

*Inherited from Request.on*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:135*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | "progress" |
| handler | `function` |

**Returns:** `this`

*Inherited from Request.on*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:136*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| handler | `function` |

**Returns:** `this`

___
<a id="parse"></a>

###  parse

▸ **parse**(parser: *`Parser`*): `this`

*Inherited from Request.parse*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:137*

**Parameters:**

| Param | Type |
| ------ | ------ |
| parser | `Parser` |

**Returns:** `this`

___
<a id="part"></a>

###  part

▸ **part**(): `this`

*Inherited from Request.part*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:138*

**Returns:** `this`

___
<a id="pfx"></a>

###  pfx

▸ **pfx**(cert: * `Buffer` &#124; `string` &#124; `object`*): `this`

*Inherited from Request.pfx*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:139*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cert |  `Buffer` &#124; `string` &#124; `object`|

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**(stream: *`WritableStream`*, options?: *`object`*): `stream.Writable`

*Inherited from Request.pipe*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:140*

**Parameters:**

| Param | Type |
| ------ | ------ |
| stream | `WritableStream` |
| `Optional` options | `object` |

**Returns:** `stream.Writable`

___
<a id="query"></a>

###  query

▸ **query**(val: * `any` &#124; `string`*): `this`

*Inherited from Request.query*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:141*

**Parameters:**

| Param | Type |
| ------ | ------ |
| val |  `any` &#124; `string`|

**Returns:** `this`

___
<a id="redirects"></a>

###  redirects

▸ **redirects**(n: *`number`*): `this`

*Inherited from Request.redirects*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:142*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="responsetype"></a>

###  responseType

▸ **responseType**(type: *`string`*): `this`

*Inherited from Request.responseType*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:143*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `this`

___
<a id="retry"></a>

###  retry

▸ **retry**(count?: *`number`*, callback?: *`CallbackHandler`*): `this`

*Inherited from Request.retry*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:144*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` count | `number` |
| `Optional` callback | `CallbackHandler` |

**Returns:** `this`

___
<a id="send"></a>

###  send

▸ **send**(data?: * `string` &#124; `any`*): `this`

*Inherited from Request.send*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:145*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` data |  `string` &#124; `any`|

**Returns:** `this`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(serializer: *`Serializer`*): `this`

*Inherited from Request.serialize*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:146*

**Parameters:**

| Param | Type |
| ------ | ------ |
| serializer | `Serializer` |

**Returns:** `this`

___
<a id="serveraddress"></a>

###  serverAddress

▸ **serverAddress**(app: *`any`*, path: *`string`*): `string`

*Inherited from Test.serverAddress*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/supertest/index.d.ts:23*

**Parameters:**

| Param | Type |
| ------ | ------ |
| app | `any` |
| path | `string` |

**Returns:** `string`

___
<a id="set"></a>

###  set

▸ **set**(field: *`object`*): `this`

▸ **set**(field: *`string`*, val: *`string`*): `this`

*Inherited from Request.set*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:147*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `object` |

**Returns:** `this`

*Inherited from Request.set*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:148*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |
| val | `string` |

**Returns:** `this`

___
<a id="then"></a>

###  then

▸ **then**TResult1,TResult2(onfulfilled?: * `function` &#124; `undefined` &#124; `null`*, onrejected?: * `function` &#124; `undefined` &#124; `null`*): `Promise`< `TResult1` &#124; `TResult2`>

*Inherited from Promise.then*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/typescript/lib/lib.es5.d.ts:1336*

Attaches callbacks for the resolution and/or rejection of the Promise.

**Type parameters:**

#### TResult1 
#### TResult2 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` onfulfilled |  `function` &#124; `undefined` &#124; `null`|  The callback to execute when the Promise is resolved. |
| `Optional` onrejected |  `function` &#124; `undefined` &#124; `null`|  The callback to execute when the Promise is rejected. |

**Returns:** `Promise`< `TResult1` &#124; `TResult2`>
A Promise for the completion of which ever callback is executed.

___
<a id="timeout"></a>

###  timeout

▸ **timeout**(ms: * `number` &#124; `object`*): `this`

*Inherited from Request.timeout*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:149*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ms |  `number` &#124; `object`|

**Returns:** `this`

___
<a id="type"></a>

###  type

▸ **type**(val: *`string`*): `this`

*Inherited from Request.type*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:150*

**Parameters:**

| Param | Type |
| ------ | ------ |
| val | `string` |

**Returns:** `this`

___
<a id="unset"></a>

###  unset

▸ **unset**(field: *`string`*): `this`

*Inherited from Request.unset*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:151*

**Parameters:**

| Param | Type |
| ------ | ------ |
| field | `string` |

**Returns:** `this`

___
<a id="use"></a>

###  use

▸ **use**(fn: *`Plugin`*): `this`

*Inherited from Request.use*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:152*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Plugin` |

**Returns:** `this`

___
<a id="withcredentials"></a>

###  withCredentials

▸ **withCredentials**(): `this`

*Inherited from Request.withCredentials*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:153*

**Returns:** `this`

___
<a id="write"></a>

###  write

▸ **write**(data: * `string` &#124; `Buffer`*, encoding?: *`string`*): `this`

*Inherited from Request.write*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/superagent/index.d.ts:154*

**Parameters:**

| Param | Type |
| ------ | ------ |
| data |  `string` &#124; `Buffer`|
| `Optional` encoding | `string` |

**Returns:** `this`

___

