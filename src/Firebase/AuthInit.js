import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const AuthInitialization = () => {
    initializeApp(firebaseConfig);
}

export default AuthInitialization;