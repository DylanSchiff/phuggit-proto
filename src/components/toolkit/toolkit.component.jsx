import { useRef, useState } from "react";
import styled from "styled-components";
import PageSpan from "../page-span.component";
const ToolkitContainer = styled.div`
    flex: 1;
    width: 100%;
    max-width: 1500px;
    margin-bottom: 50px;
    padding-top: 50px;
    border-radius: 25px;
    overflow: hidden;
    transition: 111ms linear;
    border: 1px solid var(--fade-002);
    box-shadow: var(--med-shadow);
    background-color: var(--main-color);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
`;

const ToolsButton = styled.div`
    margin-top: 20px;
    padding: 10px 15px;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    cursor: pointer;
    user-select: none;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid var(--fade-002);
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        /* box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
        color: var(--white-002); */
    }
`;

const ToolsContainer = styled.div`
    flex: 1;
    width: 80%;
    padding: 20px 0;
    display: ${({ display }) => display};
    grid-template-columns: repeat(5, 1fr);
    @media only screen and (max-width: 1000px) {
        width: 100%;
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
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const ToolImageContainer = styled.div`
    max-height: 50px;
    max-width: 50px;
    min-height: 50px;
    min-width: 50px;
    padding: 40px 0;
    border-radius: ${({ borderradius }) => borderradius};
    overflow: ${({ overflow }) => overflow};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        max-height: 50px;
        max-width: 50px;
        min-height: 50px;
        min-width: 50px;
    }
    &:hover > :first-child {
        transform: scale(0.95);
        opacity: 0.9;
    }
`;
const ToolImage = styled.img`
    max-height: 51px;
    max-width: 51px;
    min-height: 51px;
    min-width: 51px;
    object-fit: cover;
    transition: 111ms linear;
    @media only screen and (max-width: 600px) {
        max-height: 51px;
        max-width: 51px;
        min-height: 51px;
        min-width: 51px;
    }
`;
const ToolsFooter = styled.div`
    flex: 1;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid var(--fade-002);
    @media only screen and (max-width: 600px) {
        flex-flow: column nowrap;
    }
`;
const ToolFooterTools = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    @media only screen and (max-width: 400px) {
        flex-flow: column nowrap;
    }
`;
const ToolFooterDetails = styled.div`
    padding: 20px 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
`;
const FooterDetailsHeadings = styled.div`
    margin: 0 20px;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
`;
const Toolkit = ({ toolData }) => {
    const [toolsVisible, setToolsVisible] = useState(false);
    const toggleToolsVisible = () => setToolsVisible(!toolsVisible);
    const toolkit = useRef(null);
    window.scrolltotoolkitsection = () =>
        window.scrollTo({
            top: toolkit.current.offsetTop - 100,
            behavior: "smooth",
        });
    return (
        <ToolkitContainer ref={toolkit}>
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
                spantext="It wouldn't be the same without you"
            />
            <ToolsContainer display={toolsVisible ? "grid" : "none"}>
                {toolData.TOOLS.map((tool, index) => {
                    const { id, imageUrl, isBordered } = tool;
                    return index > 2 ? (
                        <ToolContainer key={id}>
                            <ToolImageContainer
                                borderradius={isBordered ? "50%" : "0"}
                                overflow={isBordered ? "hidden" : ""}
                            >
                                <ToolImage src={imageUrl} />
                            </ToolImageContainer>
                        </ToolContainer>
                    ) : null;
                })}
            </ToolsContainer>
            <ToolsButton onClick={() => toggleToolsVisible()}>
                {toolsVisible ? "See Less" : "See All"}
            </ToolsButton>
            <ToolsFooter>
                <ToolFooterTools>
                    {toolData.TOOLS.map((tool, index) => {
                        const { id, imageUrl } = tool;
                        return index < 3 ? (
                            <ToolContainer key={id}>
                                <ToolImageContainer>
                                    <ToolImage src={imageUrl} />
                                </ToolImageContainer>
                            </ToolContainer>
                        ) : null;
                    })}
                </ToolFooterTools>
                <ToolFooterDetails>
                    <FooterDetailsHeadings>
                        <PageSpan
                            fontsize="30px"
                            fontweight="400"
                            fontsizeone="25px"
                            fontsizesix="20px"
                            fontsizetwo="15px"
                            spantext="react"
                            margin="0 5px 0 0"
                        />
                        <PageSpan
                            fontsize="30px"
                            fontweight="400"
                            fontsizeone="25px"
                            fontsizesix="20px"
                            fontsizetwo="15px"
                            spantext="+ firebase"
                            margin="0 5px 0 0"
                        />
                        <PageSpan
                            fontsize="30px"
                            fontweight="400"
                            fontsizeone="25px"
                            fontsizesix="20px"
                            fontsizetwo="15px"
                            spantext="+ netlify"
                        />
                    </FooterDetailsHeadings>
                    <PageSpan
                        textalign="center"
                        margin="10px 20px"
                        fontsize="10px"
                        fontweight="400"
                        spantext="heavyweights for the development of this project"
                    />
                </ToolFooterDetails>
            </ToolsFooter>
        </ToolkitContainer>
    );
};
export default Toolkit;
