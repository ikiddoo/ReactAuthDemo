import React from 'react'
import './Login.css'

// import firebase module
import firebase from 'firebase';
// import react-firebaseui module
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
};


const Login = () => {
  return (
    <div className="center">
      <h1>React Firebase Auth Button Demo</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default Login;
