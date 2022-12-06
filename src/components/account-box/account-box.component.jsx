import { useContext } from "react";
import { UserContext } from "../../ap/context/user.context";
import {
    signInWithGooglePopup,
    signOutUser,
    // updateUsername,
    // updateEmail,
    // updateUserDocument,
    // createUserAccount,
} from "../../ap/utils/firebase.utils";
import styled from "styled-components";
import { useState } from "react";
// import Span from "../page-span.component";
// import ThemeSwapper from "./Theme-swapper.component";
import { ColorContext } from "../../ap/context/color.context";
const AccountBoxContainer = styled.div``;
const AccountInputContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 300px;
`;
const AccountInput = styled.input`
    text-align: center;
    flex: 3;
`;
const AccountBoxButton = styled.button`
    flex: 1;
    margin: 10px;
`;

const AccountBox = () => {
    const { currentUser, currentUserDocs } = useContext(UserContext);
    console.log(currentUserDocs);
    const AuthUser = () => {
        return currentUser ? signOutUser() : signInWithGooglePopup();
    };
    // const { currentColor } = useContext(ColorContext);
    // const [desiredDisplayName, setDesiredDisplayName] = useState("");
    // // const [desiredEmail, setDesiredEmail] = useState("");
    // const [desiredPassword, setDesiredPassword] = useState("");

    // const setName = (e) => {
    //     setDesiredDisplayName(e.target.value);
    // };
    // // const setEmail = (e) => {
    // //     setDesiredEmail(e.target.value);
    // // };
    // const setPassword = (e) => {
    //     setDesiredPassword(e.target.value);
    // };

    return (
        <AccountBoxContainer>
            {/* <Span
                margin="50px"
                textalign="center"
                lineheight="25px"
                fontsize="17.5px"
                fontsizesix="15px"
                fontsizestwo="10px"
                marginsix="10px 0"
                spantext="Update Account"
            />
            <ThemeSwapper />
            <AccountBoxButton onClick={() => AuthUser()}>
                {currentUser ? "Sign Out" : "Sign In"}
            </AccountBoxButton>

            <AccountInputContainer>
                <AccountInput
                    placeholder="Username"
                    onInput={(e) => setName(e)}
                />
                <AccountBoxButton
                    onClick={() =>
                        updateUsername(currentUser, desiredDisplayName)
                    }
                >
                    Save
                </AccountBoxButton>
            </AccountInputContainer>
            <AccountInputContainer>
                <AccountInput
                    type="email"
                    placeholder="Email"
                    onInput={(e) => setEmail(e)}
                />
                <AccountBoxButton
                    onClick={() => updateEmail(currentUser, desiredEmail)}
                >
                    Save
                </AccountBoxButton>
            </AccountInputContainer> */}

            {/* <AccountInputContainer>
                <AccountInput
                    required
                    onInput={(e) => setName(e)}
                ></AccountInput>
                <AccountInput
                    required
                    onInput={(e) => setPassword(e)}
                ></AccountInput>
                <AccountBoxButton
                    onClick={() =>
                        createUserAccount(desiredDisplayName, desiredPassword)
                    }
                >
                    Sign Up
                </AccountBoxButton>
            </AccountInputContainer> */}

            <AccountBoxButton onClick={() => AuthUser()}>
                {currentUser ? "Sign Out" : "Sign In"}
            </AccountBoxButton>
        </AccountBoxContainer>
    );
};
export default AccountBox;
