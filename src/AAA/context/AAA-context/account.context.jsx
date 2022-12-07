import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    createAccountfromGoogleAuth,
    getAccountfromDB,
} from "../../utils/AAA-utilz/firebase.utils";

export const AccountContext = createContext({
    currentAuth: null,
    setCurrentAuth: () => {},
    currentData: null,
    setCurrentData: () => {},
});

export const AccountProvider = ({ children }) => {
    const [currentAuth, setCurrentAuth] = useState(null);
    const [currentData, setCurrentData] = useState({});

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
        const getCurrentUsersData = onAuthStateChangedListener((userAuth) => {
            if (userAuth) {
                const gatherUserData = async () => {
                    const userData = await getAccountfromDB(userAuth);
                    setCurrentData(userData);
                };
                gatherUserData();
            }
        });
        return getCurrentUsersData;
    }, []);

    const value = {
        currentAuth,
        currentData,
    };
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    );
};
