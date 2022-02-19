import * as Auth from "./firestore/Auth.js";
import * as Create from "./firestore/create.js";
import * as Read from "./firestore/read.js";
// All functions that front-end will call (Keep it simple)
const signUp = async (
  email,
  password,
  username,
  name,
  intro,
  goals,
  cityLocation
) => {
  const user = await Auth.signUpProfessor(
    email,
    password,
    username,
    name,
    intro,
    goals,
    cityLocation
  );
  return user;
};

const signIn = async (email, password) => {
  const user = await Auth.signIn(email, password);
  return user;
};

const addQuote = async (user, quote) => {
  await Create.addQuote(user, quote);
};

const getUserQoutes = async (userUID) => {
  const data = Read.getUserQoutes(userUID);
  return data;
};

const getAllQuotes = async () => {
  const data = Read.getAllQuotes();
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
  addQuote,
  getUserQoutes,
  getUserProfile,
  getAllQuotes,
};
