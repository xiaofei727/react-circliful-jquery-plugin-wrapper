# react-circliful-jquery-plugin-wrapper 

A simple [React](https://facebook.github.io/react/) component wrapper for [jquery-plugin-circliful](https://github.com/pguso/jquery-plugin-circliful)


## Install

```
npm install jquery
npm install jquery-circliful
copy the component files in src/components directory
```

## Example Usage

```jsx
import React, { Component } from 'react'
import CirclifulComponent from '../../components/CirclifulComponent'

class App extends Component {
  
  render() {
    return (
      <CirclifulComponent percent="76" ></CirclifulComponent>
    )
  }
}
export default App
```

## All Props

Please refer to the [JQuery Circliful Plugin Options](https://github.com/pguso/jquery-plugin-circliful#options)
