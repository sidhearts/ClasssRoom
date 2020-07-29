import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCVVlg8u5RHOxvsqKUMVyo6sc_oJX3bLeg",
    authDomain: "classroom-a2309.firebaseapp.com",
    databaseURL: "https://classroom-a2309.firebaseio.com",
    projectId: "classroom-a2309",
    storageBucket: "classroom-a2309.appspot.com",
    messagingSenderId: "630709929719",
    appId: "1:630709929719:web:1209b65f92a36e43b675f2",
    measurementId: "G-R7C10V9XN6"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;