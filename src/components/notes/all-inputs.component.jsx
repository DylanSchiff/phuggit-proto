import { useState, useContext } from "react";
// import { createNote } from "../../ap/utils/firebase.utils";
import styled from "styled-components";
import { ColorContext } from "../../ap/context/color.context";
import {
    creatorHandler,
    titleHandler,
    subtitleHandler,
    topicHandler,
    imageURLHandler,
    textHandler,
    tagsHandler,
} from "./note-handlers";
import Span from "../reusable/Span.component";
const NoteInputsContainer = styled.div.attrs((props) => ({
    style: {
        borderTop: "1px solid" + props.currentColor,
    },
}))`
    background-color: var(--main-001);
    box-shadow: var(--shade-001);
    flex: 1;
    width: 100%;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    transition: 111ms linear;
`;
const NotesInput = styled.input`
    border: none;
    outline: none;
    text-align: center;
    height: 40px;
    width: 100%;
    border-radius: 10px;
    background-color: var(--thir-002);
    box-shadow: var(--shade-001);
    color: var(--main-001);
    font-weight: 500;
    &:focus {
        box-shadow: var(--shade-002);
    }
`;

const NotesButton = styled.button.attrs((props) => ({
    style: {
        backgroundColor: props.currentColor,
    },
}))`
    width: 100%;
    margin: 0px 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0px 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 111ms linear;
    font-weight: 600;
    box-shadow: var(--shade-001);
    color: var(--thir-001);
    &:active {
        transform: scale(0.9);
    }
    &:hover {
        color: var(--main-001);
    }
`;
const NoteInputs = () => {
    const { currentColor } = useContext(ColorContext);
    const [note, setNote] = useState({
        creator: null,
        title: null,
        subtitle: null,
        topic: null,
        imageURL: null,
        text: null,
        tags: null,
    });
    const writeNoteToDB = () => {
        // const randomID = Math.round(Math.random() * 100000);
        // const { creator, title, subtitle, topic, imageURL, text, tags } = note;
        // const noteObj = {
        //     id: creator ? `${creator.replace(" ", "-")}-${randomID}` : null,
        //     creator: creator ? creator : null,
        //     title: title ? title : null,
        //     subtitle: subtitle ? subtitle : null,
        //     topic: topic ? topic : null,
        //     imageURL: imageURL ? imageURL : null,
        //     text: text ? text : null,
        //     tags: tags ? tags : null,
        // };
        // return creator && text
        //     ? // createNote(noteObj)
        //       ""
        //     : alert("CREATOR and TEXT needed");
    };
    return (
        <>
            <Span
                margin="40px 0"
                fontsize="25px"
                fontweight="700"
                spanContent="Create a note"
            />
            <NoteInputsContainer currentColor={currentColor}>
                <NotesInput
                    placeholder="creator"
                    onInput={(e) => creatorHandler(e, note, setNote)}
                />
                <NotesInput
                    placeholder="title"
                    onInput={(e) => titleHandler(e, note, setNote)}
                />
                <NotesInput
                    placeholder="subtitle"
                    onInput={(e) => subtitleHandler(e, note, setNote)}
                />
                <NotesInput
                    placeholder="topic"
                    onInput={(e) => topicHandler(e, note, setNote)}
                />
                <NotesInput
                    placeholder="text"
                    onInput={(e) => textHandler(e, note, setNote)}
                />
                <NotesInput
                    placeholder="image URL"
                    onInput={(e) => imageURLHandler(e, note, setNote)}
                />
                <NotesInput
                    placeholder="tags (per comma)"
                    onInput={(e) => tagsHandler(e, note, setNote)}
                />
                <NotesButton
                    onClick={() => writeNoteToDB()}
                    currentColor={currentColor}
                >
                    Create Note
                </NotesButton>
            </NoteInputsContainer>
        </>
    );
};
export default NoteInputs;
