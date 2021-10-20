import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthInitialization from "../Firebase/AuthInit";
AuthInitialization();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  

  const auth = getAuth();



  //Login with email and password
  const loginWithEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };



  //login with google setup
  const loginWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };



  //register new user
  const registerNewUser = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          // Profile updated!
      
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
      
  };



  // user state change handling
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
      } else {
        setUser({});
        
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);




  //logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };



  return {
    user,
    isLoading,
    loginWithGoogle,
    logOut,
    registerNewUser,
    loginWithEmailPassword,
    setUser,
    setError,
    error
  };
};

export default useFirebase;
