import { useState } from "react";
import styled from "styled-components";
import PanelButton from "./panel-button.component";
import {
    updateHandle,
    updateUserName,
    updateUserColor,
} from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import { useContext } from "react";
import ThemeSwapper from "./theme-swapper.component";
import { ColorContext } from "../../../AAA/context/AAA-context/color.context";
const PanelAccountEditorContainer = styled.div.attrs((props) => ({
    style: {
        display: props.display,
    },
}))`
    flex-flow: column nowrap;
    background-color: var(--main-003);
    padding: 10px;
    margin: 10px 0;
`;
const PanelAccountEditorInputContainer = styled.div`
    flex: 1;
    max-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;
const PanelAccountEditorInput = styled.input`
    border: none;
    outline: none;
    text-align: center;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 5px;
`;

const PanelAccountEditor = ({ isEditorOpen }) => {
    const { currentAuth } = useContext(AccountContext);
    const { currentColor } = useContext(ColorContext);
    const [desiredName, setDesiredName] = useState("");
    const [desiredHandle, setDesiredHandle] = useState("");
    const setName = (e) => {
        setDesiredName(e.target.value);
    };
    const setHandle = (e) => {
        setDesiredHandle(e.target.value);
    };
    return (
        <PanelAccountEditorContainer display={isEditorOpen ? "flex" : "none"}>
            <PanelAccountEditorInputContainer>
                <PanelAccountEditorInput
                    placeholder="Change Name"
                    onInput={(e) => setName(e)}
                />
                <PanelButton
                    buttonText="Save"
                    buttonHandler={() =>
                        updateUserName(currentAuth, desiredName)
                    }
                />
            </PanelAccountEditorInputContainer>
            <PanelAccountEditorInputContainer>
                <PanelAccountEditorInput
                    placeholder="Change Handle"
                    onInput={(e) => setHandle(e)}
                />
                <PanelButton
                    buttonText="Save"
                    buttonHandler={() =>
                        updateHandle(currentAuth, desiredHandle)
                    }
                />
            </PanelAccountEditorInputContainer>
            <PanelAccountEditorInputContainer>
                <ThemeSwapper isSmall isClickable />
                <PanelButton
                    buttonText="Save"
                    buttonHandler={() =>
                        updateUserColor(currentAuth, currentColor)
                    }
                />
            </PanelAccountEditorInputContainer>
        </PanelAccountEditorContainer>
    );
};
export default PanelAccountEditor;
