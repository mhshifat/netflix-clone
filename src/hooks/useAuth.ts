import { useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";

const useAuth = () => {
  const { firebase } = useContext(FirebaseContext);
  const [user, setUser] = useState<firebase.User | null>(null);
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    const listener = firebaseRef.current
      .auth()
      .onAuthStateChanged((authUser) => {
        if (authUser) {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          setUser(authUser);
        } else {
          localStorage.removeItem("authUser");
          setUser(null);
        }
      });

    return () => listener();
  }, []);

  return user;
};

export default useAuth;
