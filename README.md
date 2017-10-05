# @studyportals/node-log@v1.1.2

<a href="https://www.npmjs.com/package/@studyportals/node-log" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/v/@studyportals/node-log.svg?style=flat" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/@studyportals/node-log" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/l/@studyportals/node-log.svg?style=flat" alt="NPM license" /></a>
<a href="https://www.npmjs.com/package/@studyportals/node-log" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/dm/@studyportals/node-log.svg?style=flat" alt="NPM downloads" /></a>
<a href="https://david-dm.org/studyportals/node-log" title="View this project on David" target="_blank"><img src="https://img.shields.io/david/studyportals/node-log.svg?style=flat" alt="Dependencies" /></a>
<a href="https://david-dm.org/studyportals/node-log" title="View this project on David" target="_blank"><img src="https://img.shields.io/david/dev/studyportals/node-log.svg?style=flat" alt="Development Dependencies" /></a>

Logging support for Node

<a name="module_@studyportals/log"></a>

## @studyportals/log

* [@studyportals/log](#module_@studyportals/log)
    * [.VERBOSITY](#module_@studyportals/log.VERBOSITY) : <code>enum</code>
    * [.setVerbosity(x)](#module_@studyportals/log.setVerbosity) ⇒
    * [.debug([message])](#module_@studyportals/log.debug) ⇒
    * [.info([message])](#module_@studyportals/log.info) ⇒
    * [.warning([message])](#module_@studyportals/log.warning) ⇒
    * [.error([message])](#module_@studyportals/log.error) ⇒

<a name="module_@studyportals/log.VERBOSITY"></a>

### @studyportals/log.VERBOSITY : <code>enum</code>
Default options for verbosity

**Kind**: static enum of [<code>@studyportals/log</code>](#module_@studyportals/log)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| NONE | <code>number</code> | <code>0</code> | 
| ERROR | <code>number</code> | <code>1</code> | 
| WARNING | <code>number</code> | <code>2</code> | 
| INFO | <code>number</code> | <code>3</code> | 
| DEBUG | <code>number</code> | <code>4</code> | 
| ALL | <code>number</code> | <code>4</code> | 

<a name="module_@studyportals/log.setVerbosity"></a>

### @studyportals/log.setVerbosity(x) ⇒
Set the verbosity level.

The default verbosity level is: `process.env.PRTL_VERBOSITY || VERBOSITY.INFO;`

**Kind**: static method of [<code>@studyportals/log</code>](#module_@studyportals/log)  
**Returns**: void  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>VERBOSITY</code> \| <code>number</code> | Verbosity level |

<a name="module_@studyportals/log.debug"></a>

### @studyportals/log.debug([message]) ⇒
Debug message (gray)

**Kind**: static method of [<code>@studyportals/log</code>](#module_@studyportals/log)  
**Returns**: boolean  

| Param | Type |
| --- | --- |
| [message] | <code>string</code> | 

<a name="module_@studyportals/log.info"></a>

### @studyportals/log.info([message]) ⇒
Info message (white)

**Kind**: static method of [<code>@studyportals/log</code>](#module_@studyportals/log)  
**Returns**: boolean  

| Param | Type |
| --- | --- |
| [message] | <code>string</code> | 

<a name="module_@studyportals/log.warning"></a>

### @studyportals/log.warning([message]) ⇒
Warning message (yellow)

**Kind**: static method of [<code>@studyportals/log</code>](#module_@studyportals/log)  
**Returns**: boolean  

| Param | Type |
| --- | --- |
| [message] | <code>string</code> | 

<a name="module_@studyportals/log.error"></a>

### @studyportals/log.error([message]) ⇒
Error message (red)

**Kind**: static method of [<code>@studyportals/log</code>](#module_@studyportals/log)  
**Returns**: boolean  

| Param | Type |
| --- | --- |
| [message] | <code>string</code> | 


_README.md generated at: Thu Oct 05 2017 14:42:43 GMT+0200 (CEST)_