import { auth } from '..';

export const signupFirebase = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const logOutFirebase = () => {
  return auth.signOut();
};

export const signInFirebase = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
