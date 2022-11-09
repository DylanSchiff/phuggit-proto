import {
    createContext,
    useState,
    // useEffect
} from "react";



export const PopContext = createContext({
    currentPop: null,
    setCurrentPop: () => null,
});

export const PopProvider = ({ children }) => {
    const [currentPop, setCurrentPop] = useState(null);

    const value = {
        currentPop,
        setCurrentPop,
    };

    return (
        <PopContext.Provider value={value}>
            {children}
        </PopContext.Provider>
    );
};
