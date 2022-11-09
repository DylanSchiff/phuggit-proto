import {
    createContext,
    useState,
    // useEffect
} from "react";

export const PopContext = createContext({
    currentPop: null,
    setCurrentPop: () => null,
    currentPopDisplay: null,
    setCurrentPopDisplay: () => null,
});

export const PopProvider = ({ children }) => {
    const [currentPop, setCurrentPop] = useState(null);
    const [currentPopDisplay, setCurrentPopDisplay] = useState(null);

    const value = {
        currentPop,
        setCurrentPop,
        currentPopDisplay,
        setCurrentPopDisplay,
    };

    return <PopContext.Provider value={value}>{children}</PopContext.Provider>;
};
