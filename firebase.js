import * as firebase from 'firebase';

  // Initialize Firebase
  class Firebase {
    static initialize(){
      firebase.initializeApp({
        apiKey: "AIzaSyBhvtbrHaCx_d4JurOEKKzp-tD8pVUuvAQ",
        authDomain: "ballt-bx.firebaseapp.com",
        databaseURL: "https://ballt-bx.firebaseio.com",
        storageBucket: "ballt-bx.appspot.com",
      })
    }
  };

  module.exports = Firebase;
