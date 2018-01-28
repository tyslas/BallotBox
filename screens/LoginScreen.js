import React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Form from '../components/Form';

const { width, height } = Dimensions.get('window');

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/ballotbox-logo-blue.png')}
          style={styles.logo}
        />
        <Form />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: width,
    height: height,
  },
  logo: {
    width: 300,
    height: 240,
    resizeMode: 'contain',
  },
});
