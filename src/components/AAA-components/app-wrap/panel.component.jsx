import styled from "styled-components";
import PanelAccountOptions from "./panel-account-options.component";
import PanelAuthOptions from "./panel-account-options.component";
const AccountPanelContainer = styled.div.attrs((props) => ({
    style: {
        display: props.display,
    },
}))`
    position: absolute;
    min-width: 275px;
    z-index: 999;
    top: 70px;
    right: 25px;
    padding: 25px;
    background-color: var(--main-001);
    box-shadow: var(--shade-001);
`;
const AccountPanel = ({
    currentAuth,
    currentDocs,
    isPanelOpen,
    setIsPanelOpen,
}) => {
    return (
        <AccountPanelContainer display={isPanelOpen ? "flex" : "none"}>
            {currentAuth ? (
                <PanelAccountOptions
                    currentAuth={currentAuth}
                    currentDocs={currentDocs}
                    setIsPanelOpen={setIsPanelOpen}
                />
            ) : (
                <PanelAuthOptions />
            )}
        </AccountPanelContainer>
    );
};
export default AccountPanel;
