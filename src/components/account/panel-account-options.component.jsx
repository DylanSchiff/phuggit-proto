// import { useContext, useState } from "react";
import styled from "styled-components";
import {
    signOutUser,
    // updateUsername,
    // updateUserColor,
} from "../../ap/utils/firebase.utils";
// import { AccountContext } from "../../ap/context/account.context";
import AccountRButton from "./account-reusable-button.component";
// import ThemeSwapper from "./Theme-swapper.component";
// import { ColorContext } from "../../ap/context/color.context";
import AccountEditor from "./account-editor.component";

const AccountOptionsContainer = styled.div``;
// const AccountOptionsInputContainer = styled.div`
//     display: flex;
//     flex-flow: row nowrap;
//     align-items: center;
// `;
// const AccountOptionsInput = styled.input`
//     margin-bottom: 10px;
// `;
const AccountOptions = () => {
    // const { currentAccount } = useContext(AccountContext);
    // const { currentColor } = useContext(ColorContext);
    // const [desiredDisplayName, setDesiredDisplayName] = useState("");
    // const setName = (e) => {
    //     setDesiredDisplayName(e.target.value);
    // };

    return (
        <AccountOptionsContainer>
            {/* <AccountOptionsInputContainer>
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
            </AccountOptionsInputContainer> */}

            <AccountEditor />
            <AccountRButton
                buttonText="Sign Out"
                eventHandler={() => signOutUser()}
            />
        </AccountOptionsContainer>
    );
};
export default AccountOptions;
