// import { useContext } from "react";
// import styled from "styled-components";
// import { PopContext } from "./pop.context";

// const PopContainer = styled.div`
//     margin: 0 10px;
//     user-select: none;
//     position: relative;
//     transform-style: preserve-3d;
//     perspective: 10px;
//     background-color: #aaf1;
//     outline: none;
//     border-radius: 10px;
//     min-height: 50px;
//     min-width: 50px;
//     max-height: 50px;
//     max-width: 50px;
//     box-shadow: ${({ popShadow }) => popShadow};
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 0.5px solid #ffffff55;
//     background-color: var(--main-color);
//     cursor: pointer;
//     transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
//     transform: scale(0.99) ${({ popMovement }) => popMovement};
//     &:active {
//         transform: scale(0.9) ${({ popMovement }) => popMovement};
//     }
// `;

// const PopHolographic = styled.div`
//     z-index: 3;
//     position: absolute;
//     max-height: 300px;
//     max-width: 300px;
//     min-height: 300px;
//     min-width: 300px;
//     background: linear-gradient(
//         145deg,
//         transparent 38%,
//         #fff 40%,
//         #0051 45%,
//         #0054 50%,
//         transparent 52%
//     );
//     transform: ${({ holographicMovement }) => holographicMovement};
//     pointer-events: none;
//     transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
// `;

// const PopImageContainer = styled.div`
//     z-index: 2;
//     position: static;
//     min-height: 40px;
//     min-width: 40px;
//     max-height: 40px;
//     max-width: 40px;
//     pointer-events: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     opacity: ${({ opac }) => opac};
//     transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
// `;

// const PopImage = styled.img`
//     min-height: 40px;
//     min-width: 40px;
//     max-height: 40px;
//     max-width: 40px;
//     object-fit: cover;
//     user-select: none;
//     transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
// `;

// const unmovedHolographic = "translate(-90px, -90px)";
// const movedHolographic = "translate(90px, 90px)";

// const unmovedPop = "translate( 0px , 0px )";
// const movedPop = "translate( -0px , -20px )";

// const unmovedShadow =
//     "0 1px 3px #00000044, 0 2px 5px #00000033, 0 3px 8px #00000022, 0 0px 0px #00000011, 0 0px 0px #00000011, inset 0 0px 0px #00000011, inset 0 0px 0px #00000011, inset 0 0px 0px #00000011, inset 0 0px 0px #00000011, inset 0 0px 0px #00000011";
// const movedShadow =
//     "0 1px 3px #0002, 0 2px 5px #0002, 0 3px 8px #0002, 0 5px 11px #0002, 0 8px 15px #0002, inset 0 1px 3px #0002, inset 0 2px 5px #0002, inset 0 3px 8px #0002, inset 0 5px 11px #0002, inset 0 8px 15px #0002";

// const unmovedOpacity = "0.8";
// const movedOpacity = ".9";

// const Pop = ({ pop, isSelected, isContactPop }) => {
//     const { imageUrl } = pop;
//     const {
//         currentPop,
//         setCurrentPop,
//         // setCurrentPopDisplay
//     } = useContext(PopContext);
//     const togglePop = () => {
//         if (currentPop === pop) {
//             setCurrentPop(null);
//             // setCurrentPopDisplay(null);
//             // } else if (pop.tabs.length > 0) {
//             //     setCurrentPop(pop);
//         } else {
//             setCurrentPop(pop);
//             // setCurrentPopDisplay(pop.fallbackTab.element);
//         }
//     };
//     return (
//         <PopContainer
//             onClick={() => (!isContactPop ? togglePop() : null)}
//             popMovement={isSelected ? movedPop : unmovedPop}
//             popShadow={isSelected ? movedShadow : unmovedShadow}
//         >
//             <PopHolographic
//                 holographicMovement={
//                     isSelected ? movedHolographic : unmovedHolographic
//                 }
//             />
//             <PopImageContainer
//                 opac={
//                     isContactPop
//                         ? movedOpacity
//                         : isSelected
//                         ? movedOpacity
//                         : unmovedOpacity
//                 }
//             >
//                 <PopImage src={imageUrl ? imageUrl : null} />
//             </PopImageContainer>
//         </PopContainer>
//     );
// };
// export default Pop;
