---
layout: blog
title: ES6 Transpilers
date: 2016-08-07 05:10:00 +0530
tag: ["ES6", "Transpiler", "Ecmascipt 6"]
permalink: /blogs/es6-transpilers
meta: es6-transpilers.png
author: niksmac
subtitle: "Start writing Tomorrows JavaScript Today"
---

## What is a Transpiler
A source-to-source compiler, transcompiler or transpiler is a type of compiler that takes the
source code of a program written in one programming language as its input and produces the
equivalent source code in another programming language. A source-to-source compiler translates
between programming languages that operate at approximately the same level of abstraction, while
a traditional compiler translates from a higher level programming language to a lower level
programming language. [wiki](https://en.wikipedia.org/wiki/Source-to-source_compiler)

## List of ES6 Transpilers
 1. [Babel](http://babeljs.io/): To transpile ES6 into ES5 for static builds
 2. [Babelify](https://github.com/babel/babelify): To incorporate babel into your Gulp, Grunt, or npm run build process
 3. [Traceur compiler](https://github.com/google/traceur-compiler): ES6 features > ES5. Includes
    classes, generators, promises, destructuring patterns, default parameters & more.
 4. [es6ify](https://github.com/thlorenz/es6ify): Traceur compiler wrapped as a Browserify v2 transform



### ES6 to ES5 Transpilation Example   
For this example we are using [Babel's live transpiler](http://babeljs.io/repl/) to see the code
in action.

**ES6 Code**

```
import config from './config/env';
import app from './config/express';

// listen on port config.port
app.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`);
});

export default app;
```

**ES5 Converted**

```
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// listen on port config.port
_express2.default.listen(_env2.default.port, function () {
  debug('server started on port ' + _env2.default.port + ' (' + _env2.default.env + ')');
});

exports.default = _express2.default;
```


**Sources**

 1. [https://scotch.io](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them)
 2. https://github.com/bevacqua/es6#introduction
 3. https://github.com/addyosmani/es6-tools
