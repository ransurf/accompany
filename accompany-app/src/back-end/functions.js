import * as Auth from "./firestore/Auth.js";
import * as Create from "./firestore/create.js";
import * as Read from "./firestore/read.js";
const signUp = async (
  email,
  password,
  name,
  intro,
  cityLocation
) => {
  const user = await Auth.signUpUser(
    email,
    password,
    name,
    intro,
    cityLocation
  );
  return user;
};

const signIn = async (email, password) => {
  const user = await Auth.signIn(email, password);
  return user;
};

const signOut = async () => {
  await Auth.signOut();
};

const addQuote = async (user, quote) => {
  await Create.addQuote(user, quote);
};

const getUserQoutes = async (userUID) => {
  const data = Read.getUserQoutes(userUID);
  return data;
};

const getAllQuotes = async () => {
  const data = await Read.getAllQuotes();
  return data;
};

const getUserProfile = async (userUID) => {
  const data = Read.getUserProfile(userUID);
  return data;
};

//get user information //video, video title, video description, associated aassignments
export {
  signUp,
  signIn,
  signOut,
  addQuote,
  getUserQoutes,
  getUserProfile,
  getAllQuotes,
};
