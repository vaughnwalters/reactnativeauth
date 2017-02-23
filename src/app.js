import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  // lifecycle method - automatically called once defined
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqllTZZbpe2HvQVqI16rnNLyzXYElk37o',
      authDomain: 'authentication-55dac.firebaseapp.com',
      databaseURL: 'https://authentication-55dac.firebaseio.com',
      storageBucket: 'authentication-55dac.appspot.com',
      messagingSenderId: '1061684497943'
    });
    
    // this event handler handles signing in or signing out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>
      case false:
        return <LoginForm />;
      default: 
        return <Spinner size="large" />
    }


    if (this.state.loggedIn) {
      return (
        <Button>
          Log out
        </Button>
      );
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
