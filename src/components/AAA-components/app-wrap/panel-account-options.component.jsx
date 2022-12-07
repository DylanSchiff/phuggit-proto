import { useContext } from "react";
import styled from "styled-components";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";

import PanelAccountDisplay from "./panel-account-display.component";
import PanelAccountEditor from "./panel-account-editor.component";
import PanelControls from "./panel-controls.component";
const PanelAccountOptionsContainer = styled.div`
    flex: 1;
    width: 100%;
`;
const PanelAccountOptions = ({ currentAuth, currentDocs }) => {
    const { isEditorOpen } = useContext(AccountPanelContext);
    return (
        <PanelAccountOptionsContainer>
            <PanelAccountDisplay
                currentAuth={currentAuth}
                currentDocs={currentDocs}
            />
            <PanelControls />
            <PanelAccountEditor
                currentAuth={currentAuth}
                isEditorOpen={isEditorOpen}
            />
        </PanelAccountOptionsContainer>
    );
};
export default PanelAccountOptions;
