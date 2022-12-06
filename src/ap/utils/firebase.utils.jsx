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
    ref,
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
export const createUserDocumentFromAuth = async (
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
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};

export const getUserDocuments = async (user) => {
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(docRef);
    if (userSnapshot.exists()) {
        console.log(userSnapshot.data());
        return userSnapshot.data();
    }
};

export const updateUserDocument = async (user, additionalInformation) => {
    if (!user) return;
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);
    const userData = userSnapshot.data();
    await setDoc(userDocRef, {
        ...userData,
        ...additionalInformation,
    });
};

//signs out user
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

/////////////////////////////////
/////////////////////////////////

// Adding to DB
// export const addCollectionAndDocuments = async (
//     collectionKey,
//     objectsToAdd
// ) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);
//     objectsToAdd.forEach((object) => {
//         const docRef = doc(collectionRef, object.role.toLowerCase());
//         batch.set(docRef, object);
//     });
//     await batch.commit();
//     console.log("done");
// };

// Retrieve queried category map, can get projects, users, etc.. in this instance, accounts
// this model is old
// export const getUsersAndDocuments = async () => {
//     const collectionRef = collection(db, "userpool");
//     const q = query(collectionRef);
//     const querySnapshot = await getDocs(q);
//     const userMan = querySnapshot.docs.reduce((acc, docSnapshot) => {
//         const { role, pool } = docSnapshot.data();
//         acc[role.toLowerCase()] = pool;
//         return acc;
//     }, {});
//     return userMan;
// };

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

//// CREATE NOTE

// export const createNote = async ({
//     id,
//     creator,
//     title,
//     subtitle,
//     topic,
//     text,
//     tags,
//     imageURL,
// }) => {
//     const notesCollection = collection(db, "notes");
//     const batch = writeBatch(db);
//     const createdAt = new Date();
//     const docRef = doc(notesCollection, id.toLowerCase());
//     batch.set(docRef, {
//         createdAt,
//         id,
//         creator,
//         title,
//         subtitle,
//         topic,
//         text,
//         tags,
//         imageURL,
//     });
//     await batch.commit();
//     console.log("SUCCESS");
//     window.location.reload();
// };

// //// GET NOTES

// export const getNotes = async () => {
//     const collectionRef = collection(db, "notes");
//     const q = query(collectionRef);
//     const querySnapshot = await getDocs(q);
//     const notesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//         const {
//             id,
//             creator,
//             title,
//             subtitle,
//             topic,
//             imageURL,
//             text,
//             tags,
//             createdAt,
//         } = docSnapshot.data();
//         acc[id] = {
//             createdAt: createdAt,
//             id: id,
//             creator: creator,
//             title: title,
//             subtitle: subtitle,
//             topic: topic,
//             imageURL: imageURL,
//             text: text,
//             tags: tags,
//         };
//         return acc;
//     }, {});
//     return notesMap;
// };

// export const getCategoriesAndDocuments = async () => {
//     const collectionRef = collection(db, "categories");
//     const q = query(collectionRef);
//     const querySnapshot = await getDocs(q);
//     const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//         const { title, items } = docSnapshot.data();
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});
//     return categoryMap;
// };

// Sign in makes auth and db user
// current user is the thing to use, so get rid of user documents thing.
// current user must be updated with prefered info, like username in order to use site.
// current user has enough info from google creation but ADD more things in. Need minimum, then others are created as acc goes further along
// potentualy generate a random username to start with?

// returns promise
// export const getUsernames = async () => {
//     const collectionRef = collection(db, "users");
//     const q = query(collectionRef);
//     const querySnapshot = await getDocs(q);
//     const usernameMap = querySnapshot.docs.map((docSnapshot) => {
//         const { displayName } = docSnapshot.data();
//         return displayName;
//     });
//     return usernameMap;
// };

// updates username
export const updateUsername = async (userAuth, desiredValue) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const userDocs = userSnapshot.data();
    const batch = writeBatch(db);
    batch.set(userDocRef, {
        ...userDocs,
        displayName: desiredValue,
    });
    await batch.commit();
};

// updates Email
export const updateEmail = async (userAuth, desiredValue) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const userDocs = userSnapshot.data();
    const batch = writeBatch(db);
    batch.set(userDocRef, {
        ...userDocs,
        updatedEmail: desiredValue,
    });
    await batch.commit();
};

// update account attempt.. key funky
// export const updateAccount = async (userAuth, desiredKey, desiredValue) => {
//     if (!userAuth) return;
//     const userDocRef = doc(db, "users", userAuth.uid);
//     const userSnapshot = await getDoc(userDocRef);
//     const userDocs = userSnapshot.data();
//     const batch = writeBatch(db);
//     batch.set(userDocRef, {
//         ...userDocs,
//         desiredKey: desiredValue,
//     });
//     await batch.commit();
// };

// Account creation - just email and password
// export const createUserAccount = async (username, password) => {
//     if (!username || !password) return;
//     const userDocRef = doc(db, "users", username);
//     const userSnapshot = await getDoc(userDocRef);
//     if (!userSnapshot.exists()) {
//         const createdAt = new Date();
//         try {
//             await setDoc(userDocRef, {
//                 createdAt,
//                 username,
//                 password,
//             });
//         } catch (error) {
//             console.log("error creating the account", error.message);
//         }
//     }
//     return userDocRef;
// };

// Type in whatever name you want to view page????????????????????//

// create user and pass is different from auth account
// create user and pass are going to verify that the username is unique
// auth account makes you sign in with google, if authed then can do things

// export const signInUserAccount = async (uName, uPass) => {
//     console.log("Loggin in with ", uName, uPass);
//     const allUsersRef = doc(db, "users", uName);
//     const userRef = await getDoc(allUsersRef);

//     if (userRef.exists()) {
//         const lastSignInAttempt = new Date();
//         await setDoc(userRef, {
//             lastSignInAttempt,
//         });
//         // const userInfo = userRef.data();
//         // console.log(userInfo);

//         // setCurrentAccount(uName);

//         // setAccountSignedIn(userInfo)

//     } else {
//         console.log("cannot find account");
//         return null;
//     }

// if (!userRef.exists()) {
//     const createdAt = new Date();
//     try {
//         await setDoc(userRef, {
//             uName,
//             uPass,
//             emailVerified: false,
//             createdAt,
//         });
//     } catch (error) {
//         console.log("error creating account", error.message);
//     }
// }
//     return allUsersRef;
// };
