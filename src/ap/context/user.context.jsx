import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
    getUserDocuments,
} from "../utils/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    currentUserDocs: null,
    setCurrentUserDocs: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserDocs, setCurrentUserDocs] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        const userDocs = onAuthStateChangedListener((user) => {
            if (user) {
                const userData = getUserDocuments(user);
                setCurrentUserDocs(userData);
            }
        });
        return userDocs;
    }, []);

    const value = {
        currentUser,
        setCurrentUser,
        currentUserDocs,
        setCurrentUserDocs,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
