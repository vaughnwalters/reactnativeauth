import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }

  render() {
    return (
      <Card>
        <CardSection />
          <Input 
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            // this function will be called when user types
            // and when we call setState, the component immediately re-renders
            // when a user enters email into the input, it has no idea what its value is, but the value is saved as this.state and then we tell the input that the email it contains will be this.state.email
            onChangeText={email => this.setState({ email })}
          />
        <CardSection> 
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button> 
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
