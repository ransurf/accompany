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
  await addDoc(doc(db, `Users/${user.uid}/Quotes`), {
    quote: quote,
  }).then((docRef) => {
    quoteName = docRef.id;
  });

  await addQuoteToCollection(quote, quoteName);
};

const addQuoteToCollection = async (quote, quoteName) => {
  await setDoc(
    doc(db, "aggregated", "Quotes"),
    {
      [quoteName]: quote,
    },
    { merge: true }
  );
};

export { createUserDocument, addQuote, addQuoteToCollection };
