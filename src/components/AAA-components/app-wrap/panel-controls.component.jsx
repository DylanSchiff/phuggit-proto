import styled from "styled-components";
import PanelButton from "./panel-button.component";
import { signOutUser } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
const PanelControlsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
`;
const PanelControls = () => {
    const { setIsPanelOpen, setIsEditorOpen, isEditorOpen } =
        useContext(AccountPanelContext);
    const { currentData } = useContext(AccountContext);
    const toggleIsEditorOpen = () => setIsEditorOpen(!isEditorOpen);
    const signOutAndClosePanel = () => {
        setIsPanelOpen(false);
        signOutUser();
    };
    return (
        <PanelControlsContainer>
            {currentData && (
                <PanelButton
                    buttonText="Profile"
                    isLink
                    routePath={currentData.routePath}
                />
            )}
            <PanelButton
                buttonText="Projects"
            />
            <PanelButton
                buttonText="Settings"
                buttonHandler={toggleIsEditorOpen}
            />
            <PanelButton
                buttonText="Sign Out"
                buttonHandler={signOutAndClosePanel}
            />
        </PanelControlsContainer>
    );
};
export default PanelControls;
