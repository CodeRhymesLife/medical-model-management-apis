[medical-model-manager-apis](../README.md) > [MeshJob](../interfaces/meshjob.md)

# Interface: MeshJob

Extends the underlying kue job with extra properties important for processing meshes

## Hierarchy

 `Job`

**↳ MeshJob**

## Index

### Constructors

* [constructor](meshjob.md#constructor)

### Properties

* [client](meshjob.md#client)
* [created_at](meshjob.md#created_at)
* [data](meshjob.md#data)
* [failed_at](meshjob.md#failed_at)
* [id](meshjob.md#id)
* [meshData](meshjob.md#meshdata)
* [promote_at](meshjob.md#promote_at)
* [reqLogger](meshjob.md#reqlogger)
* [result](meshjob.md#result)
* [started_at](meshjob.md#started_at)
* [type](meshjob.md#type)
* [updated_at](meshjob.md#updated_at)
* [defaultMaxListeners](meshjob.md#defaultmaxlisteners)
* [disableSearch](meshjob.md#disablesearch)
* [jobEvents](meshjob.md#jobevents)
* [priorities](meshjob.md#priorities)

### Methods

* [active](meshjob.md#active)
* [addListener](meshjob.md#addlistener)
* [attempt](meshjob.md#attempt)
* [attempts](meshjob.md#attempts)
* [backoff](meshjob.md#backoff)
* [complete](meshjob.md#complete)
* [delay](meshjob.md#delay)
* [delayed](meshjob.md#delayed)
* [emit](meshjob.md#emit)
* [error](meshjob.md#error)
* [eventNames](meshjob.md#eventnames)
* [events](meshjob.md#events)
* [failed](meshjob.md#failed)
* [get](meshjob.md#get)
* [getMaxListeners](meshjob.md#getmaxlisteners)
* [inactive](meshjob.md#inactive)
* [listenerCount](meshjob.md#listenercount)
* [listeners](meshjob.md#listeners)
* [log](meshjob.md#log)
* [off](meshjob.md#off)
* [on](meshjob.md#on)
* [once](meshjob.md#once)
* [prependListener](meshjob.md#prependlistener)
* [prependOnceListener](meshjob.md#prependoncelistener)
* [priority](meshjob.md#priority)
* [progress](meshjob.md#progress)
* [rawListeners](meshjob.md#rawlisteners)
* [reattempt](meshjob.md#reattempt)
* [remove](meshjob.md#remove)
* [removeAllListeners](meshjob.md#removealllisteners)
* [removeListener](meshjob.md#removelistener)
* [removeOnComplete](meshjob.md#removeoncomplete)
* [save](meshjob.md#save)
* [searchKeys](meshjob.md#searchkeys)
* [set](meshjob.md#set)
* [setMaxListeners](meshjob.md#setmaxlisteners)
* [state](meshjob.md#state)
* [subscribe](meshjob.md#subscribe)
* [toJSON](meshjob.md#tojson)
* [ttl](meshjob.md#ttl)
* [update](meshjob.md#update)
* [get](meshjob.md#get-1)
* [listenerCount](meshjob.md#listenercount-1)
* [log](meshjob.md#log-1)
* [range](meshjob.md#range)
* [rangeByState](meshjob.md#rangebystate)
* [rangeByType](meshjob.md#rangebytype)
* [remove](meshjob.md#remove-1)
* [removeBadJob](meshjob.md#removebadjob)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MeshJob**(type: *`string`*, data?: *`any`*): [MeshJob](meshjob.md)

*Inherited from Job.__constructor*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:92*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| `Optional` data | `any` |

**Returns:** [MeshJob](meshjob.md)

___

## Properties

<a id="client"></a>

###  client

**● client**: *`RedisClient`*

*Inherited from Job.client*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:80*

___
<a id="created_at"></a>

###  created_at

**● created_at**: * `string` &#124; `number`
*

*Inherited from Job.created_at*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:75*

___
<a id="data"></a>

###  data

**● data**: *`any`*

*Inherited from Job.data*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:71*

___
<a id="failed_at"></a>

###  failed_at

**● failed_at**: * `string` &#124; `number`
*

*Inherited from Job.failed_at*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:78*

___
<a id="id"></a>

###  id

**● id**: *`number`*

*Inherited from Job.id*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:69*

___
<a id="meshdata"></a>

###  meshData

**● meshData**: *[MeshJobData](meshjobdata.md)*

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:147](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L147)*

Data for this job

___
<a id="promote_at"></a>

###  promote_at

**● promote_at**: * `string` &#124; `number`
*

*Inherited from Job.promote_at*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:77*

___
<a id="reqlogger"></a>

###  reqLogger

**● reqLogger**: *`any`*

*Defined in [routes/meshes/meshProcessing/meshProcessor.ts:150](https://github.com/drryanjames/medical-model-management-apis/blob/8ee5c63/src/routes/meshes/meshProcessing/meshProcessor.ts#L150)*

Logger associated with the request

___
<a id="result"></a>

###  result

**● result**: *`any`*

*Inherited from Job.result*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:72*

___
<a id="started_at"></a>

###  started_at

**● started_at**: * `string` &#124; `number`
*

*Inherited from Job.started_at*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:79*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Inherited from Job.type*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:70*

___
<a id="updated_at"></a>

###  updated_at

**● updated_at**: * `string` &#124; `number`
*

*Inherited from Job.updated_at*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:76*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1024*

___
<a id="disablesearch"></a>

### `<Static>` disableSearch

**● disableSearch**: *`boolean`*

*Inherited from Job.disableSearch*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:84*

___
<a id="jobevents"></a>

### `<Static>` jobEvents

**● jobEvents**: *`boolean`*

*Inherited from Job.jobEvents*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:85*

___
<a id="priorities"></a>

### `<Static>` priorities

**● priorities**: *`Priorities`*

*Inherited from Job.priorities*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:83*

___

## Methods

<a id="active"></a>

###  active

▸ **active**(fn?: *`Function`*): `Job`

*Inherited from Job.active*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:118*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1026*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="attempt"></a>

###  attempt

▸ **attempt**(fn: *`Function`*): `Job`

*Inherited from Job.attempt*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:108*

**Parameters:**

| Param | Type |
| ------ | ------ |
| fn | `Function` |

**Returns:** `Job`

___
<a id="attempts"></a>

###  attempts

▸ **attempts**(n: *`number`*): `Job`

*Inherited from Job.attempts*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:110*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `Job`

___
<a id="backoff"></a>

###  backoff

▸ **backoff**(param: *`any`*): `Job`

*Inherited from Job.backoff*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:103*

**Parameters:**

| Param | Type |
| ------ | ------ |
| param | `any` |

**Returns:** `Job`

___
<a id="complete"></a>

###  complete

▸ **complete**(fn?: *`Function`*): `Job`

*Inherited from Job.complete*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:115*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="delay"></a>

###  delay

▸ **delay**(ms: * `number` &#124; `Date`*): `Job`

*Inherited from Job.delay*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:101*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ms |  `number` &#124; `Date`|

**Returns:** `Job`

___
<a id="delayed"></a>

###  delayed

▸ **delayed**(fn?: *`Function`*): `Job`

*Inherited from Job.delayed*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:119*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1038*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="error"></a>

###  error

▸ **error**(err: *`Error`*): `Job`

*Inherited from Job.error*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:114*

**Parameters:**

| Param | Type |
| ------ | ------ |
| err | `Error` |

**Returns:** `Job`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`< `string` &#124; `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1039*

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="events"></a>

###  events

▸ **events**(events: *`boolean`*): `Job`

*Inherited from Job.events*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:123*

**Parameters:**

| Param | Type |
| ------ | ------ |
| events | `boolean` |

**Returns:** `Job`

___
<a id="failed"></a>

###  failed

▸ **failed**(fn?: *`Function`*): `Job`

*Inherited from Job.failed*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:116*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="get"></a>

###  get

▸ **get**(key: *`string`*, fn?: *`Function`*): `Job`

▸ **get**(key: *`string`*, jobType: *`string`*, fn?: *`Function`*): `Job`

*Inherited from Job.get*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:98*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |
| `Optional` fn | `Function` |

**Returns:** `Job`

*Inherited from Job.get*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:99*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |
| jobType | `string` |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1035*

**Returns:** `number`

___
<a id="inactive"></a>

###  inactive

▸ **inactive**(fn?: *`Function`*): `Job`

*Inherited from Job.inactive*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:117*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1040*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1036*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="log"></a>

###  log

▸ **log**(str: *`string`*): `Job`

*Inherited from Job.log*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:96*

**Parameters:**

| Param | Type |
| ------ | ------ |
| str | `string` |

**Returns:** `Job`

___
<a id="off"></a>

###  off

▸ **off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1032*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1027*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1028*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1029*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1030*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="priority"></a>

###  priority

▸ **priority**(level: * `string` &#124; `number`*): `Job`

▸ **priority**():  `number` &#124; `string`

*Inherited from Job.priority*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:106*

**Parameters:**

| Param | Type |
| ------ | ------ |
| level |  `string` &#124; `number`|

**Returns:** `Job`

*Inherited from Job.priority*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:107*

**Returns:**  `number` &#124; `string`

___
<a id="progress"></a>

###  progress

▸ **progress**(complete: *`number`*, total: *`number`*, data?: *`any`*): `Job`

*Inherited from Job.progress*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:100*

**Parameters:**

| Param | Type |
| ------ | ------ |
| complete | `number` |
| total | `number` |
| `Optional` data | `any` |

**Returns:** `Job`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1037*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="reattempt"></a>

###  reattempt

▸ **reattempt**(attempt: *`number`*, fn?: *`Function`*): `void`

*Inherited from Job.reattempt*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:109*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attempt | `number` |
| `Optional` fn | `Function` |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(fn?: *`Function`*): `Job`

*Inherited from Job.remove*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:112*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1033*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1031*

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="removeoncomplete"></a>

###  removeOnComplete

▸ **removeOnComplete**(param: *`any`*): `Job`

*Inherited from Job.removeOnComplete*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:102*

**Parameters:**

| Param | Type |
| ------ | ------ |
| param | `any` |

**Returns:** `Job`

___
<a id="save"></a>

###  save

▸ **save**(fn?: *`Function`*): `Job`

*Inherited from Job.save*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:120*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="searchkeys"></a>

###  searchKeys

▸ **searchKeys**(keys: * `string`[] &#124; `string`*): `Job`

*Inherited from Job.searchKeys*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:111*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys |  `string`[] &#124; `string`|

**Returns:** `Job`

___
<a id="set"></a>

###  set

▸ **set**(key: *`string`*, val: *`string`*, fn?: *`Function`*): `Job`

*Inherited from Job.set*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:97*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |
| val | `string` |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1034*

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="state"></a>

###  state

▸ **state**(state: *`string`*, fn?: *`Function`*): `Job`

*Inherited from Job.state*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:113*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `string` |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="subscribe"></a>

###  subscribe

▸ **subscribe**(fn?: *`Function`*): `Job`

*Inherited from Job.subscribe*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:122*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="tojson"></a>

###  toJSON

▸ **toJSON**(): `Object`

*Inherited from Job.toJSON*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:95*

**Returns:** `Object`

___
<a id="ttl"></a>

###  ttl

▸ **ttl**(param: *`any`*): `Job`

*Inherited from Job.ttl*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:104*

**Parameters:**

| Param | Type |
| ------ | ------ |
| param | `any` |

**Returns:** `Job`

___
<a id="update"></a>

###  update

▸ **update**(fn?: *`Function`*): `Job`

*Inherited from Job.update*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:121*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` fn | `Function` |

**Returns:** `Job`

___
<a id="get-1"></a>

### `<Static>` get

▸ **get**(id: *`number`*, type: * `string` &#124; `JobCallback`*, fn?: *`JobCallback`*): `void`

*Inherited from Job.get*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:86*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `number` |
| type |  `string` &#124; `JobCallback`|
| `Optional` fn | `JobCallback` |

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/node/index.d.ts:1023*

*__deprecated__*: since v4.0.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="log-1"></a>

### `<Static>` log

▸ **log**(id: *`number`*, fn: *`Function`*): `void`

*Inherited from Job.log*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:89*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `number` |
| fn | `Function` |

**Returns:** `void`

___
<a id="range"></a>

### `<Static>` range

▸ **range**(from: *`number`*, to: *`number`*, order: *`string`*, fn: *`Function`*): `void`

*Inherited from Job.range*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:90*

**Parameters:**

| Param | Type |
| ------ | ------ |
| from | `number` |
| to | `number` |
| order | `string` |
| fn | `Function` |

**Returns:** `void`

___
<a id="rangebystate"></a>

### `<Static>` rangeByState

▸ **rangeByState**(state: *`string`*, from: *`number`*, to: *`number`*, order: *`string`*, fn: *`Function`*): `void`

*Inherited from Job.rangeByState*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:91*

**Parameters:**

| Param | Type |
| ------ | ------ |
| state | `string` |
| from | `number` |
| to | `number` |
| order | `string` |
| fn | `Function` |

**Returns:** `void`

___
<a id="rangebytype"></a>

### `<Static>` rangeByType

▸ **rangeByType**(type: *`string`*, state: *`string`*, from: *`number`*, to: *`number`*, order: *`string`*, fn: *`Function`*): `void`

*Inherited from Job.rangeByType*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:92*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| state | `string` |
| from | `number` |
| to | `number` |
| order | `string` |
| fn | `Function` |

**Returns:** `void`

___
<a id="remove-1"></a>

### `<Static>` remove

▸ **remove**(id: *`number`*, fn?: *`Function`*): `void`

*Inherited from Job.remove*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:87*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `number` |
| `Optional` fn | `Function` |

**Returns:** `void`

___
<a id="removebadjob"></a>

### `<Static>` removeBadJob

▸ **removeBadJob**(id: *`number`*): `void`

*Inherited from Job.removeBadJob*

*Defined in /home/rcjames1004/Apps/medmod/medical-model-manager-apis/node_modules/@types/kue/index.d.ts:88*

**Parameters:**

| Param | Type |
| ------ | ------ |
| id | `number` |

**Returns:** `void`

___

