import AuthContext from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./firebaseAuth";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
    }).catch(error => {
      console.log(error.message);
    })
  };

  const logInWithEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  const logOut = () => {
    signOut(auth).then(() => {
      console.log("Logged out successfully!");
    }).catch(error => console.log(error));
  };

  const autInfo = { createUser, logInWithEmail, logOut };
  return (
    <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
