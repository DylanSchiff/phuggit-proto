import { useContext } from "react";
import styled from "styled-components";
import { AccountContext } from "../../ap/context/account.context";
const AccountButtonContainer = styled.div`
    padding: 0 10px;
    height: 40px;
    margin: 0 5px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    cursor: pointer;
    color: var(--thir-002);
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    &:hover {
        border: 1px solid var(--thir-004);
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const AccountButton = () => {
    const { currentAccount, isAccountPanelOpen, setIsAccountPanelOpen } =
        useContext(AccountContext);

    const toggleAccountPanelVisibility = () =>
        setIsAccountPanelOpen(!isAccountPanelOpen);

    return (
        <AccountButtonContainer onClick={() => toggleAccountPanelVisibility()}>
            {currentAccount ? "Account" : "Sign In"}
        </AccountButtonContainer>
    );
};
export default AccountButton;
