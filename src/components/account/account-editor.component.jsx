import { useState } from "react";
import ThemeSwapper from "./Theme-swapper.component";
import AccountRButton from "./account-reusable-button.component";
import {
    updateUserName,
    updateUserColor,
} from "../../ap/utils/freshfire.utils";
import styled from "styled-components";
const AccountEditorContainer = styled.div``;
const AccountOptionsInputContainer = styled.div`
    flex: 1;
    max-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;
const AccountOptionsInput = styled.input`
    border: none;
    outline: none;
    text-align: center;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 5px;
`;
const AccountEditor = ({ currentAuth, currentDocs, currentColor }) => {
    // const { userName, displayName } = currentDocs;
    const [desiredDisplayName, setDesiredDisplayName] = useState("");
    const setName = (e) => {
        setDesiredDisplayName(e.target.value);
    };
    return (
        <AccountEditorContainer>
            <AccountOptionsInputContainer>
                <AccountOptionsInput
                    placeholder="Change Name"
                    onInput={(e) => setName(e)}
                />
                <AccountRButton
                    buttonText="Save"
                    eventHandler={() =>
                        updateUserName(currentAuth, desiredDisplayName)
                    }
                />
            </AccountOptionsInputContainer>
            <AccountOptionsInputContainer>
                <ThemeSwapper />
                <AccountRButton
                    buttonText="Save Theme"
                    eventHandler={() =>
                        updateUserColor(currentAuth, currentColor)
                    }
                />
            </AccountOptionsInputContainer>
        </AccountEditorContainer>
    );
};
export default AccountEditor;
