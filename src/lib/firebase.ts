import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBdKNgCEwcpJNbxWt6YlfmuBJErOiJMSG8",
  authDomain: "netflix-clone-86b78.firebaseapp.com",
  databaseURL: "https://netflix-clone-86b78.firebaseio.com",
  projectId: "netflix-clone-86b78",
  storageBucket: "netflix-clone-86b78.appspot.com",
  messagingSenderId: "246535216872",
  appId: "1:246535216872:web:e55a90cd2a679aff50335d",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
