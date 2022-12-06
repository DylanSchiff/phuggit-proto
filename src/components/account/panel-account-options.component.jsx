import styled from "styled-components";
import { signOutUser } from "../../ap/utils/firebase.utils";
import AccountRButton from "./account-reusable-button.component";
const AccountOptionsContainer = styled.div``;
const AccountOptions = () => {
    return (
        <AccountOptionsContainer>
            <AccountRButton
                buttonText="Sign Out"
                eventHandler={() => signOutUser()}
            />
        </AccountOptionsContainer>
    );
};
export default AccountOptions;
