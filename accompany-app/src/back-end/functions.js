import * as Auth from "./firebase-files/Auth";

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

//get user information //video, video title, video description, associated aassignments
export { signUp, signIn };
