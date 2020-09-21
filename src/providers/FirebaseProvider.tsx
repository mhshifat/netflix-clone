import Firebase from "firebase/app";
import React, { createContext } from "react";
import { firebase } from "../lib/firebase";

interface FirebaseContextState {
  firebase: Firebase.app.App;
}
export const FirebaseContext = createContext(
  (null as unknown) as FirebaseContextState
);

const FirebaseProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
