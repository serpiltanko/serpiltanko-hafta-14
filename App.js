import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/routes/Router'
import store from './src/screens/app/store'
import { Provider } from 'react-redux';

const App = () => {
  return (

    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})