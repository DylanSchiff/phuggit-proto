import { useRef, useState } from "react";
import styled from "styled-components";
import PageSpan from "../page-span.component";
const ToolkitContainer = styled.div`
    border: 1px solid var(--fade-002);
    flex: 1;
    width: 100%;
    border-radius: 25px;
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
    background-color: var(--white-001);
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
    padding: 20px;
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
    &:hover > :first-child {
        transform: scale(0.95);
        opacity: 0.9;
    }
`;
const ToolImage = styled.img`
    transition: 111ms linear;
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
const ToolsFooter = styled.div`
    background-color: var(--fade-001);
    flex: 1;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(
        90deg,
        var(--fade-001) 0%,
        var(--fade-002) 100%
    );
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
    align-items: flex-start;
    justify-content: center;
    flex-flow: column nowrap;
`;
const FooterDetailsHeadings = styled.div`
    margin: 0 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: row wrap;
`;
const Toolkit = ({ tools }) => {
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
            {/* <PageSpan
                fontsize="35px"
                fontweight="500"
                fontsizeone="30px"
                fontsizesix="25px"
                fontsizestwo="15px"
                spantext="Toolkit"
            />
            <PageSpan
                textalign="center"
                margin="20px 10px"
                fontsize="15px"
                fontweight="400"
                spantext="Officia tempore ratione vel consectetur tempora blanditiis placeat."
            /> */}
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
                spantext="Officia tempore ratione vel blanditiis placeat."
            />
            <ToolsContainer display={toolsVisible ? "grid" : "none"}>
                {tools.map((tool, index) => {
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
                    {tools.map((tool, index) => {
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
                            spantext="Tempore"
                            margin="0 5px 0 0"
                        />
                        <PageSpan
                            fontsize="30px"
                            fontweight="400"
                            fontsizeone="25px"
                            fontsizesix="20px"
                            fontsizetwo="15px"
                            spantext="+ Ratione"
                            margin="0 5px 0 0"
                        />
                        <PageSpan
                            fontsize="30px"
                            fontweight="400"
                            fontsizeone="25px"
                            fontsizesix="20px"
                            fontsizetwo="15px"
                            spantext="+ Placeat"
                        />
                    </FooterDetailsHeadings>
                    <PageSpan
                        textalign="center"
                        margin="10px 20px"
                        fontsize="10px"
                        fontweight="400"
                        spantext="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                </ToolFooterDetails>
            </ToolsFooter>
        </ToolkitContainer>
    );
};
export default Toolkit;
