import { db } from "./firebase.js";
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore";

const createUserDocument = async (user, userUsername, userName) => {
  await setDoc(
    doc(db, `Users/${user.uid}`),
    {
      email: user.email,
      username: userUsername,
      name: userName,
    },
    { merge: true }
  );
};

export { createUserDocument };
