import styled from "styled-components";
const ColorCubeCard = styled.div`
    width: 100px;
    height: 90px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const CubeHaus = styled.div.attrs((props) => ({
    style: {
        transform: props.rotation,
        boxShadow: `0 0 3px ${props.colorful}, 0 0 5px ${props.colorful}, 0 0 8px ${props.colorful}, 0 0 11px ${props.colorful}, 0 0 15px ${props.colorful}`,
    },
}))`
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transition: 111ms linear;
`;
const CubeSide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 111ms linear;
    user-select: none;
`;
const CubeTop = styled(CubeSide).attrs((props) => ({
    style: {
        backgroundColor: props.colorful,
    },
}))`
    transform: translateZ(-60px);
`;
const CubeBottom = styled(CubeSide)`
    transform: translateZ(0px);
    background: ${({ colorful }) => colorful};
`;
const CubeRight = styled(CubeSide).attrs((props) => ({
    style: {
        backgroundColor: props.colorful,
    },
}))`
    transform: rotateX(90deg);
    transform-origin: bottom;
`;
const CubeLeft = styled(CubeSide).attrs((props) => ({
    style: {
        backgroundColor: props.colorful,
    },
}))`
    transform: rotateX(90deg) translateZ(60px);
    transform-origin: bottom;
`;
const CubeBack = styled(CubeSide).attrs((props) => ({
    style: {
        backgroundColor: props.colorful,
    },
}))`
    width: 60px;
    transform: translateZ(-60px) rotateY(90deg);
    transform-origin: right;
`;
const CubeFront = styled(CubeSide).attrs((props) => ({
    style: {
        backgroundColor: props.colorful,
    },
}))`
    width: 60px;
    transform: translateZ(-60px) rotateY(90deg) translateZ(-60px);
    transform-origin: right;
`;

const ColorCube = ({
    rotation,
    isThemeBright,
    hasEffects,
    currentColor,
    generateRandomColor,
    lightcolor,
    darkcolor,
    darkercolor,
}) => {
    return (
        <ColorCubeCard onClick={() => generateRandomColor()}>
            <CubeHaus
                colorful={
                    hasEffects
                        ? isThemeBright
                            ? "#1115"
                            : lightcolor
                        : "transparent"
                }
                rotation={
                    rotation
                        ? rotation
                        : "rotateX(250deg) rotateY(0deg) rotateZ(-135deg) translate(60px, 60px)"
                }
            >
                <CubeTop colorful={currentColor ? lightcolor : "#fff"} />
                <CubeFront
                    colorful={currentColor ? darkercolor : "transparent"}
                />
                <CubeBack colorful={currentColor ? currentColor : "#fefefe"} />
                <CubeRight
                    colorful={hasEffects ? "transparent" : darkcolor}
                />
                <CubeLeft
                    colorful={currentColor ? currentColor : "transparent"}
                />
                <CubeBottom
                    colorful={currentColor ? darkcolor : "transparent"}
                />
            </CubeHaus>
        </ColorCubeCard>
    );
};
export default ColorCube;
