import { useContext, useState } from "react";
import ThemeSwapper from "./Theme-swapper.component";
import AccountRButton from "./account-reusable-button.component";
import { ColorContext } from "../../ap/context/color.context";
import { AccountContext } from "../../ap/context/account.context";
import { updateUsername, updateUserColor } from "../../ap/utils/firebase.utils";
import styled from "styled-components";
const AccountEditorContainer = styled.div``;
const AccountOptionsInputContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid #fff; */
`;
const AccountOptionsInput = styled.input`
    margin-bottom: 10px;
`;
const AccountEditor = () => {
    const { currentAccount, currentAccountData } = useContext(AccountContext);
    const { userName, displayName } = currentAccountData;
    const { currentColor } = useContext(ColorContext);
    const [desiredDisplayName, setDesiredDisplayName] = useState("");
    const setName = (e) => {
        setDesiredDisplayName(e.target.value);
    };

    return (
        <AccountEditorContainer>
            {`Hello ${userName ? userName : displayName}`}
            <AccountOptionsInputContainer>
                <AccountOptionsInput
                    placeholder="Update Name"
                    onInput={(e) => setName(e)}
                />
                <AccountRButton
                    buttonText="Save Name"
                    eventHandler={() =>
                        updateUsername(currentAccount, desiredDisplayName)
                    }
                />
            </AccountOptionsInputContainer>
            <AccountOptionsInputContainer>
                <ThemeSwapper />
                <AccountRButton
                    buttonText="Save Color"
                    eventHandler={() =>
                        updateUserColor(currentAccount, currentColor)
                    }
                />
            </AccountOptionsInputContainer>
        </AccountEditorContainer>
    );
};
export default AccountEditor;
