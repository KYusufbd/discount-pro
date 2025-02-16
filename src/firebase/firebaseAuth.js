import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "dotenv";

const fbconfig = import.meta.env;
const firebaseConfig = {
  apiKey: fbconfig.VITE_apiKey,
  authDomain: fbconfig.VITE_authDomain,
  projectId: fbconfig.VITE_projectId,
  storageBucket: fbconfig.VITE_storageBucket,
  messagingSenderId: fbconfig.VITE_messagingSenderId,
  appId: fbconfig.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
