// All functions that read from cloud firestore
import { db } from "./firebase.js";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const getUserQoutes = async (userUID) => {
  let userQoutes = [];
  await getDocs(collection(db, `Users/${userUID}/Quotes`))
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        userQoutes.push(doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return userQoutes;
};

const getAllQuotes = async () => {
  let allQuotes = [];
  await getDocs(collection(db, `aggregated/Quotes`))
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        allQuotes.push(doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return allQuotes;
};

const getUserInformation = async (userUID) => {
  let userInformation = {};
  await getDoc(doc(db, `Users/${userUID}/Information/Profile`))
    .then((doc) => {
      userInformation = doc.data();
    })
    .catch((error) => {
      console.log(error);
    });
  return userInformation;
};

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

export { getUserQoutes, getUserInformation, getAllQuotes };
