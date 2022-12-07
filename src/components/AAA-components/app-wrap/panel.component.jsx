import styled from "styled-components";
// import AccountOptions from "./panel-account-options.component";
// import SignInOptions from "./panel-signin-options.component";
import PanelAccountOptions from "./panel-account-options.component";
import PanelAuthOptions from "./panel-account-options.component";

const AccountPanelContainer = styled.div.attrs((props) => ({
    style: {
        display: props.display,
    },
}))`
    position: absolute;
    z-index: 999;
    top: 70px;
    right: 20px;
    padding: 20px;
    background-color: var(--main-001);
    box-shadow: var(--shade-001);
`;
const AccountPanel = ({ currentAuth, currentDocs, isPanelOpen }) => {
    return (
        <AccountPanelContainer display={isPanelOpen ? "flex" : "none"}>
            {currentAuth ? <PanelAccountOptions /> : <PanelAuthOptions />}
        </AccountPanelContainer>
    );
};
export default AccountPanel;
