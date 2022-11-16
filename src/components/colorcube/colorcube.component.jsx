import { useState } from "react";
import styled from "styled-components";

const ColorCubeCard = styled.div`
    width: 100px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const CubeHaus = styled.div`
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: ${({ rotation }) => rotation};
`;
const CubeSide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 111ms linear;
`;
const CubeTop = styled(CubeSide)`
    transform: translateZ(-60px);
    background: ${({ colorful }) => colorful};
`;
const CubeBottom = styled(CubeSide)`
    transform: translateZ(0px);
    background: ${({ colorful }) => colorful};
`;
const CubeRight = styled(CubeSide)`
    transform: rotateX(90deg);
    transform-origin: bottom;
    background: ${({ colorful }) => colorful};
`;
const CubeLeft = styled(CubeSide)`
    transform: rotateX(90deg) translateZ(60px);
    transform-origin: bottom;
    background: ${({ colorful }) => colorful};
`;

const CubeBack = styled(CubeSide)`
    width: 60px;
    transform: translateZ(-60px) rotateY(90deg);
    transform-origin: right;
    background: ${({ colorful }) => colorful};
`;
const CubeFront = styled(CubeSide)`
    width: 60px;
    transform: translateZ(-60px) rotateY(90deg) translateZ(-60px);
    transform-origin: right;
    background: ${({ colorful }) => colorful};
`;

const ColorCube = ({ color, rotation }) => {
    const ran255 = () => {
        return Math.floor(Math.random() * 255);
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
    const [currentColor, setCurrentColor] = useState(
        color ? color : generateRandomColor()
    );
    const dismantleColor = () => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            currentColor
        );
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    };
    const colorpack = color ? dismantleColor() : null;
    const lightervalues = Object.values(colorpack).map((rgbvalues) => {
        return rgbvalues + 20 > 255 ? rgbvalues : rgbvalues + 20;
    });
    const darkervalues = Object.values(colorpack).map((rgbvalues) => {
        return rgbvalues - 20 < 0 ? rgbvalues : rgbvalues - 20;
    });
    const valueToHex = (value) => {
        var hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    const rebuildColor = (r, g, b) => {
        return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
    };
    const lightcolor = rebuildColor(
        lightervalues[0],
        lightervalues[1],
        lightervalues[2]
    );
    const darkcolor = rebuildColor(
        darkervalues[0],
        darkervalues[1],
        darkervalues[2]
    );
    return (
        <ColorCubeCard onClick={() => generateRandomColor()}>
            <CubeHaus
                rotation={
                    rotation
                        ? rotation
                        : "rotateX(250deg) rotateY(0deg) rotateZ(-135deg) translate(60px, 60px)"
                }
            >
                <CubeTop colorful={color ? lightcolor : "#fff"} />
                <CubeFront colorful={color ? "transparent" : "transparent"} />
                <CubeBack colorful={color ? currentColor : "#fefefe"} />
                <CubeRight colorful={color ? darkcolor : "#eee"} />
                <CubeLeft colorful={color ? "transparent" : "transparent"} />
                <CubeBottom colorful={color ? "transparent" : "transparent"} />
            </CubeHaus>
        </ColorCubeCard>
    );
};
export default ColorCube;

// make a shadow or glow option, whichever is chosen will change background container's color.
// glow is on dark using the color already provided
// shade is on light
