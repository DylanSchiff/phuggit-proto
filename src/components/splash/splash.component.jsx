import styled from "styled-components";
import PageSpan from "../page-span.component";
import splashimage from "../images/light.svg";

const AppSplash = styled.section`
    max-width: 1500px;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    padding: 50px 60px;
    align-items: center;
    border-radius: 35px;
    margin: 0 50px;
    transition: 111ms linear;
    background-color: var(--white-002);
    border: 1px solid var(--fade-002);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    background: linear-gradient(
        0deg,
        var(--white-001) 0%,
        var(--white-002) 100%
    );
    @media only screen and (max-width: 1000px) {
        flex-flow: column nowrap;
        align-items: center;
    }
    @media only screen and (max-width: 600px) {
        justify-content: center;
        margin: 0 20px;
        padding: 50px 40px;
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

const Splash = () => {
    return (
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
                        // spantext="Commodi sapiente cupiditate vero, officia tempore."
                        spantext="Media collective and web showcase in one space."

                    />
                </SplashHeadingContainer>
                <SplashSummaryContainer>
                    <PageSpan
                        fontsize="25px"
                        lineheight="25px"
                        fontweight="400"
                        fontsizeone="22px"
                        lineheightone="22px"
                        fontweightone="400"
                        maxwidthone="80%"
                        maxwidthsix="100%"
                        paddingsix="0"
                        fontsizesix="20px"
                        lineheightsix="20px"
                        textalignone="center"
                        paddingtwo="0"
                        spantext="If we're talking time management or media creation, things can get complicated. This all-in-one portfolio application is here to help simplify."
                        // spantext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sapiente cupiditate vero, officia tempore ratione vel consectetur tempora blanditiis placeat."
                    />
                </SplashSummaryContainer>
                <SplashButtonsContainer>
                    <FirstSplashButton
                        onClick={() => window.scrolltoappbodysection()}
                    >
                        explore
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
    );
};
export default Splash;
