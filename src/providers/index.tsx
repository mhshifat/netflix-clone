import React from "react";
import FirebaseProvider from "./FirebaseProvider";

const Providers: React.FC = ({ children }) => {
  return <FirebaseProvider>{children}</FirebaseProvider>;
};

export default Providers;
