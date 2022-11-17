import { useState } from "react";
import styled from "styled-components";
import ColorCube from "./colorcube.component";
const ColorCardContainer = styled.div.attrs((props) => ({
    style: {
        backgroundColor: props.backgroundcolor,
        border: "1px solid " + props.bordercolor,
    },
}))`
    width: 300px;
    transition: 111ms linear;
    border-radius: 20px;
    padding: 20px 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
`;
const ClapOns = styled.div`
    display: grid;
    /* flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around; */
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`;
const ClapOn = styled.div`
    width: 100%;
    text-align: center;
    white-space: nowrap;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
`;
const ClapOnLabel = styled.span.attrs((props) => ({
    style: {
        color: props.color,
    },
}))`
    font-size: 15px;
    font-weight: 500;
    user-select: none;
    transition: 111ms linear;
`;
const ColorCubeDisplay = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ColorDetails = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;
const DetailsDuo = styled.div`
    padding: 10px;
`;
const DetailsLabel = styled.span.attrs((props) => ({
    style: {
        color: props.color,
    },
}))`
    margin-right: 5px;
    font-weight: 500;
    user-select: none;
    text-align: center;
`;
const DetailsInfo = styled.span.attrs((props) => ({
    style: {
        color: props.color,
    },
}))`
    text-align: center;
    font-weight: 300;
`;
const ShadowSlider = styled.input``;
const ColorCard = () => {
    const [currentColor, setCurrentColor] = useState("#5c2fe6");
    const [isThemeBright, setIsThemeBright] = useState(true);
    const toggleThemeBrightness = () => setIsThemeBright(!isThemeBright);
    const [hasEffects, setHasEffects] = useState(false);
    const toggleEffects = () => setHasEffects(!hasEffects);
    const [hasLabels, setHasLabels] = useState(false);
    const toggleLabels = () => setHasLabels(!hasLabels);
    const [hasDetails, setHasDetails] = useState(false);
    const toggleDetails = () => setHasDetails(!hasDetails);
    const dismantleColor = () => {
        return currentColor
            .replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
            )
            .substring(1)
            .match(/.{2}/g)
            .map((x) => parseInt(x, 16));
    };
    const colorpack = currentColor ? dismantleColor() : null;
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
    const [shadowSliderValue, setShadowSliderValue] = useState("51");
    const shadowLayersAmount =
        shadowSliderValue > 10 ? shadowSliderValue[0] : "0";
    const shadowLayers = () => {
        const shadowLayersArray = [];
        for (let index = 0; index < shadowLayersAmount; index++) {
            // if (index % 2 === 0) {
            shadowLayersArray.push(
                `0 0 ${Math.ceil(index * 3.777)}px ${
                    hasEffects
                        ? isThemeBright
                            ? `#111${
                                  9 - index - 2 > 0 ? 9 - index - 2 : 9 - index
                              }`
                            : lightcolor
                        : "transparent"
                }`
            );
            // }
        }
        return shadowLayersArray;
    };
    const shadowLayersArray = shadowLayers();
    const shadowString =
        shadowLayersArray.length > 0 ? shadowLayersArray.toString() : "none";
    return (
        <ColorCardContainer
            backgroundcolor={isThemeBright ? "#eaeaea" : "#222"}
            bordercolor={isThemeBright ? darkercolor : lightcolor}
        >
            <ColorCubeDisplay>
                <ColorCube
                    hasEffects={hasEffects}
                    isThemeBright={isThemeBright}
                    currentColor={currentColor}
                    setCurrentColor={setCurrentColor}
                    generateRandomColor={generateRandomColor}
                    lightcolor={lightcolor}
                    darkcolor={darkcolor}
                    darkercolor={darkercolor}
                    shadowString={shadowString}
                    hasLabels={hasLabels}
                />
            </ColorCubeDisplay>
            <ClapOns>
                <ClapOn
                    onClick={() => generateRandomColor()}
                    currentColor={currentColor}
                >
                    <ClapOnLabel
                        color={isThemeBright ? darkercolor : lightcolor}
                    >
                        New Color
                    </ClapOnLabel>
                </ClapOn>
                <ClapOn onClick={() => toggleEffects()}>
                    <ClapOnLabel color={isThemeBright ? "#111" : "#eee"}>
                        {hasEffects ? "Effects ON" : "Effects OFF"}
                    </ClapOnLabel>
                </ClapOn>
                <ClapOn onClick={() => toggleLabels()}>
                    <ClapOnLabel color={isThemeBright ? "#111" : "#eee"}>
                        {hasLabels ? "Labels ON" : "Labels OFF"}
                    </ClapOnLabel>
                </ClapOn>
                <ClapOn onClick={() => toggleDetails()}>
                    <ClapOnLabel color={isThemeBright ? "#111" : "#eee"}>
                        {hasDetails ? "Details ON" : "Details OFF"}
                    </ClapOnLabel>
                </ClapOn>
                {hasEffects && (
                    <ClapOn onClick={() => toggleThemeBrightness()}>
                        <ClapOnLabel color={isThemeBright ? "#111" : "#eee"}>
                            {isThemeBright ? "Use Glow" : "Use Shade"}
                        </ClapOnLabel>
                    </ClapOn>
                )}
            </ClapOns>
            {hasEffects && (
                <ShadowSlider
                    type="range"
                    value={shadowSliderValue}
                    min="0"
                    max="99"
                    step="1"
                    onInput={(e) => setShadowSliderValue(e.target.value)}
                />
            )}
            {hasDetails && (
                <ColorDetails>
                    <DetailsDuo>
                        <DetailsLabel color={isThemeBright ? "#111" : "#eee"}>
                            Light:
                        </DetailsLabel>
                        <DetailsInfo color={isThemeBright ? "#111" : "#eee"}>
                            {lightcolor}
                        </DetailsInfo>
                    </DetailsDuo>
                    <DetailsDuo>
                        <DetailsLabel color={isThemeBright ? "#111" : "#eee"}>
                            Main:
                        </DetailsLabel>
                        <DetailsInfo color={isThemeBright ? "#111" : "#eee"}>
                            {currentColor}
                        </DetailsInfo>
                    </DetailsDuo>
                    <DetailsDuo>
                        <DetailsLabel color={isThemeBright ? "#111" : "#eee"}>
                            Dark:
                        </DetailsLabel>
                        <DetailsInfo color={isThemeBright ? "#111" : "#eee"}>
                            {darkcolor}
                        </DetailsInfo>
                    </DetailsDuo>
                    {hasEffects && (
                        <>
                            <DetailsDuo>
                                <DetailsLabel
                                    color={isThemeBright ? "#111" : "#eee"}
                                >
                                    Darker:
                                </DetailsLabel>
                                <DetailsInfo
                                    color={isThemeBright ? "#111" : "#eee"}
                                >
                                    {darkercolor}
                                </DetailsInfo>
                            </DetailsDuo>

                            <DetailsDuo>
                                <DetailsLabel
                                    color={isThemeBright ? "#111" : "#eee"}
                                >
                                    {isThemeBright ? "Shadow:" : "Glow:"}
                                </DetailsLabel>
                                <DetailsInfo
                                    color={isThemeBright ? "#111" : "#eee"}
                                >
                                    {shadowString}
                                </DetailsInfo>
                            </DetailsDuo>
                        </>
                    )}
                </ColorDetails>
            )}
        </ColorCardContainer>
    );
};
export default ColorCard;

// make a shadow or glow option, whichever is chosen will change background container's color.
// glow is on dark using the color already provided
// shade is on light
