import { useContext } from "react";
import styled from "styled-components";
import { AccountContext } from "../../ap/context/account.context";
import AccountOptions from "./panel-account-options.component";
import SignInOptions from "./panel-signin-options.component";
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
const AccountPanel = () => {
    const { currentAccount, isAccountPanelOpen } = useContext(AccountContext);
    return (
        <AccountPanelContainer display={isAccountPanelOpen ? "flex" : "none"}>
            {currentAccount ? <AccountOptions /> : <SignInOptions />}
        </AccountPanelContainer>
    );
};
export default AccountPanel;
