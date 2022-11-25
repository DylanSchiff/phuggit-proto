import { useContext } from "react";
import styled from "styled-components";
import { NotesContext } from "../../ap/context/notes.context";
import NoteInputs from "./all-inputs.component";
import NotesDisplay from "./display.component";
const NotesHaus = styled.div`
    flex: 1;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const Notes = () => {
    const { notesMap } = useContext(NotesContext);
    const allNotes =
        notesMap &&
        Object.values(notesMap).map((note) => {
            return note;
        });
    return (
        <NotesHaus>
            <NotesDisplay allNotes={allNotes} />
            <NoteInputs />
        </NotesHaus>
    );
};
export default Notes;
