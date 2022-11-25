
import { createContext, useState, useEffect } from "react";
// import USERS from "./userdata/USER.data";

import {
    // addCollectionAndDocuments,
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
    getUsersAndDocuments,
} from "../utils/firebase.utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
    setIsAuthed: () => null,
    isAuthed: false,
    userMap: [],
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthed, setIsAuthed] = useState(false);
    const [userMap, setUserMap] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments("userpool", USERS);
    // }, []);

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
        const getUserMap = async () => {
            const userMap = await getUsersAndDocuments();
            setUserMap(userMap);
        };
        getUserMap();
    }, []);

    const value = {
        currentUser,
        setCurrentUser,
        isAuthed,
        setIsAuthed,
        userMap,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};