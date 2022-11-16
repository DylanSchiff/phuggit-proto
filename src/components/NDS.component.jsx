import { useState } from "react";
import styled from "styled-components";

const DotBox = styled.div`
    top: ${({ topspacing }) => topspacing};
    left: ${({ leftspacing }) => leftspacing};
    position: absolute;
    z-index: 999;
    background-color: #0001;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const NavigationDot = styled.div`
    min-height: 50px;
    max-height: 50px;
    min-width: 50px;
    max-width: 50px;
    border-radius: 50%;
    transition: 111ms linear;
    background-color: #aaf;
    box-shadow: 0 1px 3px #0003, 0 2px 5px #0002, 0 4px 8px #0001;
    cursor: pointer;
    transform: ${({ dotscale }) => dotscale};
`;
const Dot = () => {
    const [isDotOpen, setIsDotOpen] = useState(false);
    const toggleIsDotOpen = () => setIsDotOpen(!isDotOpen);
    return (
        <DotBox topspacing={"20px"} leftspacing={"20px"}>
            <NavigationDot
                onClick={() => toggleIsDotOpen()}
                dotscale={isDotOpen ? "scale(.9)" : "scale(1)"}
            />
        </DotBox>
    );
};
export default Dot;
// On click, it needs to show compression animation and reveal options bar
// On spin, options change. For as many options layout there are, there should be a spin. Each spin, 90deg
// A few options are display perm, such as account, settings, etc. Others will be pages, and their cats?
// needs a hover state to show interaction, I'm thinking subtle or... contained energy.... swelling rather
