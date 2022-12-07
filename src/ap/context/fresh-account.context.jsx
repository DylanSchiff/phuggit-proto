import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    createAccountfromGoogleAuth,
    getUserDocuments,
} from "../utils/freshfire.utils";

export const FreshAccountContext = createContext({
    currentAuth: null,
    setCurrentAuth: () => {},
    currentDocs: null,
    setCurrentDocs: () => {},
    isAccountPanelOpen: null,
    setIsAccountPanelOpen: () => {},
});

export const FreshAccountProvider = ({ children }) => {
    const [currentAuth, setCurrentAuth] = useState(null);
    const [currentDocs, setCurrentDocs] = useState({});
    const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((userAuth) => {
            if (userAuth) {
                createAccountfromGoogleAuth(userAuth);
            }
            setCurrentAuth(userAuth);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        const getCurrentDocs = onAuthStateChangedListener((userAuth) => {
            if (userAuth) {
                const gatherUserDocs = async () => {
                    const userData = await getUserDocuments(userAuth);
                    setCurrentDocs(userData);
                };
                gatherUserDocs();
            }
        });
        return getCurrentDocs;
    }, []);

    const value = {
        currentAuth,
        currentDocs,
        isAccountPanelOpen,
        setIsAccountPanelOpen,
    };
    return (
        <FreshAccountContext.Provider value={value}>
            {children}
        </FreshAccountContext.Provider>
    );
};
