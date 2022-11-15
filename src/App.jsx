import styled from "styled-components";
import TOOLS from "./components/TOOLDATA";
import { useRef, useState } from "react";
import PageSpan from "./components/page-span.component";
import CARDS from "./components/CARDS";
import Splash from "./components/splash/splash.component";
import Cards from "./components/cards/cards.component";
import AdditionalProjects from "./components/additional-projects/additional-projects.component";
import ANotification from "./components/app-notification/app-notification";
import Navibar from "./components/navibar/navibar.component";
import Toolkit from "./components/toolkit/toolkit.component";
import ContactBox from "./components/contact-box/contact-box.component";

import past from "./components/images/past.svg";
import present from "./components/images/present.svg";
import future from "./components/images/future.svg";
import Laboratory from "./components/lab/laboratory.component";
// import Lab from "./components/lab/lab.component";

const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    overflow: hidden;
    overflow-y: auto;
    /* background-color: var(--accent-002); */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    @media only screen and (min-width: 1000px) {
        align-items: center;
    }
`;

const AppBodySection = styled.div`
    flex: 1;
    width: 100%;
    padding: 50px;
    transition: 111ms linear;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 600px) {
        padding: 25px;
    }
`;

const BackToTopButton = styled.div`
    z-index: 900;
    position: fixed;
    bottom: 10px;
    right: 10px;
    min-height: 30px;
    min-width: 30px;
    max-height: 30px;
    max-width: 30px;
    border-radius: 7.5px;
    font-size: 10px;
    color: var(--white-001);
    font-weight: 600;
    user-select: none;
    transition: 111ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: var(--main-003);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002); */

    &:active {
        transform: scale(0.95);
    }
`;

// /////////////////////////////////////
// /////////////////////////////////////

const GistsContainer = styled.div`
    flex: 1;
    width: 100%;
    max-width: 1500px;
    margin: 0 50px 50px 50px;
    padding: 20px 60px;
    border-radius: 35px;
    transition: 111ms linear;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    /* background-color: var(--white-002);
    border: 1px solid var(--fade-002);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    background: linear-gradient(
        0deg,
        var(--white-001) 0%,
        var(--white-002) 100%
    ); */
`;

const Gists = styled.div`
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const Gist = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const GistImageContainer = styled.div`
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    margin: 40px 0;
    border-radius: 20px;
    transition: 111ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        max-height: 100px;
        max-width: 100px;
        min-height: 100px;
        min-width: 100px;
    }
`;
const GistImage = styled.img`
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
const GistButton = styled.div`
    border-radius: 10px;
    outline: none;
    border: none;
    transition: 111ms linear;
    cursor: pointer;
    user-select: none;
    /* color: var(--accent-003); */
    &:hover {
        /* color: var(--accent-002); */
    }
`;

const LabButtons = styled.div`
    margin: 40px 20px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
const LabButton = styled.div`
    padding: 15px 20px;
    margin: 10px;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    user-select: none;
    transition: 111ms linear;
    cursor: pointer;
    /* border: 1px solid var(--fade-001); */
    &:first-of-type {
        /* color: var(--main-002);
        background-color: var(--white-002); */
    }
    &:last-of-type {
        /* color: var(--white-002);
        background-color: var(--main-003); */
    }
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        /* box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
        color: var(--white-001);
        background-color: var(--accent-003); */
    }
`;

const GISTS = [
    {
        id: "future-gist",
        heading: "Upcoming",
        scrollto: () => window.scrolltocontactsection(),
        gisttext:
            "New projects are in the oven, and the laboratory needs some love. During the next cycle, those are first.",
        imageUrl: future,
    },
    {
        id: "present-gist",
        heading: "Latest",
        scrollto: () => window.scrolltoappbodysection(),
        gisttext:
            "We're in the midst of a heavy development phase! As the showcase expansion unfolds, more optimization layers are being added in order to provide a better user experience.",
        imageUrl: present,
    },
    {
        id: "past-gist",
        heading: "Recent",
        scrollto: () => window.scrolltoadditionalprojectssection(),
        gisttext:
            "A draft frame has been created during recent updates, and many projects have been prepared to ship.",
        imageUrl: past,
    },
];

const App = () => {
    const headsection = useRef(null);
    window.scrolltoheadsection = () =>
        window.scrollTo({
            top: headsection.current.offsetTop - 50,
            behavior: "smooth",
        });

    const appbodysection = useRef(null);
    window.scrolltoappbodysection = () =>
        window.scrollTo({
            top: appbodysection.current.offsetTop - 20,
            behavior: "smooth",
        });

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

    const [additionalProjectsVisible, setAdditionalProjectsVisible] =
        useState(false);
    const toggleAdditionalProjectsVisible = () =>
        setAdditionalProjectsVisible(!additionalProjectsVisible);

    const [laboratoryVisible, setLaboratoryVisible] = useState(false);
    const toggleLaboratoryVisible = () =>
        setLaboratoryVisible(!laboratoryVisible);

    return (
        <>
            <Navibar />
            <PageContainer ref={headsection}>
                <ANotification />
                <Splash />
                <AppBodySection ref={appbodysection}>
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
                        spantext="Officia tempore ratione vel tempora blanditiis placeat."
                        // spantext="Experiment with new tools from the 99E creative suite."
                    />
                    <Cards cards={CARDS} />
                    <AdditionalProjects
                        additionalProjectsVisible={additionalProjectsVisible}
                    />
                    <LabButtons ref={additionalprojectssection}>
                        <LabButton
                            onClick={() => toggleAdditionalProjectsVisible()}
                        >
                            {additionalProjectsVisible
                                ? "Less Projects"
                                : "See Projects"}
                        </LabButton>
                        <LabButton onClick={() => toggleLaboratoryVisible()}>
                            {laboratoryVisible ? "Close Lab" : "Laboratory"}
                        </LabButton>
                    </LabButtons>
                    {/* <Lab laboratoryVisible={laboratoryVisible} /> */}
                    <Laboratory laboratoryVisible={laboratoryVisible} />
                    <Toolkit tools={TOOLS} />
                    <GistsContainer>
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
                            spantext="Snapshot"
                        />
                        <Gists>
                            {GISTS.map((gist) => {
                                const {
                                    id,
                                    heading,
                                    gisttext,
                                    imageUrl,
                                    scrollto,
                                } = gist;
                                return (
                                    <Gist key={id}>
                                        <GistImageContainer>
                                            <GistImage src={imageUrl} />
                                        </GistImageContainer>
                                        <PageSpan
                                            fontsize="25px"
                                            fontweight="500"
                                            fontsizesix="20px"
                                            fontsizestwo="15px"
                                            spantext={heading}
                                        />
                                        <PageSpan
                                            margin="20px"
                                            textalign="center"
                                            lineheight="25px"
                                            fontsize="17.5px"
                                            fontsizesix="15px"
                                            fontsizestwo="10px"
                                            spantext={gisttext}
                                        />
                                        <GistButton onClick={scrollto}>
                                            learn more
                                        </GistButton>
                                    </Gist>
                                );
                            })}
                        </Gists>
                    </GistsContainer>
                    <ContactBox />
                </AppBodySection>
                <BackToTopButton onClick={() => window.scrolltoheadsection()}>
                    TOP
                </BackToTopButton>
            </PageContainer>
        </>
    );
};
export default App;
