import styled from "styled-components";
import PageSpan from "../page-span.component";
import NotesHaus from "../notes/NoteHaus.component";
import { useContext } from "react";
import { ColorContext } from "../../ap/context/color.context";
import { UserContext } from "../../ap/context/user.context";
const LaboratoryContainer = styled.div.attrs((props) => ({
    style: {
        border: "1px solid" + props.currentColor,
    },
}))`
    box-shadow: var(--shade-001);
    background-color: var(--main-002);
    transition: 111ms linear;
    flex: 1;
    width: 100%;
    min-height: 80vh;
    border-radius: 25px;
    padding-top: 50px;
    overflow: hidden;
    margin: 0 0 40px 0;
    display: ${({ display }) => display};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const DemoContainer = styled.div``;
const CloseDemoButton = styled.div``;
const Laboratory = ({ laboratoryVisible, demoProject, setChosenDemoId }) => {
    const { currentColor } = useContext(ColorContext);
    const { currentUser } = useContext(UserContext);
    return (
        <LaboratoryContainer
            currentColor={currentColor}
            display={laboratoryVisible ? "flex" : "none"}
        >
            {currentUser && demoProject && (
                <DemoContainer>
                    <CloseDemoButton onClick={() => setChosenDemoId(null)}>
                        x {demoProject}
                    </CloseDemoButton>
                </DemoContainer>
            )}
            {currentUser ? (
                <NotesHaus />
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
                    spantext="Please sign in before using the lab."
                />
            )}
        </LaboratoryContainer>
    );
};
export default Laboratory;