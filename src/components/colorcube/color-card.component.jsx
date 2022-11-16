import { useState } from "react";
import styled from "styled-components";
import ColorCube from "./colorcube.component";
const ColorCardContainer = styled.div`
    height: 300px;
    width: 300px;
    background-color: #fff;
`;
const ColorCard = () => {
    const [currentColor, setCurrentColor] = useState("#555");

    const ran255 = () => {
        return Math.floor(Math.random() * 255);
    };
    const valueToHex = (value) => {
        var hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    const rebuildColor = (r, g, b) => {
        return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
    };
    const generateRandomColor = () => {
        const randomColor = { r: ran255(), g: ran255(), b: ran255() };
        const randomColorHex = rebuildColor(
            randomColor.r,
            randomColor.g,
            randomColor.b
        );
        return setCurrentColor(randomColorHex);
    };

    return (
        <ColorCardContainer onClick={() => generateRandomColor()}>
            <ColorCube
                currentColor={currentColor}
                rebuildColor={rebuildColor}
            />
        </ColorCardContainer>
    );
};
export default ColorCard;


// make a shadow or glow option, whichever is chosen will change background container's color.
// glow is on dark using the color already provided
// shade is on light
