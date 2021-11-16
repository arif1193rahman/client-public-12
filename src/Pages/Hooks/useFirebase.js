import initializeFirebase from "../Firebase/Firebase.init";
import {useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged } from "firebase/auth";



initializeFirebase();
const useFirebase = ()=>{
        const [user, setUser] = useState({})
        const [isLoading, setIsLoading] = useState(true);
        const [authError, setAuthError] = useState('');

        const auth = getAuth();

        const registerUser = (email, password)=>{
          setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setAuthError('')
                const user = userCredential.user;
              })
              .catch((error) => {
                setAuthError(error.message);
              })
              .finally(()=>setIsLoading(false));
        }

const loginUser = (email, password, location, history)=>{
  setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);
    setAuthError('');
    // setUser({});
    const user = userCredential.user;
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
        },[])


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