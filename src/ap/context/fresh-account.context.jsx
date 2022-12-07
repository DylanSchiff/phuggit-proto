import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    createAccountfromGoogleAuth,
    getUserDocuments,
    generateRoutes,
} from "../utils/freshfire.utils";

export const FreshAccountContext = createContext({
    currentAuth: null,
    setCurrentAuth: () => {},
    currentDocs: null,
    setCurrentDocs: () => {},
    currentRoutes: null,
    setCurrentRoutes: () => {},
    isAccountPanelOpen: null,
    setIsAccountPanelOpen: () => {},
});

export const FreshAccountProvider = ({ children }) => {
    const [currentAuth, setCurrentAuth] = useState(null);
    const [currentDocs, setCurrentDocs] = useState({});
    const [currentRoutes, setCurrentRoutes] = useState([]);
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
        const getCurrentUsersDocs = onAuthStateChangedListener((userAuth) => {
            if (userAuth) {
                const gatherUserDocs = async () => {
                    const userData = await getUserDocuments(userAuth);
                    setCurrentDocs(userData);
                };
                gatherUserDocs();
            }
        });
        return getCurrentUsersDocs;
    }, []);

    useEffect(() => {
        const generateUserRoutes = async () => {
            const routes = await generateRoutes();
            setCurrentRoutes(routes);
        };
        generateUserRoutes();
    }, []);

    const value = {
        currentAuth,
        currentDocs,
        isAccountPanelOpen,
        setIsAccountPanelOpen,
        currentRoutes,
        setCurrentRoutes,
    };
    return (
        <FreshAccountContext.Provider value={value}>
            {children}
        </FreshAccountContext.Provider>
    );
};
