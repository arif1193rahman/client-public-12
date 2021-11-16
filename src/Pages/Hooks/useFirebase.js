import initializeFirebase from "../Firebase/Firebase.init";
import {useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged } from "firebase/auth";



initializeFirebase();
const useFirebase = ()=>{
        const [user, setUser] = useState({})

        const auth = getAuth();

        const registerUser = (email, password)=>{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
        }

const loginUser = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// Observer
        useEffect(()=>{
         const unsubscribe =   onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user);
                  // ...
                } else {
                    setUser({})
                }
              })
              return ()=> unsubscribe;
        },[])


const logOut = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}



        return {
            user,
            registerUser,
            logOut,
            loginUser
        }
}

export default useFirebase;