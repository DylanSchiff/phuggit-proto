import styled from "styled-components";
// import PopBackground from "./components/pop/pop-background.component";
// import PopDisplay from "./components/pop/pop-display.component";
// import PopTray from "./components/pop/pop-tray.component";
import splashimage from "./components/images/light.svg";

const AppContainer = styled.div`
    /* max-height: 100vh; */
    min-height: 100vh;
    /* max-width: 100vw; */
    min-width: 100vw;
    background-color: var(--white-004);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    overflow: hidden;
    overflow-y: auto;
    @media only screen and (min-width: 1000px) {
        align-items: center;
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
    font-size: 12.5px;
`;
const AppNotificationLink = styled.a`
    cursor: pointer;
    font-weight: 500;
    color: var(--white-004);
    &:hover {
        text-decoration: underline;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppSplash = styled.section`
    max-width: 1500px;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    padding: 50px 60px;
    @media only screen and (max-width: 1000px) {
        flex-flow: column nowrap;
        padding: 50px 60px;
    }
`;
const SplashDetails = styled.div`
    flex: 3;
    width: 100%;
    /* background-color: var(--fade-002); */
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
const SplashHeading = styled.h2`
    height: fit-content;
    font-size: 45px;
    line-height: 45px;
    font-weight: 600;
    @media only screen and (max-width: 1000px) {
        max-width: 275px;
        font-size: 30px;
        line-height: 30px;
        font-weight: 600;
    }
    @media only screen and (max-width: 600px) {
        max-width: 100%;
        max-width: 275px;
        font-size: 35px;
        line-height: 35px;
        font-weight: 600;
        text-align: center;
    }
    @media only screen and (max-width: 200px) {
        font-size: 30px;
        line-height: 30px;
        font-weight: 600;
        text-align: center;
    }
`;
const SplashSummaryContainer = styled.div`
    @media only screen and (max-width: 600px) {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const SplashSummary = styled.p`
    flex: 1;
    font-size: 25px;
    line-height: 25px;
    font-weight: 400;
    @media only screen and (max-width: 1000px) {
        font-size: 22.5px;
        line-height: 22.5px;
        font-weight: 400;
        max-width: 80%;
    }
    @media only screen and (max-width: 600px) {
        max-width: 100%;
        padding: 0 40px;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
    }
    @media only screen and (max-width: 300px) {
        padding: 0;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashButtonsContainer = styled.div`
    /* background-color: var(--fade-001); */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
    @media only screen and (max-width: 300px) {
        flex-flow: column nowrap;
    }
`;
const SplashButton = styled.div`
    border-radius: 5px;
    cursor: pointer;
    white-space: nowrap;
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    outline: ${({ outline }) => outline};
    border: ${({ border }) => border};
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    font-size: ${({ fontsize }) => fontsize};
    font-weight: ${({ fontweight }) => fontweight};
    @media only screen and (max-width: 300px) {
        margin: 20px 0;
        font-size: 15px;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashImageContainer = styled.div`
    flex: 4;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media only screen and (max-width: 1000px) {
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const SplashImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1000px) {
        margin-top: 50px;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppCardsContainer = styled.div``;

const App = () => {
    const mainButtonSettings = {
        buttontext: "welcome",
        outline: "none",
        border: "none",
        backgroundcolor: "#aaf",
        fontsize: "25px",
        fontweight: "400",
        padding: "10px 20px",
        margin: "0",
    };
    const secondButtonSettings = {
        buttontext: "learn more",
        outline: "none",
        border: "none",
        backgroundcolor: "transparent",
        fontsize: "",
        fontweight: "",
        padding: "",
        margin: "0 0 0 30px",
    };

    return (
        // <AppContents>
        //     <PopTray />
        //     <PopDisplay />
        //     <PopBackground />
        // </AppContents>
        <AppContainer>
            <AppNotificationBanner>
                <AppNotification>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam labore dolorem, voluptates excepturi doloremque
                    quas? <AppNotificationLink>Learn More</AppNotificationLink>
                </AppNotification>
            </AppNotificationBanner>
            <AppSplash>
                <SplashDetails>
                    <SplashHeadingContainer>
                        <SplashHeading>
                            Item here to fill a main heading slot
                        </SplashHeading>
                    </SplashHeadingContainer>
                    <SplashSummaryContainer>
                        <SplashSummary>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi sapiente cupiditate vero, officia
                            tempore ratione vel consectetur tempora blanditiis
                            placeat.
                        </SplashSummary>
                    </SplashSummaryContainer>
                    <SplashButtonsContainer>
                        <SplashButton
                            outline={mainButtonSettings.outline}
                            border={mainButtonSettings.border}
                            fontsize={mainButtonSettings.fontsize}
                            fontweight={mainButtonSettings.fontweight}
                            backgroundcolor={mainButtonSettings.backgroundcolor}
                            margin={mainButtonSettings.margin}
                            padding={mainButtonSettings.padding}
                        >
                            {mainButtonSettings.buttontext}
                        </SplashButton>
                        <SplashButton
                            outline={secondButtonSettings.outline}
                            border={secondButtonSettings.border}
                            fontsize={secondButtonSettings.fontsize}
                            fontweight={secondButtonSettings.fontweight}
                            backgroundcolor={
                                secondButtonSettings.backgroundcolor
                            }
                            margin={secondButtonSettings.margin}
                            padding={secondButtonSettings.padding}
                        >
                            {secondButtonSettings.buttontext}
                        </SplashButton>
                    </SplashButtonsContainer>
                </SplashDetails>
                <SplashImageContainer>
                    <SplashImage src={splashimage}></SplashImage>
                </SplashImageContainer>
            </AppSplash>
            <AppCardsContainer></AppCardsContainer>
        </AppContainer>
    );
};
export default App;
