import styled from "styled-components";
import { useContext } from "react";
import { PopContext } from "./pop.context";

const PopTabsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
    margin-bottom: ${({ tabContainerMovement }) => tabContainerMovement};
`;
const PopTab = styled.span`
    transition: 400ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
    margin-bottom: ${({ tabMovement }) => tabMovement};
    color: ${({ tabColor }) => tabColor};
    opacity: 0.5;
    font-size: 15px;
    line-height: 15px;
    cursor: pointer;
    user-select: none;
    &:hover {
        scale: 1.1;
        opacity: .8;
    }
    &:active {
        opacity: 1;
    }
`;

const PopTabs = ({ tabs, isSelected }) => {
    const { setCurrentPopDisplay } = useContext(PopContext);
    return (
        <PopTabsContainer tabContainerMovement={isSelected ? "30px" : "5px"}>
            {tabs &&
                tabs.map((tab) => {
                    const { id, heading, element } = tab;
                    return (
                        <PopTab
                            onClick={() => setCurrentPopDisplay(element)}
                            key={id}
                            tabMovement={isSelected ? "5px" : "0px"}
                            tabColor={isSelected ? "#fff" : "transparent"}
                        >
                            {heading}
                        </PopTab>
                    );
                })}
        </PopTabsContainer>
    );
};
export default PopTabs;
