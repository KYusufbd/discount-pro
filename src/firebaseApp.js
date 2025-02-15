import { initializeApp } from "firebase/app";
import "dotenv";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = import.meta.env;

export const app = initializeApp(firebaseConfig);
