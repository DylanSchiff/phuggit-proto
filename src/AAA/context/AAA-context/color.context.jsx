import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { AccountContext } from "./account.context";
export const ColorContext = createContext({
    currentColor: "#fff",
    setCurrentColor: () => {},
    currentEffects: "",
    setCurrentEffects: () => {},
    hasEffects: "",
    setHasEffects: () => {},
    shadowSliderValue: "",
    setShadowSliderValue: () => {},
    lightcolor: "",
    darkcolor: "",
    darkercolor: "",
});

export const ColorProvider = ({ children }) => {
    const { currentData } = useContext(AccountContext);
    const [currentColor, setCurrentColor] = useState("#fff");
    const [currentEffects, setCurrentEffects] = useState("");
    const [hasEffects, setHasEffects] = useState(true);
    const [shadowSliderValue, setShadowSliderValue] = useState("51");
    const [lightcolor, setLightColor] = useState("#fff");
    const [darkcolor, setDarkColor] = useState("#fff");
    const [darkercolor, setDarkerColor] = useState("#fff");

    useEffect(() => {
        const getAccountColor = async () => {
            if (currentData) {
                const { color, colorEffects, hasEffects, shadowSliderValue } =
                    currentData;
                setCurrentEffects(colorEffects);
                setHasEffects(hasEffects);
                setShadowSliderValue(shadowSliderValue);
                setCurrentColor(color);
            }
        };
        getAccountColor();
    }, [currentData]);

    const value = {
        currentColor,
        setCurrentColor,
        currentEffects,
        setCurrentEffects,
        hasEffects,
        setHasEffects,
        shadowSliderValue,
        setShadowSliderValue,
        lightcolor,
        setLightColor,
        darkcolor,
        setDarkColor,
        darkercolor,
        setDarkerColor,
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};
