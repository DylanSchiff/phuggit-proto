import {
    createContext,
    useState,
    // useEffect
} from "react";
// import {
//     onAuthStateChangedListener,
//     createAccountfromGoogleAuth,
//     getUserDocuments,
// } from "../../utils/freshfire.utils";

export const AccountContext = createContext({
    currentAuth: null,
    setCurrentAuth: () => {},
    currentDocs: null,
    setCurrentDocs: () => {},
});

export const AccountProvider = ({ children }) => {
    const [
        currentAuth,
        // setCurrentAuth
    ] = useState(null);
    const [
        currentDocs,
        // setCurrentDocs
    ] = useState({});
    // const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((userAuth) => {
    //         if (userAuth) {
    //             createAccountfromGoogleAuth(userAuth);
    //         }
    //         setCurrentAuth(userAuth);
    //     });
    //     return unsubscribe;
    // }, []);

    // useEffect(() => {
    //     const getCurrentUsersDocs = onAuthStateChangedListener((userAuth) => {
    //         if (userAuth) {
    //             const gatherUserDocs = async () => {
    //                 const userData = await getUserDocuments(userAuth);
    //                 setCurrentDocs(userData);
    //             };
    //             gatherUserDocs();
    //         }
    //     });
    //     return getCurrentUsersDocs;
    // }, []);

    const value = {
        currentAuth,
        currentDocs,
        // isAccountPanelOpen,
        // setIsAccountPanelOpen,
    };
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    );
};
