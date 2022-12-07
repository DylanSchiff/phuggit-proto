import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { AccountContext } from "./account.context";
export const ColorContext = createContext({
    currentColor: null,
    setCurrentColor: () => {},
});

export const ColorProvider = ({ children }) => {
    const { currentData } = useContext(AccountContext);
    const [currentColor, setCurrentColor] = useState("#fff");
    useEffect(() => {
        const getAccountColor = async () => {
            if (currentData) {
                const { color } = currentData;
                setCurrentColor(color);
            }
        };
        getAccountColor();
    }, [currentData]);

    const value = { currentColor, setCurrentColor };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};
