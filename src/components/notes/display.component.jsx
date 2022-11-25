import styled from "styled-components";
import Note from "./a-note.component";
import Span from "../reusable/Span.component";
const NoteDisplayContent = styled.div`
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding: 50px;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
const NoteDisplay = ({ allNotes }) => {
    // const allNotesAscending =
    //     allNotes &&
    //     allNotes.sort((a, b) => {
    //         return a.createdAt.seconds - b.createdAt.seconds;
    //     });
    const allNotesDescending =
        allNotes &&
        allNotes
            .sort((a, b) => {
                return a.createdAt.seconds - b.createdAt.seconds;
            })
            .reverse();
    const notes =
        allNotes &&
        allNotesDescending.map((note) => {
            return <Note note={note} key={note.id} />;
        });

    return (
        <NoteDisplayContent>
            <Span fontsize="25px" fontweight="700" spanContent="Lab Notes" />
            {notes}
        </NoteDisplayContent>
    );
};
export default NoteDisplay;
