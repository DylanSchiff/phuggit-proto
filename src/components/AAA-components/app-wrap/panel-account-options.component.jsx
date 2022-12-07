import styled from "styled-components";
import PanelButton from "./panel-button.component";
import { signOutUser } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import { useContext } from "react";
import PanelAccountDisplay from "./panel-account-display.component";
import PanelAccountEditor from "./panel-account-editor.component";
import { useState } from "react";
const PanelAccountOptionsContainer = styled.div``;
const PanelAccountButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const PanelAccountOptions = ({ currentAuth, currentDocs }) => {
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const toggleIsEditorOpen = () => setIsEditorOpen(!isEditorOpen);
    const { setIsPanelOpen } = useContext(AccountPanelContext);
    const signOutAndClosePanel = () => {
        setIsPanelOpen(false);
        signOutUser();
    };
    return (
        <PanelAccountOptionsContainer>
            <PanelAccountDisplay
                currentAuth={currentAuth}
                currentDocs={currentDocs}
            />
            <PanelAccountButtons>
                <PanelButton
                    buttonText="Settings"
                    buttonHandler={toggleIsEditorOpen}
                />
                <PanelButton
                    buttonText="Sign Out"
                    buttonHandler={signOutAndClosePanel}
                />
            </PanelAccountButtons>
            <PanelAccountEditor
                currentAuth={currentAuth}
                isEditorOpen={isEditorOpen}
            />
        </PanelAccountOptionsContainer>
    );
};
export default PanelAccountOptions;
