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
    collection,
    writeBatch,
    doc,
    query,
    getDoc,
    setDoc,
    getDocs,
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

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////// Account

//  checks to see if there's the url in the db, if there is not create account
export const createAccountfromGoogleAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userRef);
    if (!userSnapshot.exists()) {
        const { displayName, email, uid } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                uid,
                displayName,
                email,
                createdAt,
                handle:
                    displayName.toLowerCase().trim().split(" ").join("") +
                    uid.substring(3, 6).toLowerCase(),
                routePath:
                    displayName.toLowerCase().trim().split(" ").join("") +
                    uid.substring(3, 6).toLowerCase(),
                color: "#fff",
                badges: [],
                followers: [],
                following: [],
                ...additionalInformation,
            });
            alert(`Account for ${displayName} created.`);
            window.location.reload();
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userRef;
};

export const getAccountfromDB = async (gAuth) => {
    const userDocRef = doc(db, "users", gAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot && userSnapshot.exists()) {
        try {
            const docRef = doc(db, "users", gAuth.uid);
            const userSnapshot = await getDoc(docRef);
            return userSnapshot.data();
        } catch (error) {
            console.log("error getting the user", error.message);
        }
    }
};

export const getAccountsMap = async () => {
    const dbCollectionRef = collection(db, "users");
    const dbCollection = query(dbCollectionRef);
    const collectionSnapshot = await getDocs(dbCollection);
    const accountMap = collectionSnapshot.docs.reduce((acc, docSnapshot) => {
        const { displayName } = docSnapshot.data();
        acc[displayName.toLowerCase()] = docSnapshot.data();
        return acc;
    }, {});
    return accountMap;
};

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////// Updating Accounts

// updates user color
export const updateUserName = async (userAuth, desiredName) => {
    if (desiredName.length > 0) {
        if (!userAuth) return;
        const userDocRef = doc(db, "users", userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);
        const userDocs = userSnapshot.data();
        const batch = writeBatch(db);
        batch.set(userDocRef, {
            ...userDocs,
            displayName: desiredName,
        });
        await batch.commit();
        alert("Name Saved");
        // window.location.reload();
    } else {
        alert("Input is empty");
    }
};

export const updateHandle = async (userAuth, desiredHandle) => {
    if (desiredHandle.length > 0) {
        if (!userAuth) return;
        const map = await getAccountsMap();
        const handleMap = Object.values(map).map((account) => {
            const { handle } = account;
            return handle;
        });
        const isHandleTaken = handleMap
            .map((handle) => {
                return handle === desiredHandle.toLowerCase() ? true : false;
            })
            .filter((o) => o)[0];

        if (!isHandleTaken === true) {
            const userRef = doc(db, "users", userAuth.uid);
            const userSnapshot = await getDoc(userRef);
            const userData = userSnapshot.data();
            const batch = writeBatch(db);
            batch.set(userRef, {
                ...userData,
                handle: isHandleTaken
                    ? userData.handle
                    : desiredHandle.toLowerCase(),
                routePath: isHandleTaken
                    ? userData.handle.toLowerCase().trim().split(" ").join("")
                    : desiredHandle.toLowerCase().trim().split(" ").join(""),
            });
            await batch.commit();
            alert("Handle changed successfully.");

            // window.location.reload();
        } else {
            alert("That handle is taken, please try another.");
        }
    } else {
        alert("Input is empty");
    }
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
    alert("Theme Color Saved");
};

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////// Routing

export const generateRoutes = async () => {
    const accountMap = await getAccountsMap();
    const routePaths = Object.values(accountMap)
        .map((account) => {
            return account.routePath;
        })
        .filter((o) => o);
    return routePaths;
};
