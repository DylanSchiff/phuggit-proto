import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Topbar from "./topbar.component";
import Botbar from "./botbar.component";
import AccountPanel from "./panel.component";
import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
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
            />
            <AccountPanel isPanelOpen={isPanelOpen} />
            <Outlet />
            <Botbar />
        </AppWrapContainer>
    );
};
export default AppWrap;
