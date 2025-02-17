import AuthContext from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./firebaseAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // Crate user With Email and password:
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        path ? navigate(path) : navigate('/');
        setPath(null);
        toast("Account created successfully!");
      })
      .catch((error) => {
        toast(error.message);
        console.log(error.message);
      });
  };

  const [user, setUser] = useState(null);
  const [path, setPath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      return unsubscribe();
    });
  }, []);

  const logInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        path ? navigate(path) : navigate('/');
        setPath(null);
      })
      .catch((error) => {
        toast(error.code, error.message);
        console.log(error.message);
      });
  };

  const provider = new GoogleAuthProvider();

  const logInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const loggedInUser = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        const moreInfo = getAdditionalUserInfo(result);
        console.log({ token, user, moreInfo });
        path ? navigate(path) : navigate('/');
        setUser(loggedInUser);
        setPath(null);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast(errorMessage);
        console.log({
          "error-code": errorCode,
          "error-message": errorMessage,
          email: email,
          Credential: credential,
        });
      });
  };

  // Log out function:
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast("Logged out successfully!");
        setUser(null);
      })
      .catch((error) => console.log(error.message));
  };

  const autInfo = {
    createUser,
    user,
    logInWithEmail,
    logInWithGoogle,
    logOut,
    setPath,
    navigate,
  };

  return (
    <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
