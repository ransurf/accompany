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
  const docRef = doc(db, "aggregated", "Quotes");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());

    for (let key in docSnap.data()) {
      //console.log(key);
      allQuotes[key] = docSnap.data()[key];
      //console.log(allQuotes);
    }
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  //console.log(allQuotes);
  return allQuotes;

  // let allQuotes = [];
  // const docRef = doc(db, "aggregated", "Quotes")
  // const docSnap = await getDoc(docRef)
  // .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       allQuotes.push(doc.data());
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // return allQuotes;
};;

const getUserProfile = async (userUID) => {
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

const getAllUserProfiles = async () => {
  let allUserProfiles = [];
  await getDocs(collection(db, "Users"))
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        allUserProfiles.push(doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return allUserProfiles;
};

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

export { getUserQoutes, getUserProfile, getAllQuotes, getAllUserProfiles };
