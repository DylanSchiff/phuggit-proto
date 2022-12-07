import { createContext, useState, useEffect } from "react";
// import {
//     generateRoutes,
// } from "../../utils/freshfire.utils";

export const AccountContext = createContext({
    currentRoutes: null,
    setCurrentRoutes: () => {},
});

export const AccountProvider = ({ children }) => {
    const [currentRoutes, setCurrentRoutes] = useState([]);

    // useEffect(() => {
    //     const generateUserRoutes = async () => {
    //         const routes = await generateRoutes();
    //         setCurrentRoutes(routes);
    //     };
    //     generateUserRoutes();
    // }, []);

    const value = {
        currentRoutes,
        setCurrentRoutes,
    };
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    );
};
