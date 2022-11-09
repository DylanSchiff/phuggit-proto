import {
    createContext,
    useState,
    // useEffect
} from "react";



export const PopContext = createContext({
    currentPopId: null,
    setCurrentPopId: () => null,
});

export const PopProvider = ({ children }) => {
    const [currentPopId, setCurrentPopId] = useState(null);

    const value = {
        currentPopId,
        setCurrentPopId,
    };

    return (
        <PopContext.Provider value={value}>
            {children}
        </PopContext.Provider>
    );
};
