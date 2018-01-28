import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, TextInput, Button, Dimensions, FlatList } from 'react-native';
import firebase from 'firebase';
import Firebase from '../firebase';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.4;

export default class Form extends Component {
constructor() {
  super();

  Firebase.initialize();

  this.state = {
    voterKey: '',
    email: '',
    firstName: '',
    lastName: '',
    loggedIn: false
  };
}

  handleAddVoter = () => {
    // console.log(this.state);
    let key = this.state.voterKey;
    let email = this.state.email;
    let first = this.state.firstName;
    let last = this.state.lastName;
    if (key === '' || email === '' || first === '' || last === '' ) {
      console.log('please submit all fields');
      Alert.alert(
        'Submit all fields',
        'Please try again',
        [
          {text: 'OK', onPress:() => console.log('ok'), style:'cancel'}
        ]
      );
    }
    // console.log('successfully logged in!');
    firebase
      .database()
      .ref('voters/' + key)
      .set({
        voterKey: key,
        email: email,
        first: first,
        last: last,
      });
  }

  setupLoginListener = () => {
    firebase
      .database()
      .ref('voters/' + voterKey)
      .on('value', (snapshot) => {
        const voterKey = snapshot.val().voterKey;
      if (voterKey !== null) {
        console.log(voterKey);
      }
      Alert.alert(
        'Incorrect login',
        'Please try again',
        [
          {text: 'OK', onPress:() => console.log('ok'), style:'cancel'}
        ]
      );
    console.log("voterKey: " + voterKey);
  });
  }

  changeKeyHandler(key) {
    //change state to new key
    console.log(key);
    this.setState({voterKey: key});
    console.log('[state] first name: ', this.state.voterKey);
  }

  changeEmailHandler(email) {
    //change state to new email
    this.setState({email: email});
    console.log('[state] first name: ', this.state.email);
  }

  changeFirstHandler(fName) {
    //change state to new first
    this.setState({firstName: fName});
    console.log('[state] first name: ', this.state.firstName);
  }

  changeLastHandler(lName) {
    //change state to new last
    this.setState({lastName: lName});
    console.log('[state] last name: ', this.state.lastName);
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder='personal key'
          onChangeText={(e) => this.changeKeyHandler(e)}
          value = {this.state.voterKey}
        />
        <TextInput
          style={styles.input}
          placeholder='email'
          onChangeText={(e) => this.changeEmailHandler(e)}
          value = {this.state.email} />
        <TextInput
          style={styles.input}
          placeholder='first name'
          onChangeText={(e) => this.changeFirstHandler(e)}
          value = {this.state.firstName} />
        <TextInput
          style={styles.input}
          placeholder='last name'
          onChangeText={(e) => this.changeLastHandler(e)}
          value = {this.state.lastName} />
        <Button
          style={styles.button}
          title='Create Account'
          color='gray'
          onPress={() => this.handleAddVoter()} />

        <View>
          <Button
            style={styles.button}
            title='Login'
            color='gray'
            onPress={() => this.handleAddVoter()} />
        </View>
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
  button: {
    padding: 10,
    margin: 10
  }
});
