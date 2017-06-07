---
layout: blog
title: "State management in React with Redux"
date: 2017-06-07 10:10:00 +0530
tag: ["React", "Redux", "State management"]
permalink: /blogs/state-management-react-with-redux
author: sibi
meta: rect-web-app-state-management.png
subtitle: "Manage your React web apps state using Redux."
---

Facebook released a tool to create React Apps with no need for configurations. If you're just beginning to learn React, you might want to use create-react-app and get started Immediately.

```
npm install -g create-react-app
create-react-app react-redux-example
cd react-redux-example/
npm start
```

Redux is a state management tool for react. It’s the most popular tool used to manage state.

```
npm install --save redux
```

There is a official React bindings for Redux. We can use that for easy binding.

```
npm install --save react-redux
```

So we are ready to start with React and Redux

### How to connect React to the Redux store?

##### Import `React`,  `ReactDOM`, `createStore` from redux and `Provider` from react-redux

```
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore } from 'redux'
import { Provider } from 'react-redux'
```
Create your store with `reducer`. We can use a simple basic reducer here...

```
function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ACTION':
      return [
    ...state,
    action
  ]
    default:
      return state
  }
}
let store = createStore(reducer)
```

Use the `provider` to bind the store in all component

```
 ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
)
```

Now the store is available in all component. We can import `connect` from `react-redux` to get the state in components.

Import `connect` in your component first

```
import { connect } from 'react-redux'
```

Use `connect` to connect the component with the store

```
export default connect()(YourComponentName)
```

Use `mapStateToProps` and  `mapDispatchToProps`  to map the State and Dispatch to the `props`
