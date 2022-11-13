import styled from "styled-components";
import PageSpan from "../page-span.component";
import hiring from "../images/hiring.svg";
import lockedp from "../images/lockedp.svg";
import twofactor from "../images/twofactor.svg";
import lighthouse from "../images/lighthouse.svg";

const AdditionalProjectsContainer = styled.div`
    flex: 1;
    width: 100%;
    min-height: 30vh;
    border-radius: 25px;
    display: ${({ display }) => display};
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 50px;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const AddProjectContainer = styled.div`
    /* background-color: var(--white-002);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    border-radius: 17.5px; */
    /* margin: 40px 20px 20px 0; */
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* border: 1px solid var(--fade-001); */
    flex: 1;
    width: 100%;
    border: 1px solid var(--fade-002);
    background-color: var(--white-001);
    border-radius: 25px;
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
`;
const AddProjectImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 111ms linear;
    margin-bottom: 20px;
    max-height: 150px;
    /* max-width: 150px; */
    min-height: 150px;

    @media only screen and (max-width: 600px) {
        max-height: 100px;
        /* max-width: 100px; */
        min-height: 100px;
    }
`;
const AddProjectImage = styled.img`
    max-height: 125px;
    /* max-width: 125px; */
    min-height: 125px;
    @media only screen and (max-width: 600px) {
        max-height: 80px;
        /* max-width: 80px; */
        min-height: 80px;
    }
`;
const PROJECTS = [
    { id: "1", heading: "rescume", imageUrl: hiring },
    { id: "2", heading: "core", imageUrl: lockedp },
    { id: "3", heading: "mur²", imageUrl: twofactor },
    { id: "4", heading: "beacon", imageUrl: lighthouse },
];

const AdditionalProjects = ({ additionalProjectsVisible }) => {
    return (
        <AdditionalProjectsContainer
            display={additionalProjectsVisible ? "grid" : "none"}
        >
            {PROJECTS.map((project) => {
                const { id, heading, imageUrl } = project;
                return (
                    <AddProjectContainer
                        key={id}
                        onClick={() => window.scrolltolabsection()}
                    >
                        <AddProjectImageContainer>
                            <AddProjectImage src={imageUrl} />
                        </AddProjectImageContainer>
                        <PageSpan
                            fontsize="20px"
                            margin="0 0 20px 0"
                            lineheight="20px"
                            fontweight="400"
                            fontsizeone="15px"
                            lineheightone="15px"
                            fontweightone="400"
                            maxwidthone="80%"
                            maxwidthsix="100%"
                            textalignone="center"
                            spantext={heading}
                        />
                    </AddProjectContainer>
                );
            })}
        </AdditionalProjectsContainer>
    );
};
export default AdditionalProjects;
