// import styled from "styled-components";
// const ColorCubeCard = styled.div`
//     width: 100px;
//     height: 90px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transform: scale(0.7);
//     overflow: hidden;
// `;
// const CubeHaus = styled.div.attrs((props) => ({
//     style: {
//         transform: props.rotation,
//         boxShadow: props.shadowString,
//     },
// }))`
//     width: 60px;
//     height: 60px;
//     top: 50%;
//     left: 50%;
//     transform-style: preserve-3d;
//     transition: 111ms linear;
// `;
// const CubeSide = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transition: 111ms linear;
//     user-select: none;
// `;
// const CubeTop = styled(CubeSide).attrs((props) => ({
//     style: {
//         background: props.colorful,
//     },
// }))`
//     transform: translateZ(-60px);
// `;
// const CubeBottom = styled(CubeSide)`
//     transform: translateZ(0px);
//     background: ${({ colorful }) => colorful};
// `;
// const CubeRight = styled(CubeSide).attrs((props) => ({
//     style: {
//         background: props.colorful,
//     },
// }))`
//     transform: rotateX(90deg);
//     transform-origin: bottom;
// `;
// const CubeLeft = styled(CubeSide).attrs((props) => ({
//     style: {
//         background: props.colorful,
//     },
// }))`
//     transform: rotateX(90deg) translateZ(60px);
//     transform-origin: bottom;
// `;
// const CubeBack = styled(CubeSide).attrs((props) => ({
//     style: {
//         background: props.colorful,
//     },
// }))`
//     width: 60px;
//     transform: translateZ(-60px) rotateY(90deg);
//     transform-origin: right;
// `;
// const CubeFront = styled(CubeSide).attrs((props) => ({
//     style: {
//         background: props.colorful,
//     },
// }))`
//     width: 60px;
//     transform: translateZ(-60px) rotateY(90deg) translateZ(-60px);
//     transform-origin: right;
// `;
// const CubeText = styled.div.attrs((props) => ({
//     style: {
//         transform: props.transform,
//     },
// }))`
//     rotate: 90deg;
//     font-weight: 600;
//     font-size: 10px;
//     user-select: none;
//     color: #0005;
// `;
// const ColorCube = ({
//     rotation,
//     // isThemeBright,
//     hasEffects,
//     currentColor,
//     generateRandomColor,
//     lightcolor,
//     darkcolor,
//     darkercolor,
//     shadowString,
//     hasLabels,
// }) => {
//     return (
//         <ColorCubeCard onClick={() => generateRandomColor()}>
//             <CubeHaus
//                 shadowString={hasEffects ? shadowString : "none"}
//                 rotation={
//                     rotation
//                         ? rotation
//                         : "rotateX(250deg) rotateY(0deg) rotateZ(-135deg) translate(60px, 60px)"
//                 }
//             >
//                 <CubeTop colorful={lightcolor}>
//                     <CubeText transform="rotate(180deg) translateX(-15px)">
//                         {hasLabels ? lightcolor : null}
//                     </CubeText>
//                 </CubeTop>
//                 <CubeFront colorful={darkercolor}>
//                     <CubeText transform="translateX(30px)">
//                         {hasLabels ? darkercolor : null}
//                     </CubeText>
//                 </CubeFront>
//                 <CubeBack colorful={currentColor}>
//                     <CubeText transform="translateX(30px)">
//                         {hasLabels ? currentColor : null}
//                     </CubeText>
//                 </CubeBack>
//                 <CubeRight colorful={hasEffects ? "transparent" : darkcolor}>
//                     {!hasEffects && (
//                         <CubeText transform="rotate(90deg) rotateX(180deg) translate(10px,25px)">
//                             {hasLabels ? darkcolor : null}
//                         </CubeText>
//                     )}
//                 </CubeRight>
//                 <CubeLeft colorful={currentColor} />
//                 <CubeBottom colorful={darkcolor}>
//                     <CubeText transform="translate(30px, 5px)">
//                         {hasLabels ? darkcolor : null}
//                     </CubeText>
//                 </CubeBottom>
//             </CubeHaus>
//         </ColorCubeCard>
//     );
// };
// export default ColorCube;

// // <CubeFront
// // colorful={currentColor ? darkercolor : "transparent"}
// // />
