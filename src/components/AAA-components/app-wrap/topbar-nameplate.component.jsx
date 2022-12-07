import styled from "styled-components";
const TopbarNameplateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TopbarNameplate = ({ currentAuth, currentData }) => {
    return (
        <TopbarNameplateContainer>
            {currentAuth && currentData.handle ? `@${currentData.handle}` : ""}
        </TopbarNameplateContainer>
    );
};
export default TopbarNameplate;
