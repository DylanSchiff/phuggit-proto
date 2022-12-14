import styled from "styled-components";
import PanelAccountOptions from "./panel-account-options.component";
import PanelAuthOptions from "./panel-account-options.component";
const AccountPanelContainer = styled.div.attrs((props) => ({
    style: {
        display: props.display,
    },
}))`
    position: sticky;
    z-index: 990;
    top: 50px;
    right: 0px;
    flex: 1;
    width: 100%;
    padding: 10px 15px 15px 15px;
    background-color: var(--main-002);
    border: 1px solid var(--main-001);
    box-shadow: var(--shade-001);
    overflow: hidden;
    /* border-radius: 10px; */
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
