import AuthContext from "../contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "./firebaseAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // Crate user With Email and password:
  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        path ? navigate(path) : navigate("/");
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return unsubscribe();
    });
  }, []);

  const logInWithEmail = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        path ? navigate(path) : navigate("/");
        setPath(null);
      })
      .catch((error) => {
        toast(error.code, error.message);
        console.log(error.message);
      });
  };

  const provider = new GoogleAuthProvider();

  // Login with Google:
  const logInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const loggedInUser = result.user;
        path ? navigate(path) : navigate("/");
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

  // Update profile:
  const updetProf = (newName, newImg) => {
    updateProfile(auth.currentUser, {
      displayName: newName,
      photoURL: newImg,
    })
      .then(() => {
        toast("Profile Updated!");
      })
      .catch((error) => {
        // An error occurred
        console.log(error.message);
      });
  };

  // Log out function:
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast("Logged out successfully!");
        setUser(null);
        navigate('/')
      })
      .catch((error) => console.log(error.message));
  };

  // Password reset function:
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast("Password reset email sent!");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // Auth context value:
  const autInfo = {
    createUser,
    user,
    logInWithEmail,
    logInWithGoogle,
    updetProf,
    resetPassword,
    logOut,
    setPath,
    navigate,
    loading,
  };

  return (
    <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
