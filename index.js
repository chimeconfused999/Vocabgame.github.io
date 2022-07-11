// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8SyHAMMVV0Gtcs871LSM0tficArYX5eg",
  authDomain: "zrenix-aae2e.firebaseapp.com",
  databaseURL: "https://zrenix-aae2e.firebaseio.com",
  projectId: "zrenix-aae2e",
  storageBucket: "zrenix-aae2e.appspot.com",
  messagingSenderId: "1095365181062",
  appId: "1:1095365181062:web:db9b34e80b0572fc",
  measurementId: "G-GR8YWKSF7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const GoogleAuth = new firebase.auth.GoogleAuthProvider();

//To sign in with pop-up.
firebase.auth().signInWithPopup(googleAuth);

//To sign in with redirect. 
firebase.auth().signInWithRedirect(googleAuth);
