// import firebase module
import firebase from 'firebase';

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAgTrg7fDhZFa4ZKx-ewzbM8JlVqBk1SsY",
  authDomain: "login-ec7d1.firebaseapp.com",
  projectId: "login-ec7d1",
  storageBucket: "login-ec7d1.appspot.com",
  messagingSenderId: "46306731644",
  appId: "1:46306731644:web:d0a8514df45f224167cbf9"
}
// check if already firebase app is initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}