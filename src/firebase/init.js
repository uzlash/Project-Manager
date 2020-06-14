import firebase from "@firebase/app";
import "@firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDCS0N5BSifO1FYCIJjmVg_sZnr8xRzL00",
    authDomain: "project-manager-f6797.firebaseapp.com",
    databaseURL: "https://project-manager-f6797.firebaseio.com",
    projectId: "project-manager-f6797",
    storageBucket: "project-manager-f6797.appspot.com",
    messagingSenderId: "505756017386",
    appId: "1:505756017386:web:5fe023f55f031a47446d93"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore.settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();