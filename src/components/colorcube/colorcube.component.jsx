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
    user-select: none;
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

const ColorCube = ({ currentColor, rotation, rebuildColor }) => {
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
        <ColorCubeCard>
            <CubeHaus
                rotation={
                    rotation
                        ? rotation
                        : "rotateX(250deg) rotateY(0deg) rotateZ(-135deg) translate(60px, 60px)"
                }
            >
                <CubeTop colorful={currentColor ? lightcolor : "#fff"} />
                <CubeFront
                    colorful={currentColor ? currentColor : "transparent"}
                />
                <CubeBack colorful={currentColor ? currentColor : "#fefefe"} />
                <CubeRight colorful={currentColor ? darkcolor : "#eee"} />
                <CubeLeft
                    colorful={currentColor ? currentColor : "transparent"}
                />
                <CubeBottom
                    colorful={currentColor ? currentColor : "transparent"}
                />
            </CubeHaus>
        </ColorCubeCard>
    );
};
export default ColorCube;

