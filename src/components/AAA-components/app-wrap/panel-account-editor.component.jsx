import { useState } from "react";
import styled from "styled-components";
import PanelButton from "./panel-button.component";
import { updateHandle } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import { useContext } from "react";
const PanelAccountEditorContainer = styled.div.attrs((props) => ({
    style: {
        display: props.display,
    },
}))`
    flex-flow: column nowrap;
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
    const [desiredHandle, setDesiredHandle] = useState("");
    const setName = (e) => {
        setDesiredHandle(e.target.value);
    };
    return (
        <PanelAccountEditorContainer display={isEditorOpen ? "flex" : "none"}>
            <PanelAccountEditorInputContainer>
                <PanelAccountEditorInput
                    placeholder="Change Handle"
                    onInput={(e) => setName(e)}
                />
                <PanelButton
                    buttonText="Save"
                    buttonHandler={() =>
                        updateHandle(currentAuth, desiredHandle)
                    }
                />
            </PanelAccountEditorInputContainer>
        </PanelAccountEditorContainer>
    );
};
export default PanelAccountEditor;
