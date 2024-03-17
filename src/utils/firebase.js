// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAy2ZGvCDfJZkwjoeFruDnaCgcrNg9P7M",
  authDomain: "netflixgpt-f360c.firebaseapp.com",
  projectId: "netflixgpt-f360c",
  storageBucket: "netflixgpt-f360c.appspot.com",
  messagingSenderId: "380795319596",
  appId: "1:380795319596:web:5027eee8e35bcd17786889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
