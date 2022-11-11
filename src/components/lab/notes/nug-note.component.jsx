import styled from "styled-components";
const NugNoteContainer = styled.div`
    /* flex: 1; */
    display: flex;
    flex-flow: row nowrap;
    padding: 10px;
    margin-bottom: 20px;
    transition: 100ms linear;
    border: 1px solid #00000022;
    border-radius: 15px;
    &:hover {
        box-shadow: 0 1px 1px #00000030, 0 2px 3px #00000025,
            0 4px 7px #00000020, 0 7px 11px #00000007, 0 9px 15px #00000007,
            0 11px 20px #00000005;
        background-color: #00000011;
    }
    
    @media only screen and (max-width: 400px) {
        flex-flow: column nowrap;
        align-items: center;
    }
`;

const NoteImgContainer = styled.div`
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 250px) {
        /* display: none; */
    }
`;
const NugNoteImg = styled.img`
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    user-select: none;
`;
const NugNoteInfo = styled.div`
    flex: 1;
    display: flex;
    margin-left: 10px;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    @media only screen and (max-width: 400px) {
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;
const NugNoteHeading = styled.span`
    font-weight: 600;
    font-size: 1.1rem;
    user-select: none;
    text-transform: capitalize;
    padding-bottom: 5px;
    white-space: wrap;
    border-bottom: 1px solid #00000022;
    @media only screen and (max-width: 400px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const NugNoteIssue = styled.span`
    width: 100%;
    font-size: 0.8rem;
    user-select: none;
    padding-top: 10px;
    margin-right: 10px;
    overflow: hidden;
    white-space: wrap;
    @media only screen and (max-width: 250px) {
        display: none;
    }
`;
const NugNoteresult = styled.span`
    padding-top: 10px;
    width: 100%;
    font-size: 0.8rem;
    padding-bottom: 10px;
    user-select: none;
    margin-right: 10px;
    overflow: hidden;
    white-space: wrap;
    @media only screen and (max-width: 250px) {
        display: none;
    }
`;

const NugNoteIssueSpan = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
    padding-right: 5px;
`;
const NugNoteResultSpan = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    padding-right: 5px;
`;

const NugNote = ({ nugnote }) => {
    const { heading, noted, result, imageUrl } = nugnote;
    const cappedNoted = noted.slice(0, 1).toUpperCase() + noted.slice(1);
    const cappedResult = result.slice(0, 1).toUpperCase() + result.slice(1);
    return (
        <NugNoteContainer>
            <NoteImgContainer>
                <NugNoteImg src={imageUrl} />
            </NoteImgContainer>
            <NugNoteInfo>
                <NugNoteHeading>{heading}</NugNoteHeading>
                <NugNoteIssue>
                    <NugNoteIssueSpan> Noted :</NugNoteIssueSpan>
                    {cappedNoted === "" || cappedNoted === undefined
                        ? "There's something wrong..."
                        : cappedNoted}
                </NugNoteIssue>
                <NugNoteresult>
                    <NugNoteResultSpan> Result :</NugNoteResultSpan>
                    {cappedResult === "" || cappedResult === undefined
                        ? "Working on it..."
                        : cappedResult}
                </NugNoteresult>
            </NugNoteInfo>
        </NugNoteContainer>
    );
};
export default NugNote;
