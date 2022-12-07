import { useContext, useState } from "react";
import ThemeSwapper from "./Theme-swapper.component";
import AccountRButton from "./account-reusable-button.component";
import { ColorContext } from "../../ap/context/color.context";
import {
    updateUsername,
    updateUserColor,
} from "../../ap/utils/freshfire.utils";
import styled from "styled-components";
import { FreshAccountContext } from "../../ap/context/fresh-account.context";
const AccountEditorContainer = styled.div``;
const AccountOptionsInputContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`;
const AccountOptionsInput = styled.input`
    margin-bottom: 10px;
`;
const AccountEditor = () => {
    const { currentAuth, currentDocs } = useContext(FreshAccountContext);
    const { userName, displayName } = currentDocs;
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
                        updateUsername(currentAuth, desiredDisplayName)
                    }
                />
            </AccountOptionsInputContainer>
            <AccountOptionsInputContainer>
                <ThemeSwapper />
                <AccountRButton
                    buttonText="Save Color"
                    eventHandler={() =>
                        updateUserColor(currentAuth, currentColor)
                    }
                />
            </AccountOptionsInputContainer>
        </AccountEditorContainer>
    );
};
export default AccountEditor;
