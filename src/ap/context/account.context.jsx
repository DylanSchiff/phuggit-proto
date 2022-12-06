import { createContext, useState, useEffect } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "../utils/firebase.utils";

export const AccountContext = createContext({
    currentAccount: null,
    setCurrentAccount: () => {},
    isAccountPanelOpen: null,
    setIsAccountPanelOpen: () => {},
});

export const AccountProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentAccount(user);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentAccount,
        setCurrentAccount,
        isAccountPanelOpen,
        setIsAccountPanelOpen,
    };
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    );
};
