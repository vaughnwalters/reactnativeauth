import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // lifecycle method - automatically called once defined
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqllTZZbpe2HvQVqI16rnNLyzXYElk37o',
      authDomain: 'authentication-55dac.firebaseapp.com',
      databaseURL: 'https://authentication-55dac.firebaseio.com',
      storageBucket: 'authentication-55dac.appspot.com',
      messagingSenderId: '1061684497943'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
