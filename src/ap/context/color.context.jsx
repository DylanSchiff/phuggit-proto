import { createContext, useState } from "react";
export const ColorContext = createContext({
    currentColor: "#5c2fe6",
    setCurrentColor: () => {},
});

export const ColorProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState("#5c2fe6");
    const value = { currentColor, setCurrentColor };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};
