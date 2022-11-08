import {
    createContext,
    useState,
    // useEffect
} from "react";



export const DisplayContext = createContext({
    currentDisplay: null,
    setCurrentDisplay: () => null,
});

export const DisplayProvider = ({ children }) => {
    const [currentDisplay, setCurrentDisplay] = useState(null);

    const value = {
        currentDisplay,
        setCurrentDisplay,
    };

    return (
        <DisplayContext.Provider value={value}>
            {children}
        </DisplayContext.Provider>
    );
};
