import { useContext } from "react";
import styled from "styled-components";
import { PopContext } from "./pop.context";

const PopContainer = styled.div`
    margin: 0 10px;
    user-select: none;
    position: relative;
    transform-style: preserve-3d;
    perspective: 10px;
    background-color: #e9f1f605;
    border: none;
    outline: none;
    border-radius: 10px;
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    box-shadow: 0 1px 3px #00000033, 0 2px 5px #00000033, 0 3px 8px #00000022;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #ffffff55;
    cursor: pointer;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
    transform: scale(0.99) ${({ popMovement }) => popMovement};
    &:active {
        transform: scale(0.9) ${({ popMovement }) => popMovement};
    }
`;

const PopHolographic = styled.div`
    position: absolute;
    max-height: 300px;
    max-width: 300px;
    min-height: 300px;
    min-width: 300px;
    background: linear-gradient(
        145deg,
        transparent 38%,
        #ffffff33 40%,
        #add8e633 45%,
        #ffffff33 50%,
        transparent 52%
    );
    transform: ${({ holographicMovement }) => holographicMovement};
    pointer-events: none;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
`;

const PopImageContainer = styled.div`
    position: static;
    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */
    /* background-color: lightblue; */
    opacity: ${({ opac }) => opac};
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
`;

const PopImage = styled.img`
    /* min-height: 30px;
    min-width: 30px;
    max-height: 30px;
    max-width: 30px; */
    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;
    object-fit: cover;
    user-select: none;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
`;

const unmovedHolographic = "translate(-90px, -90px)";
const movedHolographic = "translate(90px, 90px)";

const unmovedPop = "translate( 0px , 0px )";
const movedPop = "translate( -0px , -20px )";

const unmovedShadow =
    "box-shadow: 0 1px 3px #00000033, 0 2px 5px #00000033, 0 3px 8px #00000022";
const movedShadow =
    "box-shadow: 0 1px 3px #00000033, 0 2px 5px #00000033, 0 3px 8px #00000022, box-shadow: 0 5px 11px #00000033, 0 8px 15px #00000033";

const Pop = ({ pop, isSelected }) => {
    const { id, imageUrl } = pop;
    const { setCurrentPopId } = useContext(PopContext);
    const toggleMovement = () => setCurrentPopId(id);
    return (
        <PopContainer
            onClick={() => toggleMovement()}
            popMovement={isSelected ? movedPop : unmovedPop}
            popShadow={isSelected ? movedShadow : unmovedShadow}
        >
            <PopHolographic
                holographicMovement={
                    isSelected ? movedHolographic : unmovedHolographic
                }
            />
            <PopImageContainer opac={isSelected ? ".6" : ".2"}>
                <PopImage src={imageUrl ? imageUrl : null} />
            </PopImageContainer>
        </PopContainer>
    );
};
export default Pop;
