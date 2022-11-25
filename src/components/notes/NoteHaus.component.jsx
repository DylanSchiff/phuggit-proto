import { useContext } from "react";
import styled from "styled-components";
import { NotesContext } from "../../ap/context/notes.context";
import NoteInputs from "./all-inputs.component";
import NotesDisplay from "./display.component";
import { UserContext } from "../../ap/context/user.context";

const NotesHaus = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const Notes = () => {
    const { currentUser, isAuthed } = useContext(UserContext);
    const { notesMap } = useContext(NotesContext);
    const allNotes =
        notesMap &&
        Object.values(notesMap).map((note) => {
            return note;
        });
    return (
        currentUser && (
            <NotesHaus>
                <NotesDisplay allNotes={allNotes} />
                {isAuthed && <NoteInputs />}
            </NotesHaus>
        )
    );
};
export default Notes;
