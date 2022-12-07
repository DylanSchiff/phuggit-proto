import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { signInWithGooglePopup } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import Topbar from "./topbar.component";
import Botbar from "./botbar.component";
import AccountPanel from "./panel.component";
const AppWrapContainer = styled.div``;
const AppWrap = () => {
    const { currentAuth, currentData } = useContext(AccountContext);
    const { setIsPanelOpen, isPanelOpen } = useContext(AccountPanelContext);
    return (
        <AppWrapContainer>
            <Topbar
                currentAuth={currentAuth}
                currentData={currentData}
                isPanelOpen={isPanelOpen}
                setIsPanelOpen={setIsPanelOpen}
                signInWithGooglePopup={signInWithGooglePopup}
            />
            <AccountPanel
                isPanelOpen={isPanelOpen}
                setIsPanelOpen={setIsPanelOpen}
            />
            <Outlet />
            <Botbar />
        </AppWrapContainer>
    );
};
export default AppWrap;
