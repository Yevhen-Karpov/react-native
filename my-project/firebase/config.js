import * as firebase from "firebase";
import "firebase/auth";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsZNJ4hEE1gtDWQQzoAIw0DoSPU7lq1os",
  authDomain: "my-social-project-777.firebaseapp.com",
  projectId: "my-social-project-777",
  storageBucket: "my-social-project-777.appspot.com",
  messagingSenderId: "843473406399",
  appId: "1:843473406399:web:773a5d958e506f9292390a",
  measurementId: "G-5QTGGG798E",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export default firebase;
