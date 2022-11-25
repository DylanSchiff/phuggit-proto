
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYC9b_t-_PspbHuDgfha093t-VqKHfvpw",
    authDomain: "phuggit-app.firebaseapp.com",
    projectId: "phuggit-app",
    storageBucket: "phuggit-app.appspot.com",
    messagingSenderId: "89034240436",
    appId: "1:89034240436:web:2ea40a6d00bab1ffd082e1"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,
    field
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    console.log(batch)
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap;
};

export const getProjectsAndDocuments = async () => {
    const collectionRef = collection(db, 'projects');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const projectsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return projectsMap;
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);


//// CREATE NOTE

export const createNote = async ({
    id,
    creator,
    title,
    subtitle,
    topic,
    text,
    tags,
    imageURL
}) => {
    const notesCollection = collection(db, "notes");
    const batch = writeBatch(db);

    const createdAt = new Date();
    const docRef = doc(notesCollection, id.toLowerCase());
    batch.set(docRef, {
        createdAt,
        id,
        creator,
        title,
        subtitle,
        topic,
        text,
        tags,
        imageURL
    });
    await batch.commit();
    console.log("SUCCESS");
    window.location.reload();
};

//// GET NOTES

export const getNotes = async () => {
    const collectionRef = collection(db, "notes");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const notesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {
            id,
            creator,
            title,
            subtitle,
            topic,
            imageURL,
            text,
            tags,
            createdAt,
        } = docSnapshot.data();
        acc[id] = {
            createdAt: createdAt,
            id: id,
            creator: creator,
            title: title,
            subtitle: subtitle,
            topic: topic,
            imageURL: imageURL,
            text: text,
            tags: tags,
        };
        return acc;
    }, {});
    return notesMap;
};