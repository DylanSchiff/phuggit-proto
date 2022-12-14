import { useState } from "react";
import styled from "styled-components";
import PanelButton from "./panel-button.component";
import ColorCard from "./theme-color-card.component";
import {
    updateHandle,
    updateUserName,
    updateUserColor,
    // updateUserEffects,
} from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import { useContext } from "react";
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
    /* max-height: 50px; */
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
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
    flex: 1;
    width: 100%;
    min-width: 150px;
    padding: 5px 0;
    margin: 0 5px;
    /* max-height: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PanelAccountSpan = styled.span`
    font-weight: 500;
    font-size: 15px;
    flex: 1;
    width: 100%;
    text-align: start;
    padding: 10px;
`;

const PanelAccountEditor = ({ isEditorOpen }) => {
    const { currentAuth } = useContext(AccountContext);
    const { currentColor, currentEffects, hasEffects, shadowSliderValue } =
        useContext(ColorContext);
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
            <PanelAccountSpan>Update Settings</PanelAccountSpan>
            <PanelAccountEditorInputContainer>
                <PanelAccountEditorInput
                    placeholder="Name"
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
                    placeholder="@Handle"
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
                    <ColorCard />
                </ThemeContainer>
                <PanelButton
                    buttonText="Save"
                    buttonHandler={() =>
                        updateUserColor(
                            currentAuth,
                            currentColor,
                            currentEffects,
                            hasEffects,
                            shadowSliderValue
                        )
                    }
                />
            </PanelAccountEditorInputContainer>
        </PanelAccountEditorContainer>
    );
};
export default PanelAccountEditor;

// <ThemeSwapper isSmall isClickable />
