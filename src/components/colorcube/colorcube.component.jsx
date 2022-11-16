import styled from "styled-components";

const ColorCubeCard = styled.div`
    width: 100px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
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

const ColorCube = ({ colors, rotation }) => {
    return (
        <ColorCubeCard>
            <CubeHaus
                rotation={
                    rotation
                        ? rotation
                        : "rotateX(250deg) rotateY(0deg) rotateZ(-135deg) translate(60px, 60px)"
                }
            >
                <CubeTop colorful={colors ? colors.top : "#fff"} />
                <CubeFront colorful={colors ? colors.front : "transparent"} />
                <CubeBack colorful={colors ? colors.back : "#fefefe"} />
                <CubeRight colorful={colors ? colors.right : "#eee"} />
                <CubeLeft colorful={colors ? colors.left : "transparent"} />
                <CubeBottom colorful={colors ? colors.bottom : "transparent"} />
            </CubeHaus>
        </ColorCubeCard>
    );
};
export default ColorCube;
