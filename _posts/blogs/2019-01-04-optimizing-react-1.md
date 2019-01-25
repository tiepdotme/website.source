---
title: 'React performance Optimization - Part 1/2'
layout: blog
date: '2019-01-04 05:30:00'
tag: ['React', 'ReactJS', 'Javascript', 'Performance']
permalink: '/blogs/optimizing-performace-react-part1'
author: niksmac
meta: reactjs.jpg
subtitle: 'React is usually quite fast out of the box. How can we make it even faster?'
excerpt: 'React is usually quite fast out of the box. How can we make it even faster?'
---

## Overview

React is usually quite fast out of the box. We can make it even faster using simple steps and even faster if we dig further and find the bottleneck.

We are dividing this series into 2 based on the difficulty of the solution. Part 1 we will be discussing the very easy optimization steps. Part 2 will be little more advanced.

Great, lets start with the obvious ones;

### 1. Use the Production Build

Use production build when you are done with development and shipping your app to your client. `NODE_ENV` is the variable used to identify the environment where the app is getting build. You can set it using `NODE_ENV=production node YOUR-SCRIPT.js`. If you are using [Create React App](https://github.com/facebook/create-react-app) you can use the predefined `npm run build` to build the app in production environment.

### 2. Avoid unwanted renders

React re-renders components on every state change. Even though the react virtual dom is much faster than native dom, it will slow down if we make it do additional work than what is necessary to make the change. When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM.

How to avoid unwanted renders

-   Use [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)
-   Use [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

Checkout [React.memo](https://reactjs.org/docs/react-api.html#reactmemo). React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.

These are some very basic but vey effective steps to increase the performance of your react app.

**Part 2: React performance Optimization the Hard way**
