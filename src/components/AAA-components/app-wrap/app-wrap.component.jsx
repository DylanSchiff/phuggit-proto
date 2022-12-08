import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { signInWithGooglePopup } from "../../../AAA/utils/AAA-utilz/firebase.utils";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import Topbar from "./topbar.component";
import Botbar from "./botbar.component";
const AppWrapContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
`;
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

            <Outlet />
            <Botbar />
        </AppWrapContainer>
    );
};
export default AppWrap;
