import { db } from "./firebase.js";
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore";

const createUserDocument = async (
  user,
  userName,
  intro,
  cityLocation
) => {
  await setDoc(
    doc(db, `Users/${user.uid}`),
    {
      email: user.email,
      name: userName,
    },
    { merge: true }
  );

  await setDoc(
    doc(db, `Users/${user.uid}/Information/Profile`),
    {
      miniIntro: intro,
      location: cityLocation,
    },
    { merge: true }
  );

  //await setDoc(doc(db, `Users/${user.uid}/Quotes`), {}, { merge: true });
};

const addQuote = async (user, quote) => {
  const quoteName = "";
  await addDoc(doc, `Users/${user.uid}/Quotes`, {
    quote: quote,
  }).then((docRef) => {
    quoteName = docRef.id;
  });

  await addQuoteToCollection(user, quote, quoteName);
};

const addQuoteToCollection = async (user, quote, quoteName) => {
  await addDoc(doc, `aggregated/Quotes`, {
    [quoteName]: quote,
  });
};

export { createUserDocument, addQuote, addQuoteToCollection };
