import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: '' }

  render() {
    return (
      <Card>
        <CardSection />
          <Input 
            label="Email"
            value={this.state.text}
            // this function will be called when user types
            // and when we call setState, the component immediately re-renders
            // when a user enters text into the input, it has no idea what its value is, but the value is saved as this.state and then we tell the input that the text it contains will be this.state.text
            onChangeText={text => this.setState({ text })}
          />
        <CardSection />

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
