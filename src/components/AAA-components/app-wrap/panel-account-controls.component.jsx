import styled from "styled-components";
import PanelButton from "./panel-button.component";
import { signOutUser } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
const PanelAccountControlsContainer = styled.div`
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
`;
const PanelAccountControls = () => {
    const { setIsPanelOpen } = useContext(AccountPanelContext);
    const { currentData } = useContext(AccountContext);
    const signOutAndClosePanel = () => {
        setIsPanelOpen(false);
        signOutUser();
    };
    return (
        <PanelAccountControlsContainer>
            <PanelButton buttonText="Home" isLink routePath="/" />
            <PanelButton buttonText="Explore" isLink routePath="/explore" />
            {currentData && (
                <PanelButton
                    buttonText="Profile"
                    isLink
                    routePath={`/${currentData.routePath}`}
                />
            )}
            <PanelButton buttonText="Guides" isLink routePath="/guides" />
            <PanelButton buttonText="Contact" isLink routePath="/contact" />
            <PanelButton
                buttonText="Sign Out"
                buttonHandler={signOutAndClosePanel}
            />
        </PanelAccountControlsContainer>
    );
};
export default PanelAccountControls;
