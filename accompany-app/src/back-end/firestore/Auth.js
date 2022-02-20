import { db, auth } from "./firebase.js";
import { createUserDocument } from "./create.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

const signUpUser = async (email, password, name, intro, cityLocation) => {
  let user = undefined;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      user.displayName = name;
      console.log(user);
      createUserDocument(user, name, intro, cityLocation);
    })
    .catch((error) => {
      console.log(serverError(error.code, error.message));
    });
  return user;
};

const signIn = async (email, password) => {
  let user = undefined;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      console.log(serverError(error.code, error.message));
    });
  return user;
};

const signOut = async () => {
  await auth.signOut();
};

export { signIn, signUpUser, signOut };
