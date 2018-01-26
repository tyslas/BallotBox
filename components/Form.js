import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.4;

export default class Form extends Component {
  state = {
    key: '',
    firstName: '',
    lastName: ''
  }

  addVoter = () => {
    this.setState({
      key: key,
      
    })
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder='personal key'
          value = {this.state.key} />
        <TextInput
          placeholder='first name'
          onChangeText={first => this.setState( {first} )}
          value = {this.state.firstName} />
        <TextInput
          placeholder='last name'
          onChangeText={last => this.setState( {last} )}
          value = {this.state.lastName} />
        <Button
          style={styles.button}
          title='Login'
          color='gray'
          onPress={this.addVoter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: '#3A4357',
    borderRadius: 10,
    width: formWidth,
  },
  input: {
    height: 30,
  },
})
