import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { AccountContext } from "./account.context";
export const ColorContext = createContext({
    currentColor: "#5c2fe6",
    setCurrentColor: () => {},
});

export const ColorProvider = ({ children }) => {
    const { currentAccountData } = useContext(AccountContext);

    const [currentColor, setCurrentColor] = useState("#5c2fe6");

    useEffect(() => {
        const getAccountColor = async () => {
            if (currentAccountData) {
                const { color } = currentAccountData;
                setCurrentColor(color);
            }
        };
        getAccountColor();
    }, [currentAccountData]);

    const value = { currentColor, setCurrentColor };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};
