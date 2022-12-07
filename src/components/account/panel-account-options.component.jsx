import styled from "styled-components";
import { signOutUser } from "../../ap/utils/freshfire.utils";
import AccountRButton from "./account-reusable-button.component";
import AccountEditor from "./account-editor.component";
const AccountOptionsContainer = styled.div``;
const AccountOptions = () => {
    return (
        <AccountOptionsContainer>
            <AccountEditor />
            <AccountRButton
                buttonText="Sign Out"
                eventHandler={() => signOutUser()}
            />
        </AccountOptionsContainer>
    );
};
export default AccountOptions;
