import { useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";

export interface IContent {
  docId: string;
  title: string;
  slug: string;
  description: string;
  genre: string;
  maturity: string;
}

const useContent = (target: "series" | "films") => {
  const [content, setContent] = useState<IContent[]>([]);
  const { firebase } = useContext(FirebaseContext);
  const firebaseRef = useRef(firebase);

  useEffect(() => {
    firebaseRef.current
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent as IContent[]);
      })
      .catch((err) => console.log(err.message));
  }, [target]);

  return { [target]: content };
};

export default useContent;
