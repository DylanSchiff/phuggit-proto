import styled from "styled-components";
const PopTabsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
    margin-bottom: ${({ tabContainerMovement }) => tabContainerMovement};
`;
const PopTab = styled.span`
    transition: 500ms cubic-bezier(0.79, 0.51, 0.43, 0.92);
    margin-bottom: ${({ tabMovement }) => tabMovement};
    color: ${({ tabColor }) => tabColor};
`;

const PopTabs = ({ tabs, isSelected }) => {
    return (
        <PopTabsContainer tabContainerMovement={isSelected ? "30px" : "5px"}>
            {tabs.map((tab) => {
                const { id, heading } = tab;
                return (
                    <PopTab
                        key={id}
                        tabMovement={isSelected ? "5px" : "0px"}
                        tabColor={isSelected ? "#ffffff55" : "transparent"}
                    >
                        {heading}
                    </PopTab>
                );
            })}
        </PopTabsContainer>
    );
};
export default PopTabs;
