import { useContext } from "react";
import styled from "styled-components";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import PanelAccountDisplay from "./panel-account-display.component";
import PanelAccountEditor from "./panel-account-editor.component";
import PanelControls from "./panel-account-controls.component";
const PanelAccountOptionsContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        flex-flow: column nowrap;
    }
`;
const PanelAccountSection = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding: 0 20px;
`;
const PanelAccountOptions = ({ currentAuth, currentDocs }) => {
    const { isEditorOpen } = useContext(AccountPanelContext);
    return (
        <PanelAccountOptionsContainer>
            <PanelAccountSection>
                <PanelAccountDisplay
                    currentAuth={currentAuth}
                    currentDocs={currentDocs}
                />
                <PanelAccountEditor
                    currentAuth={currentAuth}
                    isEditorOpen={isEditorOpen}
                />
            </PanelAccountSection>
            <PanelControls />
        </PanelAccountOptionsContainer>
    );
};
export default PanelAccountOptions;
