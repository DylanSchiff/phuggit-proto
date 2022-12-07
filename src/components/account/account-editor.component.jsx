import { useContext, useState } from "react";
import ThemeSwapper from "./Theme-swapper.component";
import AccountRButton from "./account-reusable-button.component";
import { ColorContext } from "../../ap/context/color.context";
import {
    updateUserName,
    updateUserColor,
} from "../../ap/utils/freshfire.utils";
import styled from "styled-components";
import { FreshAccountContext } from "../../ap/context/fresh-account.context";
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
    /* background-color: var(--main-003); */
    border: none;
    outline: none;
    text-align: center;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 5px;
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
            <AccountOptionsInputContainer>
                <AccountOptionsInput
                    placeholder={
                        userName &&
                        `current : ${userName ? userName : displayName}`
                    }
                    onInput={(e) => setName(e)}
                />
                <AccountRButton
                    buttonText="Update Name"
                    eventHandler={() =>
                        updateUserName(currentAuth, desiredDisplayName)
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
