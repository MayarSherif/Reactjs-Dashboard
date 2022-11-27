import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCdJ1R0akO3j3IHXrVJJRXv5bO6NDOYdxA",
    authDomain: "dashboard-493c2.firebaseapp.com",
    projectId: "dashboard-493c2",
    storageBucket: "dashboard-493c2.appspot.com",
    messagingSenderId: "718782445482",
    appId: "1:718782445482:web:3d1f45f8e0f0ba06e59dd3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const Gprovider = new GoogleAuthProvider();
// const fbProvider = new FacebookAuthProvider();

Gprovider.setCustomParameters({
    prompt: "select_account"
});

// fbProvider.setCustomParameters({
//     'display': 'popup'
//   });

export const auth = getAuth();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, Gprovider)
}



export const db = getFirestore();

export const createUserDocFromAuth = async (userauth, additionalData={}) => {
    const userdocref = doc(db, 'users', userauth.uid)
    const usersnapshot = await getDoc(userdocref);
    console.log(userauth.uid);
    if (!usersnapshot.exists()) {
        const { displayName, email } = userauth;
        const createdAt = new Date();
        try {
            await setDoc(userdocref, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error', error.message);
        }
    }
    
    return userdocref;
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;
    return createUserWithEmailAndPassword(auth,email,password);
}
export const signinUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth,email,password);
}
export const signoutUser = async () => await signOut(auth);
  