import styled from "styled-components";
import NugNote from "./nug-note.component";
import { NUGNOTES } from "./NOTES";

const NugNotesContainer = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    padding: 20px;
    margin: 20px;
    overflow-y: scroll;
    max-height: 520px;
    transition: 100ms linear;
    border: 1px solid #00000022;
    border-radius: 20px;
    &:hover {
        box-shadow: inset 0 1px 1px #00000030, inset 0 2px 3px #00000025,
            inset 0 4px 7px #00000020, inset 0 7px 11px #00000007,
            inset 0 9px 15px #00000007, inset 0 11px 20px #00000005;
    }
    @media only screen and (max-width: 800px) {
        & {
            margin: 50px 0;
        }
    }
    @media only screen and (max-width: 800px) {
        & {
            margin-left: 0px;
        }
    }
`;

const NugNotes = () => {
    return (
        <NugNotesContainer>
            {NUGNOTES.map((nugnote) => {
                const { id } = nugnote;
                return <NugNote nugnote={nugnote} key={id} />;
            })}
        </NugNotesContainer>
    );
};
export default NugNotes;
