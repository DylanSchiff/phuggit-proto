import styled from "styled-components";
import PanelButton from "./panel-button.component";
import { signOutUser } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import { useContext } from "react";
const PanelAccountOptionsContainer = styled.div``;
const PanelAccountOptions = ({ currentAuth, currentDocs }) => {
    const { setIsPanelOpen } = useContext(AccountPanelContext);
    const signOutAndClosePanel = () => {
        setIsPanelOpen(false);
        signOutUser();
    };
    return (
        <PanelAccountOptionsContainer>
            <PanelButton
                buttonText="Sign Out"
                buttonHandler={signOutAndClosePanel}
            />
        </PanelAccountOptionsContainer>
    );
};
export default PanelAccountOptions;
