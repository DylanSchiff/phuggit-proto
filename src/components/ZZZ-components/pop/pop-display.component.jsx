import { useContext } from "react";
import styled from "styled-components";
import { PopContext } from "./pop.context";
const PopDisplayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ displaycolor }) => displaycolor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    color: #fff;
`;
const PopDisplay = () => {
    const { currentPopDisplay } = useContext(PopContext);
    return (
        <PopDisplayContainer
        // displaycolor={currentPopDisplay ? "#eef3" : "transparent"}
        >
            {currentPopDisplay}
        </PopDisplayContainer>
    );
};
export default PopDisplay;
