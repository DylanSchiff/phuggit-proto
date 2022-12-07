import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import styled from "styled-components";
import TopBarButton from "./topbar-button.component";
import TopbarNameplate from "./topbar-nameplate.component";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
const TopbarContainer = styled.div.attrs((props) => ({
    style: {
        borderTop: "1px solid" + props.currentColor,
    },
}))`
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 50px;
    max-height: 50px;
    width: 100vw;
    background-color: var(--main-002);
    box-shadow: var(--shade-001);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    transition: 111ms linear;
`;

const TopBarAccountGroup = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 10px;
`;

const Topbar = () => {
    const { currentAuth, currentData } = useContext(AccountContext);
    const { setIsPanelOpen, isPanelOpen } = useContext(AccountPanelContext);
    return (
        <TopbarContainer>
            <TopBarAccountGroup>
                {currentAuth && (
                    <TopbarNameplate
                        currentAuth={currentAuth}
                        currentData={currentData}
                    />
                )}
                <TopBarButton
                    currentAuth={currentAuth}
                    setIsPanelOpen={setIsPanelOpen}
                    isPanelOpen={isPanelOpen}
                />
            </TopBarAccountGroup>
        </TopbarContainer>
    );
};
export default Topbar;
