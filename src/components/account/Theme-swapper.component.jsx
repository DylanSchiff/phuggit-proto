import { useContext } from "react";
import { ColorContext } from "../../ap/context/color.context";
import styled from "styled-components";
import ColorCube from "../colorcube/colorcube.component";
const ColorCubeDisplay = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.5);
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
    overflow: hidden;
`;
const ThemeSwapper = () => {
    const { currentColor, setCurrentColor } = useContext(ColorContext);
    const defaultColor = currentColor ? currentColor : "transparent";
    const dismantleColor = () => {
        return defaultColor
            .replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
            )
            .substring(1)
            .match(/.{2}/g)
            .map((x) => parseInt(x, 16));
    };
    const colorpack = defaultColor ? dismantleColor() : null;
    const lightervalues = Object.values(colorpack).map((rgbvalues) => {
        return rgbvalues + 20 > 255 ? rgbvalues : rgbvalues + 20;
    });
    const darkervalues = Object.values(colorpack).map((rgbvalues) => {
        return rgbvalues - 20 < 0 ? rgbvalues : rgbvalues - 20;
    });
    const evendarkervalues = Object.values(colorpack).map((rgbvalues) => {
        return rgbvalues - 40 < 0 ? rgbvalues : rgbvalues - 40;
    });
    const ran255 = () => {
        return Math.floor(Math.random() * 255);
    };
    const valueToHex = (value) => {
        var hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    const buildHex = (r, g, b) => {
        return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
    };
    const generateRandomColor = () => {
        const randomColor = { r: ran255(), g: ran255(), b: ran255() };
        const randomColorHex = buildHex(
            randomColor.r,
            randomColor.g,
            randomColor.b
        );
        return setCurrentColor(randomColorHex);
    };
    const lightcolor = buildHex(
        lightervalues[0],
        lightervalues[1],
        lightervalues[2]
    );
    const darkcolor = buildHex(
        darkervalues[0],
        darkervalues[1],
        darkervalues[2]
    );
    const darkercolor = buildHex(
        evendarkervalues[0],
        evendarkervalues[1],
        evendarkervalues[2]
    );
    return (
        <ColorCubeDisplay>
            <ColorCube
                hasEffects={true}
                currentColor={defaultColor}
                setCurrentColor={setCurrentColor}
                generateRandomColor={generateRandomColor}
                lightcolor={lightcolor}
                darkcolor={darkcolor}
                darkercolor={darkercolor}
            />
        </ColorCubeDisplay>
    );
};
export default ThemeSwapper;
