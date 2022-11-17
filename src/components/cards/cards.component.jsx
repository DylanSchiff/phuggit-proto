import styled from "styled-components";
import PageSpan from "../page-span.component";
const AllCards = styled.div`
    flex: 1;
    width: 100%;
    max-width: 1500px;
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
        box-shadow: var(--med-shadow);
    }
`;
const Card = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 25px;
    transition: 111ms linear;
    border: 1px solid var(--fade-002);
    box-shadow: var(--med-shadow);
    background-color: var(--main-color);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
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
            /* background-color: var(--white-004); */
        }
    }
`;
const CardImageContainer = styled.div`
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    margin: 40px 0;
    border-radius: 20px;
    overflow: hidden;
    transition: 111ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: var(--accent-001);
    box-shadow: inset 0 1px 3px var(--fade-001), inset 0 2px 5px var(--fade-001),
        inset 0 3px 8px var(--fade-002); */
    @media only screen and (max-width: 600px) {
        max-height: 125px;
        max-width: 125px;
        min-height: 125px;
        min-width: 125px;
    }
`;
const CardImage = styled.img`
    max-height: 125px;
    max-width: 125px;
    min-height: 125px;
    min-width: 125px;
    user-select: none;
    @media only screen and (max-width: 600px) {
        max-height: 100px;
        max-width: 100px;
        min-height: 100px;
        min-width: 100px;
    }
`;
const CardHeadingContainer = styled.div`
    flex: 1;
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
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    /* color: var(--white-001); */
    /* border: 1px solid var(--fade-001);
    background-color: var(--accent-004); */
    /* color: var(--white-002); */
    &:hover {
        /* background-color: var(--accent-002);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002); */
    }
    @media only screen and (max-width: 1000px) {
        margin-bottom: 20px;
        padding: 10px 20px;
        /* border: 1px solid var(--fade-002);
        background-color: var(--white-001); */
        /* color: var(--accent-004); */
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
    user-select: none;
`;
const CardTagHeadingContainer = styled.div``;
const Cards = ({ cards, setChosenDemoId }) => {
    const cardDemo = (id) => {
        setChosenDemoId(id);
        window.scrolltolabsection();
    };
    return (
        <AllCards>
            {cards.map((card) => {
                const { id, heading, subheading, buttontext, imageUrl, tags } =
                    card;
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
                                <CardButton onClick={() => cardDemo(id)}>
                                    {buttontext}
                                </CardButton>
                            </CardButtonContainer>
                            <CardTagsContainer>
                                {tags.map((tag) => {
                                    const { id, heading, imageUrl } = tag;
                                    return (
                                        <CardTag key={id}>
                                            <CardTagImageContainer>
                                                <CardTagImage src={imageUrl} />
                                            </CardTagImageContainer>
                                            <CardTagHeadingContainer>
                                                <PageSpan
                                                    fontweight="400"
                                                    fontsize="17.5px"
                                                    fontsizesix="15px"
                                                    fontsizestwo="10px"
                                                    spantext={heading}
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
    );
};
export default Cards;
