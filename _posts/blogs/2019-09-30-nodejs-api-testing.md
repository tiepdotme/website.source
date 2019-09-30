---
layout: blog
title: 'Automated API testing with nodejs'
date: 2019-09-30 05:10:00 +0530
tag: ['tdd', 'api', 'test']
permalink: /blogs/automated-api-testing-nodejs
meta: automated-api-testing-nodejs.png
author: niksmac
excerpt: 'How to Automate your API Testing'
subtitle: 'How to Automate your API Testing nodejs app'
---

We are going automate the api testing as much as possible, and potentially make it separate from the app in development.

**Tools**

-   _Mocha_: Mocha is a javascript testing framework that makes asynchronous testing easy.
-   _Chai_: Unlike Jasmine, an additional assertion library must be used to supplement Mocha
-   _SuperTest_: SuperTest is an extension of SuperAgent, a lightweight HTTP AJAX request library

### App starter

Following is the basic packages needed for run this project, you can add individual modules too

```
{
    "name": "node-api-testing",
    "version": "1.0.0",
    "description": "API Testing",
    "devDependencies": {
        "chai": "^4.2.0",
        "faker": "^4.1.0",
        "mocha": "^6.2.1",
        "supertest": "^4.0.2"
    },
    "scripts": {
        "prestart": "npm install;",
        "start": "mocha --timeout 25000 --colors"
    }
}
```

To install modules individually use `yarn add chai mocha supertest --dev`. Make sure that you have `mocha` installed globally. Run `yarn global add mocha`

Install all the dependencies using `yarn` or `yarn install`

## Create tests

Create your `test` folder in the project root run `mkdir test`

**The directory must be called `test` for Mocha to find test files to run.**

for the test we are following a naming pattern like `[controller]_test.js` you can create your own.

```
let should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://127.0.0.0:3000'),
    faker = require('faker')

let tokenSymbol = faker.lorem.word()
let result

describe('Token', function() {
    before(function(done) {
        api.post('/api/tokens')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                name: faker.name.findName(),
                symbol: tokenSymbol,
                owner: faker.lorem.word(),
                userId: faker.random.uuid(),
                txHash: faker.lorem.word()
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                done()
            })
    })

    it('should return a 200 response', function(done) {
        api.get(`/api/tokens/${tokenSymbol}`)
            .set('Accept', 'application/json')
            .expect(200, done)
    })

    it('should return a 400 response', function(done) {
        api.get('/api/tokens/hello')
            .set('Accept', 'application/json')
            .expect(400, done)
    })
})
```

The above code is pretty self explanatory, however we will go through it line by line;

## Running tests

Running test is easy as running `yarn run test` or `yarn test`. Make sure the api project is running and you have given correct path in the test file.

## Code breakdown

#### 1. Require and initiate modules

```
let should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://127.0.0.0:3000'),
    faker = require('faker')
```

#### 2. Initialise any variable that we may want to reuse

```
let tokenSymbol = faker.lorem.word()
let result
```

#### 3. Require and initiate modules

```
describe('Token', function() {
  ...
```

This will appear as a heading for the tests, we named it as Token.

#### 3. Preparing the test cases

```
before(function(done) {
    api.post('/api/tokens')
        .set('Accept', 'application/x-www-form-urlencoded')
        .send({
            name: faker.name.findName(),
            symbol: tokenSymbol,
            owner: faker.lorem.word(),
            userId: faker.random.uuid(),
            txHash: faker.lorem.word()
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            result = res
            done()
        })
})
```

Here we are telling mocha to create a post request to an endpoint named `/api/tokens` and creating some data using it. And we are saving the response in a variable called `result`. This variable can be used to test against possible errors and structure validation using [hapijs/joi](https://github.com/hapijs/joi) or similar.

#### 4. Testing http codes

```
it('should return a 200 response', function(done) {
    api.get(`/api/tokens/${tokenSymbol}`)
        .set('Accept', 'application/json')
        .expect(200, done)
})
```

and

```
it('should return a 400 response', function(done) {
    api.get('/api/tokens/hello')
        .set('Accept', 'application/json')
        .expect(400, done)
})

```
