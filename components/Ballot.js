import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, TextInput, Button, Dimensions, FlatList } from 'react-native';
import firebase from 'firebase';
import Firebase from '../firebase';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.4;

export default class Ballot extends Component {
  render () {
    return (
      <View>
        <Text>Ballot View</Text>
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
