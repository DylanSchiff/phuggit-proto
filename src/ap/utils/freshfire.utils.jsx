import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    getFirestore,
    // collection,
    writeBatch,
    doc,
    // query,
    getDoc,
    setDoc,
    // getDocs,
    // ref,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYC9b_t-_PspbHuDgfha093t-VqKHfvpw",
    authDomain: "phuggit-app.firebaseapp.com",
    projectId: "phuggit-app",
    storageBucket: "phuggit-app.appspot.com",
    messagingSenderId: "89034240436",
    appId: "1:89034240436:web:2ea40a6d00bab1ffd082e1",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// signs in, or creates user if there isn't one
export const createAccountfromGoogleAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email, photoURL, uid } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                uid,
                displayName,
                email,
                createdAt,
                photoURL,
                username: displayName,
                color: "#5c2fe6",
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};

export const getUserDocuments = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot && userSnapshot.exists()) {
        try {
            const docRef = doc(db, "users", userAuth.uid);
            // something about right here is making it return an awaited value, (promise)
            const userSnapshot = await getDoc(docRef);
            return userSnapshot.data();
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
};

// updates username
export const updateUsername = async (userAuth, desiredValue) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const userDocs = userSnapshot.data();
    const batch = writeBatch(db);
    batch.set(userDocRef, {
        ...userDocs,
        userName: desiredValue,
    });
    await batch.commit();
};

// updates user color
export const updateUserColor = async (userAuth, desiredValue) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const userDocs = userSnapshot.data();
    const batch = writeBatch(db);
    batch.set(userDocRef, {
        ...userDocs,
        color: desiredValue,
    });
    await batch.commit();
};
