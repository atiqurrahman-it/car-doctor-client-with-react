import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile (name & picture )
  const updateUser = (currentUser, userName) => {
    return updateProfile(currentUser, {
      displayName: userName,
    });
  };

     // social login 
     const logInWithGoogle=()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
  }

  // const logInWithGitHub=()=>{
  //     setLoading(true)
  //     return signInWithPopup(auth,gitHubAuthProvider)
  // }


  // user logout
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Set an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user ", currentUser);
      setLoading(false);

      
      // ------------jws token start  -----------------------------
      if(currentUser && currentUser.email){
        const loggedUser={
          email:currentUser.email,
        }
        fetch('http://localhost:5000/jwt-token',{
          method:'POST',
          headers:{
           'content-type':"application/json"
          },
          body:JSON.stringify(loggedUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('jsw responsive ',data)
          // warning local store is not  the best (second best place) to store access token
          localStorage.setItem('car-doctors-access-token',data.token)
          
        })
        .catch(error=>console.log(error))
      }else{
        localStorage.removeItem('car-doctors-access-token')
      }


     // ------------jws token start  -----------------------------


    });

    return () => {
      unsubscribe();
    };
  }, []);

  // data pass
  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    updateUser,
    logOutUser,
    logInWithGoogle,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
