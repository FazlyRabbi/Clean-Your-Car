// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQGMNOjq1UZYhhUKoccjRWXdGDd70jjnM",
  authDomain: "cleanyoucar-270f6.firebaseapp.com",
  projectId: "cleanyoucar-270f6",
  storageBucket: "cleanyoucar-270f6.appspot.com",
  messagingSenderId: "792002854031",
  appId: "1:792002854031:web:00e4119c86fd994399c4fa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
