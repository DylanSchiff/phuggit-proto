import { useRef, useState } from "react";
import styled from "styled-components";
import four from "../images/four.svg";
import PageSpan from "../page-span.component";
const AllAdditionalProjects = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;
const AdditionalProjectsContainer = styled.div`
    flex: 1;
    width: 100%;
    min-height: 30vh;
    border-radius: 25px;
    display: ${({ display }) => display};
    align-items: center;
    justify-content: center;
`;
const AddProjectContainer = styled.div`
    background-color: var(--white-002);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    border-radius: 17.5px;
    margin: 20px 20px 50px 0;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid var(--fade-001);
`;
const AddProjectImageContainer = styled.div`
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    border-radius: 12.5px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 111ms linear;
    margin-bottom: 20px;
    background-color: var(--white-002);
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002);
    border: 1px solid var(--fade-001);
    @media only screen and (max-width: 600px) {
        max-height: 100px;
        max-width: 100px;
        min-height: 100px;
        min-width: 100px;
    }
`;
const AddProjectImage = styled.img`
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    @media only screen and (max-width: 600px) {
        max-height: 100px;
        max-width: 100px;
        min-height: 100px;
        min-width: 100px;
    }
`;

const LabContainer = styled.div`
    border-radius: 25px;
    display: ${({ display }) => display};
    flex: 1;
    width: 100%;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    background-color: var(--main-001);
    margin: 20px 0;
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002);
`;
const NoProjectsImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
`;
const NoProjectsImage = styled.img`
    height: 100%;
    width: 100%;
    user-select: none;
    object-fit: contain;
`;
const LabButtons = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
const LabButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    padding: 15px 20px;
    margin: 0 10px;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid var(--fade-001);
    &:first-of-type {
        color: var(--main-002);
        background-color: var(--white-002);
    }
    &:last-of-type {
        color: var(--white-002);
        background-color: var(--main-003);
    }
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
        color: var(--white-001);
        background-color: var(--accent-003);
    }
`;

const PROJECTS = [
    { id: "1", heading: "rescume", imageUrl: four },
    { id: "2", heading: "core", imageUrl: four },
    { id: "3", heading: "mur²", imageUrl: four },
    { id: "4", heading: "beacon", imageUrl: four },
];

const AdditionalProjects = () => {
    const [additionalProjectsVisible, setAdditionalProjectsVisible] =
        useState(false);
    const toggleAdditionalProjectsVisible = () =>
        setAdditionalProjectsVisible(!additionalProjectsVisible);

    const [laboratoryProjectsVisible, setLaboratoryVisible] = useState(false);
    const toggleLaboratoryVisible = () =>
        setLaboratoryVisible(!laboratoryProjectsVisible);

    const additionalprojectssection = useRef(null);
    window.scrolltoadditionalprojectssection = () => {
        setAdditionalProjectsVisible(true);
        window.scrollTo({
            top: additionalprojectssection.current.offsetTop - 30,
            behavior: "smooth",
        });
    };
    window.scrolltolabsection = () => {
        setLaboratoryVisible(true);
        window.scrollTo({
            top: additionalprojectssection.current.offsetTop - 30,
            behavior: "smooth",
        });
    };
    return (
        <AllAdditionalProjects ref={additionalprojectssection}>
            <AdditionalProjectsContainer
                display={additionalProjectsVisible ? "flex" : "none"}
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
            <LabButtons>
                <LabButton onClick={() => toggleAdditionalProjectsVisible()}>
                    {additionalProjectsVisible
                        ? "Close Projects"
                        : "All Projects"}
                </LabButton>
                <LabButton onClick={() => toggleLaboratoryVisible()}>
                    Laboratory
                </LabButton>
            </LabButtons>

            <LabContainer display={laboratoryProjectsVisible ? "flex" : "none"}>
                <NoProjectsImageContainer>
                    <NoProjectsImage src={four} />
                </NoProjectsImageContainer>
            </LabContainer>
        </AllAdditionalProjects>
    );
};
export default AdditionalProjects;
