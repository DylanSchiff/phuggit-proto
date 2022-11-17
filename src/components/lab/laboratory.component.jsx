import styled from "styled-components";
import PageSpan from "../page-span.component";
const LaboratoryContainer = styled.div`
    flex: 1;
    width: 100%;
    min-height: 80vh;
    border-radius: 25px;
    padding: 10px 20px;
    margin: 0 0 40px 0;
    display: ${({ display }) => display};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--fade-002);
    background-color: var(--main-color);
    box-shadow: var(--med-shadow);
`;
const Laboratory = ({ laboratoryVisible, demoProject }) => {
    return (
        <LaboratoryContainer display={laboratoryVisible ? "flex" : "none"}>
            {demoProject ? (
                demoProject
            ) : (
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
            )}
        </LaboratoryContainer>
    );
};
export default Laboratory;
