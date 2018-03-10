import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppNavigator from './app_navigator';
import LoginForm from './components/LoginForm';
import { View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View>
          <Header headerText='Login' />
          <LoginForm />
        </View>
      </Provider>
      
    );
  }
}

export default App;
