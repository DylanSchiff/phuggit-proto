import styled from "styled-components";
// import PopBackground from "./components/pop/pop-background.component";
// import PopDisplay from "./components/pop/pop-display.component";
import PopTray from "./components/pop/pop-tray.component";
import splashimage from "./components/images/light.svg";
import ship from "./components/images/ship.svg";

import { useContext, useRef, useState } from "react";
// import Pop from "./components/pop/pop.component";
import { PopContext } from "./components/pop/pop.context";
// import { POPS } from "./components/pop/POPDATA";
import PageSpan from "./components/page-span.component";
import CARDS from "./CARDS";

const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    background-color: var(--white-002);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    overflow: hidden;
    overflow-y: auto;
    @media only screen and (min-width: 1000px) {
        align-items: center;
    }
`;

const AppNavbar = styled.div`
    width: 100vw;
    position: sticky;
    top: 0;
    min-height: 50px;
    max-height: 50px;
    background-color: var(--main-002);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 20px;
    @media only screen and (max-width: 100px) {
        padding: 0;
    }
`;
const NavLogoContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;
const NavLogoImageContainer = styled.div`
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavLogoImage = styled.img`
    min-height: 30px;
    max-height: 30px;
    min-width: 30px;
    max-width: 30px;
    object-fit: cover;
    cursor: pointer;
`;
const NavLogoHeadingContainer = styled.div`
    padding: 0 10px;
    @media only screen and (max-width: 300px) {
        display: none;
    }
`;
const NavButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    color: var(--accent-001);
    font-size: 15px;
    font-weight: 500;
    border: 1px solid transparent;
    margin: 5px;
    user-select: none;
    &:hover {
        border: 1px solid var(--accent-001);
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppNotificationBanner = styled.div`
    width: 100%;
    background-color: var(--accent-002);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
`;
const AppNotification = styled.span`
    color: var(--accent-004);
`;
const AppNotificationLink = styled.a`
    margin-left: 5px;
    cursor: pointer;
    font-weight: 500;
    color: var(--accent-004);
    user-select: none;
    &:hover {
        text-decoration: underline;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppSplash = styled.section`
    max-width: 1500px;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    padding: 50px 60px;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        flex-flow: column nowrap;
        align-items: center;
    }
    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;
const SplashDetails = styled.div`
    flex: 3;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column nowrap;
    transition: 111ms linear;
    @media only screen and (max-width: 600px) {
        flex: 1;
    }
    @media only screen and (max-width: 300px) {
        max-width: 150px;
    }
    @media only screen and (max-width: 200px) {
        max-width: 100px;
    }
`;
const SplashHeadingContainer = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const SplashSummaryContainer = styled.div`
    flex: 1;
    padding: 20px 0;
    @media only screen and (max-width: 600px) {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
    @media only screen and (max-width: 450px) {
        justify-content: center;
        flex-flow: column nowrap;
    }
`;

const SplashButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
`;

const FirstSplashButton = styled(SplashButton)`
    padding: 15px 20px;
    background-color: var(--accent-001);
    font-size: 25px;
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
    }
`;
const SecondSplashButton = styled(SplashButton)`
    margin-left: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    @media only screen and (max-width: 450px) {
        margin-left: 0px;
        margin-top: 20px;
    }
    &:hover {
        color: var(--accent-003);
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashImageContainer = styled.div`
    flex: 4;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    @media only screen and (max-width: 1000px) {
        padding-top: 10px;
        width: 80%;
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const SplashImage = styled.img`
    user-select: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1000px) {
        margin-top: 50px;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppCardsContainer = styled.div`
    /* background-color: var(--white-001); */
    flex: 1;
    width: 100%;
    padding: 50px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    transition: 111ms linear;
    @media only screen and (max-width: 600px) {
        padding: 25px;
    }
`;
const AllCards = styled.div`
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;
    justify-items: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 0px;
        border-radius: 25px;
        overflow: hidden;
        border: 1px solid var(--fade-002);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
    }
`;
const Card = styled.div`
    border: 1px solid var(--fade-002);
    flex: 1;
    width: 100%;
    background-color: var(--white-004);
    border-radius: 25px;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    transition: 111ms linear;
    &:hover {
        background-color: var(--accent-001);
    }
    @media only screen and (max-width: 1000px) {
        border-radius: 0px;
        border: none;
        box-shadow: none;
        &:first-of-type {
            border-bottom: 1px solid var(--fade-002);
        }
        &:last-of-type {
            border-top: 1px solid var(--fade-002);
        }
        &:hover {
            background-color: var(--white-004);
        }
    }
`;
const CardImageContainer = styled.div`
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    @media only screen and (max-width: 600px) {
        max-height: 100px;
        max-width: 100px;
        min-height: 100px;
        min-width: 100px;
    }
`;
const CardImage = styled.img`
    max-height: 151px;
    max-width: 151px;
    min-height: 151px;
    min-width: 151px;
    @media only screen and (max-width: 600px) {
        max-height: 101px;
        max-width: 101px;
        min-height: 101px;
        min-width: 101px;
    }
`;
const CardHeadingContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const CardTagsButtonFlipper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1000px) {
        flex-flow: column-reverse nowrap;
    }
`;
const CardButtonContainer = styled.div``;
const CardButton = styled.div`
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    color: var(--white-001);
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    border: 1px solid var(--fade-002);
    background-color: var(--white-001);
    padding: 10px 20px;
    color: var(--accent-004);
    &:hover {
        color: var(--accent-001);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
    }
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        border: 1px solid var(--fade-002);
        background-color: var(--white-001);
        padding: 10px 20px;
        color: var(--accent-004);
        margin-bottom: 20px;
    }
`;
const CardTagsContainer = styled.div`
    padding: 40px 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const CardTag = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 10px 0;
`;
const CardTagImageContainer = styled.div`
    height: 30px;
    width: 30px;
`;
const CardTagImage = styled.img`
    height: 25px;
    width: 25px;
`;
const CardTagHeadingContainer = styled.div``;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AdditionalProjectsContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;
const AdditionalProjects = styled.div`
    border-radius: 25px;
    display: ${({ display }) => display};
    flex: 1;
    width: 100%;
    min-height: 30vh;
    background-color: var(--fade-001);
    margin-bottom: 20px;
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002);
`;
const AdditionalProjectsButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    padding: 15px 20px;
    background-color: var(--accent-001);
    font-size: 25px;
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
        color: var(--white-002);
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const ContactBox = styled.div`
    overflow: hidden;
    border-radius: 25px;
    padding: 50px 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: var(--main-002);
    background: linear-gradient(
        0deg,
        var(--main-002) 0%,
        var(--main-001) 30%,
        var(--main-001) 80%,
        var(--main-003) 100%
    );
`;
const ContactButton = styled.a`
    margin-top: 30px;
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    color: var(--white-001);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--accent-004);
    &:hover {
        color: var(--accent-001);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
    }
    @media only screen and (max-width: 1000px) {
        border: 1px solid var(--fade-002);
        background-color: var(--white-001);
        padding: 10px 20px;
        color: var(--accent-004);
        margin-bottom: 20px;
    }
`;
//////////////////////////////////////////////////////////////////////

const ToolkitContainer = styled.div`
    border: 1px solid var(--fade-002);
    flex: 1;
    width: 100%;
    border-radius: 25px;
    /* min-height: 100vh; */
    /* padding: 40px; */
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    transition: 111ms linear;
    margin-bottom: 50px;
    padding-top: 50px;
    overflow: hidden;
`;

const ToolsButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    padding: 10px 15px;
    background-color: var(--accent-001);
    font-size: 15px;
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
        color: var(--white-002);
    }
`;
const ToolsFooter = styled.div`
    background-color: var(--fade-001);
    flex: 1;
    width: 100%;
    margin-top: 50px;
`;
const ToolsContainer = styled.div`
    flex: 1;
    width: 100%;
    padding: 20px 0;
    display: ${({ display }) => display};
    grid-template-columns: repeat(5, 1fr);
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const ToolContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const ToolImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 50px;
    max-width: 50px;
    min-height: 50px;
    min-width: 50px;
    padding: 40px 0;
    border-radius: ${({ borderradius }) => borderradius};
    overflow: ${({ overflow }) => overflow};
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        max-height: 50px;
        max-width: 50px;
        min-height: 50px;
        min-width: 50px;
    }
`;
const ToolImage = styled.img`
    max-height: 51px;
    max-width: 51px;
    min-height: 51px;
    min-width: 51px;
    object-fit: cover;
    @media only screen and (max-width: 600px) {
        max-height: 51px;
        max-width: 51px;
        min-height: 51px;
        min-width: 51px;
    }
`;

const TOOLS = [
    {
        id: "react",
        heading: "react",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/354259/react.svg",
    },
    {
        id: "firebase",
        heading: "firebase",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/353735/firebase.svg",
    },
    {
        id: "netlify",
        heading: "netlify",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/354110/netlify.svg",
    },
    {
        id: "html",
        heading: "html",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/55451/html.svg",
    },
    {
        id: "es6",
        heading: "es6",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/353707/es6.svg",
    },
    {
        id: "css",
        heading: "css",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/373535/css.svg",
    },
    {
        id: "scss",
        heading: "scss",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/374067/scss2.svg",
    },
    {
        id: "styled",
        heading: "styled",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/374104/styled.svg",
    },
    {
        id: "emmet",
        heading: "emmet",
        isBordered: false,
        imageUrl: "https://emmet.io/-/4076541266/i/logo.svg",
    },
    {
        id: "googlefonts",
        heading: "google fonts",
        isBordered: false,
        imageUrl:
            "https://pbs.twimg.com/profile_images/1366808543773384704/8qFXRmFc_400x400.png",
    },
    {
        id: "undraw",
        heading: "undraw",
        isBordered: true,
        imageUrl:
            "https://pbs.twimg.com/profile_images/1266792130711879683/i0ElWni3_400x400.jpg",
    },
    {
        id: "svgrepo",
        heading: "svgrepo",
        isBordered: false,
        imageUrl:
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/svgrepo_logo_icon_170689.png",
    },
    {
        id: "icon8",
        heading: "icon8",
        isBordered: false,
        imageUrl: "https://avatars.githubusercontent.com/u/6615749?s=200&v=4",
    },
    {
        id: "vscode",
        heading: "vscode",
        isBordered: false,
        imageUrl: "https://www.svgrepo.com/show/354522/visual-studio-code.svg",
    },
    {
        id: "procreate",
        heading: "procreate",
        isBordered: false,
        imageUrl:
            "https://static.wixstatic.com/media/f57031_3ed69a32eb6e4b8a84d233d837485b0d~mv2.png/v1/fill/w_232,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Procreate%20icon.png",
    },
];
//////////////////////////////////////////////////////////////////////

const App = () => {
    const headsection = useRef(null);
    window.scrolltoheadsection = () =>
        window.scrollTo({
            top: headsection.current.offsetTop,
            behavior: "smooth",
        });

    const cardssection = useRef(null);
    window.scrolltocardssection = () =>
        window.scrollTo({
            top: cardssection.current.offsetTop - 20,
            behavior: "smooth",
        });

    const toolkit = useRef(null);
    window.scrolltotoolkitsection = () =>
        window.scrollTo({
            top: toolkit.current.offsetTop - 100,
            behavior: "smooth",
        });

    const footsection = useRef(null);
    window.scrolltofootsection = () =>
        window.scrollTo({
            top: footsection.current.offsetTop - 20,
            behavior: "smooth",
        });

    const [additionalProjectsVisible, setAdditionalProjectsVisible] =
        useState(false);
    const toggleAdditionalProjectsVisible = () =>
        setAdditionalProjectsVisible(!additionalProjectsVisible);

    const { currentPop } = useContext(PopContext);

    const [toolsVisible, setToolsVisible] = useState(false);
    const toggleToolsVisible = () => setToolsVisible(!toolsVisible);

    return (
        <>
            <AppNavbar backgroundimage={`url(${ship})`}>
                <NavLogoContainer onClick={() => window.scrolltoheadsection()}>
                    <NavLogoImageContainer>
                        <NavLogoImage src="https://www.svgrepo.com/show/233196/smile.svg" />
                    </NavLogoImageContainer>
                    <NavLogoHeadingContainer>
                        <PageSpan
                            color="var(--white-001)"
                            fontsize="25px"
                            fontweight="500"
                            lineheight="30px"
                            maxheight="30px"
                            cursor="pointer"
                            fontsizesix="20px"
                            spantext="99E"
                        />
                    </NavLogoHeadingContainer>
                </NavLogoContainer>
                <NavButton onClick={() => window.scrolltofootsection()}>
                    Connect
                </NavButton>
            </AppNavbar>

            <AppContainer ref={headsection}>
                <AppNotificationBanner>
                    <AppNotification>
                        <PageSpan
                            color="var(--accent-004)"
                            fontsize="12.5px"
                            spantext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam labore dolorem, voluptates excepturi doloremque quas?"
                        />
                        <AppNotificationLink
                            onClick={() => window.scrolltotoolkitsection()}
                        >
                            <PageSpan
                                color="var(--accent-004)"
                                fontsize="12.5px"
                                spantext="Learn More"
                            />
                        </AppNotificationLink>
                    </AppNotification>
                </AppNotificationBanner>
                <AppSplash>
                    <SplashDetails>
                        <SplashHeadingContainer>
                            <PageSpan
                                color="var(--main-003)"
                                maxheight="fit-content"
                                fontsize="45px"
                                lineheight="45px"
                                fontweight="600"
                                maxwidthone="275px"
                                fontsizeone="30px"
                                lineheightone="30px"
                                fontweightone="600"
                                maxwidthsix="275px"
                                fontsizesix="35px"
                                lineheightsix="35px"
                                fontweightsix="600"
                                textalignsix="center"
                                fontsizetwo="30px"
                                lineheighttwo="30px"
                                fontweighttwo="600"
                                textaligntwo="center"
                                spantext="Commodi sapiente cupiditate vero, officia tempore."
                            />
                        </SplashHeadingContainer>
                        <SplashSummaryContainer>
                            <PageSpan
                                fontsize="25px"
                                lineheight="25px"
                                fontweight="400"
                                fontsizeone="22.5px"
                                lineheightone="22.5px"
                                fontweightone="400"
                                maxwidthone="80%"
                                maxwidthsix="100%"
                                paddingsix="0"
                                fontsizesix="20px"
                                lineheightsix="20px"
                                textalignone="center"
                                paddingtwo="0"
                                spantext=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente cupiditate vero, officia tempore ratione vel consectetur tempora blanditiis placeat."
                            />
                        </SplashSummaryContainer>
                        <SplashButtonsContainer>
                            <FirstSplashButton
                                onClick={() => window.scrolltocardssection()}
                            >
                                Projects
                            </FirstSplashButton>
                            <SecondSplashButton
                                onClick={() => window.scrolltotoolkitsection()}
                            >
                                learn more
                            </SecondSplashButton>
                        </SplashButtonsContainer>
                    </SplashDetails>
                    <SplashImageContainer>
                        <SplashImage src={splashimage} />
                    </SplashImageContainer>
                </AppSplash>
                <AppCardsContainer ref={cardssection}>
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
                        spantext="Officia tempore ratione vel consectetur tempora blanditiis placeat."
                    />
                    <AllCards>
                        {CARDS.map((card) => {
                            const {
                                id,
                                heading,
                                subheading,
                                buttontext,
                                imageUrl,
                                tags,
                            } = card;
                            return (
                                <Card key={id}>
                                    <CardImageContainer>
                                        <CardImage src={imageUrl} />
                                    </CardImageContainer>
                                    <CardHeadingContainer>
                                        <PageSpan
                                            fontsize="35px"
                                            fontweight="500"
                                            fontsizeone="30px"
                                            fontsizesix="25px"
                                            fontsizestwo="15px"
                                            spantext={heading}
                                        />
                                        <PageSpan
                                            margin="20px 0"
                                            textalign="center"
                                            lineheight="25px"
                                            fontsize="17.5px"
                                            fontsizesix="15px"
                                            fontsizestwo="10px"
                                            marginsix="10px 0"
                                            spantext={subheading}
                                        />
                                    </CardHeadingContainer>
                                    <CardTagsButtonFlipper>
                                        <CardButtonContainer>
                                            <CardButton>
                                                {buttontext}
                                            </CardButton>
                                        </CardButtonContainer>
                                        <CardTagsContainer>
                                            {tags.map((tag) => {
                                                const {
                                                    id,
                                                    heading,
                                                    imageUrl,
                                                } = tag;
                                                return (
                                                    <CardTag key={id}>
                                                        <CardTagImageContainer>
                                                            <CardTagImage
                                                                src={imageUrl}
                                                            />
                                                        </CardTagImageContainer>
                                                        <CardTagHeadingContainer>
                                                            <PageSpan
                                                                fontweight="400"
                                                                fontsize="17.5px"
                                                                fontsizesix="15px"
                                                                fontsizestwo="10px"
                                                                spantext={
                                                                    heading
                                                                }
                                                            />
                                                        </CardTagHeadingContainer>
                                                    </CardTag>
                                                );
                                            })}
                                        </CardTagsContainer>
                                    </CardTagsButtonFlipper>
                                </Card>
                            );
                        })}
                    </AllCards>

                    <AdditionalProjectsContainer>
                        <AdditionalProjects
                            display={
                                additionalProjectsVisible ? "flex" : "none"
                            }
                        ></AdditionalProjects>
                        <AdditionalProjectsButton
                            onClick={() => toggleAdditionalProjectsVisible()}
                        >
                            All Projects
                        </AdditionalProjectsButton>
                    </AdditionalProjectsContainer>

                    <ToolkitContainer ref={toolkit}>
                        <PageSpan
                            fontsize="35px"
                            fontweight="500"
                            fontsizeone="30px"
                            fontsizesix="25px"
                            fontsizestwo="15px"
                            spantext="Toolkit"
                        />
                        <PageSpan
                            textalign="center"
                            margin="20px 0"
                            fontsize="15px"
                            fontweight="400"
                            spantext="Officia tempore ratione vel consectetur tempora blanditiis placeat."
                        />
                        <ToolsContainer
                            display={toolsVisible ? "grid" : "none"}
                        >
                            {TOOLS.map((tool) => {
                                const { id, imageUrl, isBordered } = tool;
                                return (
                                    <ToolContainer key={id}>
                                        <ToolImageContainer
                                            borderradius={
                                                isBordered ? "50%" : "0"
                                            }
                                            overflow={
                                                isBordered ? "hidden" : ""
                                            }
                                        >
                                            <ToolImage src={imageUrl} />
                                        </ToolImageContainer>
                                    </ToolContainer>
                                );
                            })}
                        </ToolsContainer>
                        <ToolsButton onClick={() => toggleToolsVisible()}>
                            {toolsVisible ? "See Less" : "See All"}
                        </ToolsButton>
                        <ToolsFooter></ToolsFooter>
                    </ToolkitContainer>

                    <ContactBox ref={footsection}>
                        <PageSpan
                            fontsize="35px"
                            fontweight="500"
                            padding="10px 0"
                            color="var(--accent-001)"
                            spantext="Capiente"
                        />
                        <PageSpan
                            fontsize="15px"
                            fontweight="400"
                            padding="10px 0"
                            textalign="center"
                            color="var(--white-003)"
                            spantext="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        />
                        <PopTray />
                        <ContactButton
                            onClick={() =>
                                !currentPop
                                    ? window.scrolltoheadsection()
                                    : null
                            }
                            href={currentPop ? currentPop.path : null}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {currentPop
                                ? `visit ${currentPop.heading}`
                                : "back to top"}
                        </ContactButton>
                    </ContactBox>
                </AppCardsContainer>
            </AppContainer>
        </>
    );
};
export default App;
