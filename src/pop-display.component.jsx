import { useContext } from "react";
import styled from "styled-components";
import { PopContext } from "./pop.context";
const PopDisplayContainer = styled.div`
    position: absolute;
    background-color: lightcyan;
`;
const PopDisplay = () => {
    const { currentPopDisplay } = useContext(PopContext);
    console.log(currentPopDisplay);
    return <PopDisplayContainer></PopDisplayContainer>;
};
export default PopDisplay;
