import { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../ap/context/color.context";
import PageSpan from "../page-span.component";

const AppSplash = styled.section.attrs((props) => ({
    style: {
        border: "1px solid" + props.currentColor,
    },
}))`
    box-shadow: var(--shade-001);
    background-color: var(--main-002);
    transition: 111ms linear;

    flex: 1;
    max-width: 1500px;
    min-height: 100vh;
    padding: 50px 60px;
    margin: 0 50px;
    border-radius: 35px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

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
    transition: 111ms linear;
    display: flex;
    flex-flow: column nowrap;
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
    margin-top: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
    @media only screen and (max-width: 450px) {
        justify-content: center;
        flex-flow: column nowrap;
    }
`;

const SplashButton = styled.div`
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    cursor: pointer;
    user-select: none;
`;

const FirstSplashButton = styled(SplashButton).attrs((props) => ({
    style: {
        border: "1px solid" + props.currentColor,
    },
}))`
    padding: 15px 20px;
    font-size: 25px;
    font-weight: 500;
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        /* box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002); */
    }
`;
const SecondSplashButton = styled(SplashButton).attrs((props) => ({
    style: {
        color: props.currentColor,
    },
}))`
    transition: 111ms;
    margin-left: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    @media only screen and (max-width: 450px) {
        margin-left: 0px;
        margin-top: 20px;
    }
    &:hover {
        /* color: var(--accent-003); */
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashImageContainer = styled.div`
    flex: 4;
    width: 100%;
    padding-top: 30px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        padding-top: 10px;
        width: 80%;
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const SplashImage = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover;
    user-select: none;
    @media only screen and (max-width: 1000px) {
        margin-top: 50px;
        height: 100%;
        width: 100%;
    }
`;

const Splash = ({ splashData }) => {
    const { currentColor } = useContext(ColorContext);
    return (
        <AppSplash currentColor={currentColor}>
            <SplashDetails>
                <SplashHeadingContainer>
                    <PageSpan
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
                        spantext={splashData.splashHeadingText}
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
                        spantext={splashData.splashSubheadingText}
                    />
                </SplashSummaryContainer>
                <SplashButtonsContainer>
                    <FirstSplashButton
                        currentColor={currentColor}
                        onClick={() => window.scrolltoappbodysection()}
                    >
                        {splashData.splashFirstButtonText}
                    </FirstSplashButton>
                    <SecondSplashButton
                        currentColor={currentColor}
                        onClick={() => window.scrolltotoolkitsection()}
                    >
                        {splashData.splashSecondButtonText}
                    </SecondSplashButton>
                </SplashButtonsContainer>
            </SplashDetails>
            <SplashImageContainer>
                <SplashImage src={splashData.splashImageUrl} />
            </SplashImageContainer>
        </AppSplash>
    );
};
export default Splash;
