import { useContext } from "react";
import { ColorContext } from "../../../AAA/context/AAA-context/color.context";
import styled from "styled-components";
import ColorCube from "./theme-cube.component";
const ColorCubeDisplay = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${({ cubeSize }) => cubeSize};
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
    overflow: hidden;
`;
const CubeClickSpan = styled.span.attrs((props) => ({
    style: {
        color: props.color,
    },
}))`
    flex: 1;
    width: 100%;
    margin: 0 15px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: var(--thir-003);
    }
`;
const ThemeSwapper = ({ isSmall, isClickable }) => {
    const { currentColor, setCurrentColor, currentEffects, hasEffects } =
        useContext(ColorContext);
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
        return currentColor && setCurrentColor(randomColorHex);
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
        currentColor && (
            <ColorCubeDisplay
            // cubeSize={isSmall ? "scale(0.5)" : ""}
            >
                {isSmall && (
                    <CubeClickSpan
                        color={currentColor}
                        onClick={() => generateRandomColor()}
                    >
                        Recolor
                    </CubeClickSpan>
                )}
                {!isSmall && (
                    <ColorCube
                        shadowString={currentEffects}
                        hasEffects={hasEffects}
                        currentColor={defaultColor}
                        setCurrentColor={isClickable ? setCurrentColor : null}
                        generateRandomColor={
                            isClickable ? generateRandomColor : null
                        }
                        lightcolor={lightcolor}
                        darkcolor={darkcolor}
                        darkercolor={darkercolor}
                    />
                )}
            </ColorCubeDisplay>
        )
    );
};
export default ThemeSwapper;
