import { createContext, useState, useEffect } from "react";
import { generateRoutes } from "../../utils/AAA-utilz/firebase.utils";

export const RoutingContext = createContext({
    currentRoutes: null,
    setCurrentRoutes: () => {},
});

export const RouteProvider = ({ children }) => {
    const [currentRoutes, setCurrentRoutes] = useState([]);

    useEffect(() => {
        const generateUserRoutes = async () => {
            const routes = await generateRoutes();
            setCurrentRoutes(routes);
        };
        generateUserRoutes();
    }, []);

    const value = {
        currentRoutes,
        setCurrentRoutes,
    };
    return (
        <RoutingContext.Provider value={value}>
            {children}
        </RoutingContext.Provider>
    );
};
