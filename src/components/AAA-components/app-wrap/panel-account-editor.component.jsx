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
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--main-003);
    box-shadow: var(--shade-002);
    padding: 10px;
    margin: 10px 0;
`;
const PanelAccountEditorInputContainer = styled.div`
    flex: 1;
    width: 100%;
    max-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    &:nth-of-type(2) {
        z-index: 999;
    }
`;
const PanelAccountEditorInput = styled.input`
    width: 100%;
    min-width: 150px;
    border: none;
    outline: none;
    text-align: center;
    padding: 5px 0;
    margin: 0 5px;
    overflow: hidden;
    border-radius: 5px;
    user-select: none;
`;

const ThemeContainer = styled.div`
    min-width: 150px;
    padding: 5px 0;
    margin: 0 5px;
    max-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
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
                    maxLength="20"
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
                    maxLength="20"
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
                <ThemeContainer>
                    <ThemeSwapper isSmall isClickable />
                </ThemeContainer>
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
