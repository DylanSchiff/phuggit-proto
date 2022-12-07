import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { AccountContext } from "./account.context";
export const ColorContext = createContext({
    currentColor: "#5c2fe6",
    setCurrentColor: () => {},
});

export const ColorProvider = ({ children }) => {
    const { currentAccountData } = useContext(AccountContext);
    const { color } = currentAccountData;
    const [currentColor, setCurrentColor] = useState("#fff");
    useEffect(() => {
        const getAccountColor = async () => {
            setCurrentColor(color);
        };
        getAccountColor();
    }, [color]);

    const value = { currentColor, setCurrentColor };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};
