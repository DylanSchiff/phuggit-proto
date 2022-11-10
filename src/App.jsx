import styled from "styled-components";
// import PopBackground from "./components/pop/pop-background.component";
// import PopDisplay from "./components/pop/pop-display.component";
// import PopTray from "./components/pop/pop-tray.component";
import splashimage from "./components/images/light.svg";
import ship from "./components/images/ship.svg";

const AppContainer = styled.div`
    min-height: 100vh;
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
const NavLogoHeading = styled.span`
    color: var(--white-001);
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    max-height: 30px;
    user-select: none;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
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
    user-select: none;
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
const SplashHeading = styled.h2`
    height: fit-content;
    font-size: 45px;
    line-height: 45px;
    font-weight: 600;
    user-select: none;
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
    user-select: none;
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
    border: 1px solid #0001;
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        box-shadow: 0 1px 3px #0001, 0 2px 5px #0001, 0 3px 8px #2221;
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

const AppCardsContainer = styled.div``;

const App = () => {
    return (
        // <AppContents>
        //     <PopTray />
        //     <PopDisplay />
        //     <PopBackground />
        // </AppContents>

        <>
            <AppNavbar backgroundimage={`url(${ship})`}>
                <NavLogoContainer>
                    <NavLogoImageContainer>
                        <NavLogoImage src="https://www.svgrepo.com/show/233196/smile.svg" />
                    </NavLogoImageContainer>
                    <NavLogoHeadingContainer>
                        <NavLogoHeading>Schiff</NavLogoHeading>
                    </NavLogoHeadingContainer>
                </NavLogoContainer>
                <NavButton>Connect</NavButton>
            </AppNavbar>

            <AppContainer>
                <AppNotificationBanner>
                    <AppNotification>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Numquam labore dolorem, voluptates excepturi
                        doloremque quas?
                        <AppNotificationLink>Learn More</AppNotificationLink>
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Commodi sapiente cupiditate
                                vero, officia tempore ratione vel consectetur
                                tempora blanditiis placeat.
                            </SplashSummary>
                        </SplashSummaryContainer>
                        <SplashButtonsContainer>
                            <FirstSplashButton>Projects</FirstSplashButton>
                            <SecondSplashButton>learn more</SecondSplashButton>
                        </SplashButtonsContainer>
                    </SplashDetails>
                    <SplashImageContainer>
                        <SplashImage src={splashimage}></SplashImage>
                    </SplashImageContainer>
                </AppSplash>
                <AppCardsContainer></AppCardsContainer>
            </AppContainer>
        </>
    );
};
export default App;
