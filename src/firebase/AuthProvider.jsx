import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebaseAuth";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const autInfo = { createUser };
  return (
    <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
