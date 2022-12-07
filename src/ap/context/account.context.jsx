import { createContext, useState, useEffect } from "react";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
    getAccountsMap,
} from "../utils/firebase.utils";

export const AccountContext = createContext({
    currentAccount: null,
    setCurrentAccount: () => {},
    currentAccountData: null,
    setCurrentAccountData: () => {},
    isAccountPanelOpen: null,
    setIsAccountPanelOpen: () => {},
});

export const AccountProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [currentAccountData, setCurrentAccountData] = useState({});
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

    useEffect(() => {
        const accData = onAuthStateChangedListener((user) => {
            const getAccountMap = async () => {
                const aMap = await getAccountsMap();
                const accountsData = Object.values(aMap).map((account) => {
                    return user.uid === account.uid ? account : null;
                });
                setCurrentAccountData(accountsData.filter((a) => a)[0]);
            };
            getAccountMap();
        });
        return accData;
    }, []);

    const value = {
        currentAccount,
        setCurrentAccount,
        isAccountPanelOpen,
        setIsAccountPanelOpen,
        currentAccountData,
        setCurrentAccountData,
    };
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    );
};
