import styled from "styled-components";
import PageSpan from "../page-span.component";
const LaboratoryContainer = styled.div`
    flex: 1;
    width: 100%;
    border-radius: 25px;
    display: ${({ display }) => display};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    min-height: 80vh;
    background-color: var(--fade-004);
    margin: 20px 0 40px 0;
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002);
`;
const Laboratory = ({ laboratoryVisible }) => {
    return (
        <LaboratoryContainer display={laboratoryVisible ? "flex" : "none"}>
            <PageSpan
                fontsize="35px"
                lineheight="35px"
                fontweight="600"
                padding="30px 20px"
                fontsizeone="30px"
                lineheightone="30px"
                fontweightone="600"
                fontsizesix="25px"
                lineheightsix="25px"
                fontweightsix="600"
                textalignsix="center"
                spantext="...coming soon"
            />
        </LaboratoryContainer>
    );
};
export default Laboratory;
