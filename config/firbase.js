// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXfCoEO4K8ifO351oQ-B6OrsSm8Iba7M",
  authDomain: "react-native-login-ae4c1.firebaseapp.com",
  projectId: "react-native-login-ae4c1",
  storageBucket: "react-native-login-ae4c1.appspot.com",
  messagingSenderId: "192523410193",
  appId: "1:192523410193:web:4054d8f3a23cc409384ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);