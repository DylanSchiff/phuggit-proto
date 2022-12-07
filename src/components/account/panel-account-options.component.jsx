import styled from "styled-components";
import { signOutUser } from "../../ap/utils/freshfire.utils";
import AccountRButton from "./account-reusable-button.component";
import AccountEditor from "./account-editor.component";
import AccountDisplay from "./account-display.component";
import { Link } from "react-router-dom";
const AccountOptionsContainer = styled.div``;
const AccountOptions = ({ currentAuth, currentDocs, currentColor }) => {
    return (
        <AccountOptionsContainer>
            <AccountDisplay currentDocs={currentDocs} />
            <AccountEditor
                currentAuth={currentAuth}
                currentDocs={currentDocs}
                currentColor={currentColor}
            />
            <Link to={currentDocs.routePath}>Profile</Link>
            <AccountRButton
                buttonText="Sign Out"
                eventHandler={() => signOutUser()}
            />
        </AccountOptionsContainer>
    );
};
export default AccountOptions;
