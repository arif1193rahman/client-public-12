import initializeFirebase from "../Firebase/Firebase.init";
import {useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged,updateProfile } from "firebase/auth";



initializeFirebase();
const useFirebase = ()=>{
        const [user, setUser] = useState({})
        const [isLoading, setIsLoading] = useState(true);
        const [authError, setAuthError] = useState('');

        const auth = getAuth();

        const registerUser = (email, password,name, history)=>{
          setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setAuthError('');
              const newUser = {email, displayName: name};
              setUser(newUser);
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
                // An error occurred
                // ...
              });
              history.replace('/');
                // const user = userCredential.user;
              })
              .catch((error) => {
                setAuthError(error.message);
              })
              .finally(()=>setIsLoading(false));
        }

const loginUser = (email, password, location, history)=>{
  setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);
    // collect email for order
    sessionStorage.setItem('email', result.user.email);
    setAuthError('');
    // setUser({});
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    setAuthError(error.message);

  })
  .finally(()=>setIsLoading(false));

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
                setIsLoading(false)
              })
              return ()=> unsubscribe;
        },[auth])


const logOut = ()=>{
    setIsLoading(true);
signOut(auth).then(() => {

}).catch((error) => {

})
.finally(()=>setIsLoading(false));

}



        return {
            user,
            registerUser,
            logOut,
            loginUser,
            isLoading,
            authError
        }
}

export default useFirebase;