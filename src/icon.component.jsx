import { useContext } from "react";
import styled from "styled-components";
import { DisplayContext } from "./icon.context";

const IconContainer = styled.div`
    margin: 0 10px;
    user-select: none;
    position: relative;
    transform-style: preserve-3d;
    perspective: 10px;
    background-color: #e9f1f611;
    border: none;
    outline: none;
    border-radius: 10px;
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    box-shadow: 0 1px 3px #00000033, 0 2px 5px #00000022, 0 3px 8px #00000011;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #ffffff55;
    cursor: pointer;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
    transform: scale(0.99) ${({ isIconMoved }) => isIconMoved};
    /* @media only screen and (max-width: 950px) {
        top: 10px;
        left: 20px;
    } */
`;

const IconHolographic = styled.div`
    position: absolute;
    max-height: 300px;
    max-width: 300px;
    min-height: 300px;
    min-width: 300px;
    background: linear-gradient(
        145deg,
        transparent 39%,
        #ffffff55 40%,
        #ffffff55 50%,
        transparent 51%
    );
    transform: ${({ motionHolographic }) => motionHolographic};
    pointer-events: none;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
`;

const IconPanel = styled.div`
    position: static;
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    pointer-events: none;
`;

const IconImage = styled.img`
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    object-fit: cover;
`;

const Icon = ({ icon, hoverState }) => {
    const unmovedHolographic = "translate(-90px, -90px)";
    const movedHolographic = "translate(90px, 90px)";
    const unmovedIcon = "translate( 0px , 0px )";
    const movedIcon = "translate( -0px , -20px )";
    const { setCurrentDisplay } = useContext(DisplayContext);
    const toggleMovement = () => setCurrentDisplay(icon.id);
    return (
        <IconContainer
            onClick={() => toggleMovement()}
            isIconMoved={hoverState ? movedIcon : unmovedIcon}
        >
            <IconHolographic
                motionHolographic={
                    hoverState ? movedHolographic : unmovedHolographic
                }
            />
            <IconPanel>
                <IconImage />
            </IconPanel>
        </IconContainer>
    );
};
export default Icon;
