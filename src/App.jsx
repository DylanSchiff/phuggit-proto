import styled from "styled-components";
import TOOLS from "./components/TOOLDATA";
import { useRef } from "react";
import PageSpan from "./components/page-span.component";
import CARDS from "./CARDS";
import Splash from "./components/splash/splash.component";
import Cards from "./components/cards/cards.component";
import AdditionalProjects from "./components/additional-projects/additional-projects.component";
import ANotification from "./components/app-notification/app-notification";
import Navibar from "./components/navibar/navibar.component";
import Toolkit from "./components/toolkit/toolkit.component";
import ContactBox from "./components/contact-box/contact-box.component";

const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    background-color: var(--accent-002);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    overflow: hidden;
    overflow-y: auto;
    @media only screen and (min-width: 1000px) {
        align-items: center;
    }
`;

const AppBodySection = styled.div`
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

const App = () => {
    const headsection = useRef(null);
    window.scrolltoheadsection = () =>
        window.scrollTo({
            top: headsection.current.offsetTop -50,
            behavior: "smooth",
        });

    const appbodysection = useRef(null);
    window.scrolltoappbodysection = () =>
        window.scrollTo({
            top: appbodysection.current.offsetTop - 20,
            behavior: "smooth",
        });

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
                        spantext="Officia tempore ratione vel consectetur tempora blanditiis placeat."
                    />
                    <Cards cards={CARDS} />
                    <AdditionalProjects />
                    <Toolkit tools={TOOLS} />
                    <ContactBox />
                </AppBodySection>
            </PageContainer>
        </>
    );
};
export default App;
