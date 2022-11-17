import styled from "styled-components";
import PageSpan from "../page-span.component";
import { DATASHEET } from "../DATASHEET";
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
    border: 1px solid var(--fade-002);
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

const AllGists = styled.div`
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
const Gists = () => {
    return (
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
            <AllGists>
                {DATASHEET.gistData.GISTS.map((gist) => {
                    const { id, heading, gisttext, imageUrl, scrollto } = gist;
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
            </AllGists>
        </GistsContainer>
    );
};
export default Gists;
