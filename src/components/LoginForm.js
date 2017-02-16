import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    // sign my user in with email and password
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication Failed' });
        });    
      });
    }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            // this function will be called when user types
            // and when we call setState, the component immediately re-renders
            // when a user enters email into the input, it has no idea what its value is, but the value is saved as this.state and then we tell the input that the email it contains will be this.state.email
            onChangeText={email => this.setState({ email })}
          />
        </CardSection> 
        <CardSection> 
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle} >
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> 
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
