import { useRef, useState } from "react";
import styled from "styled-components";
import four from "../images/four.svg";
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
    border-radius: 25px;
    display: ${({ display }) => display};
    flex: 1;
    width: 100%;
    min-height: 50vh;
    align-items: center;
    justify-content: center;
    background-color: var(--fade-001);
    margin-bottom: 20px;
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002);
`;
const NoProjectsImageContainer = styled.div`
    height: 200px;
    width: 200px;
`;
const NoProjectsImage = styled.img`
    height: 200px;
    width: 200px;
    user-select: none;
`;
const AdditionalProjectsButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    padding: 15px 20px;
    background-color: var(--accent-004);
    color: var(--white-002);
    font-size: 20px;
    font-weight: 500;
    border: 1px solid var(--fade-001);
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

const AdditionalProjects = () => {
    const [additionalProjectsVisible, setAdditionalProjectsVisible] = useState(false);
    const toggleAdditionalProjectsVisible = () => setAdditionalProjectsVisible(!additionalProjectsVisible);


    const additionalprojectssection = useRef(null);
    window.scrolltoadditionalprojectssection = () => {
        setAdditionalProjectsVisible(true);
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
                <NoProjectsImageContainer>
                    <NoProjectsImage src={four} />
                </NoProjectsImageContainer>
            </AdditionalProjectsContainer>
            <AdditionalProjectsButton
                onClick={() => toggleAdditionalProjectsVisible()}
            >
                Lab Projects
            </AdditionalProjectsButton>
        </AllAdditionalProjects>
    );
};
export default AdditionalProjects;
