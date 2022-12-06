// import { useState } from "react";
// import { useContext } from "react";
import styled from "styled-components";
// import { AccountContext } from "../../ap/context/account.context";
import { signInWithGooglePopup } from "../../ap/utils/firebase.utils";
import AccountRButton from "./account-reusable-button.component";
const SignInOptionsContainer = styled.div``;

const SignInOptionsInputContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
// const SignInOptionsInput = styled.input`
//     margin-bottom: 10px;
// `;

const SignInOptions = () => {
    // const { currentAccount } = useContext(AccountContext);
    // const [uName, setUName] = useState("");
    // const [uPass, setUPass] = useState("");
    // const updateUserInfo = (e, isPass) => {
    //     return isPass ? setUPass(e.target.value) : setUName(e.target.value);
    // };
    return (
        <SignInOptionsContainer>
            <SignInOptionsInputContainer>
                {/* <SignInOptionsInput onInput={(e) => updateUserInfo(e)} />
                <SignInOptionsInput
                    type="password"
                    onInput={(e) => updateUserInfo(e, true)}
                /> */}
                <AccountRButton
                    buttonText="Connect Account"
                    eventHandler={() => signInWithGooglePopup()}
                ></AccountRButton>
            </SignInOptionsInputContainer>
        </SignInOptionsContainer>
    );
};
export default SignInOptions;

// README

// Sign in or create account was the original idea, the ruins are that of a.. input name/pass combo
// user would have been able to log in if it's the correct pass username,
// then to create or anything, you can verify account

// however.. seemed to be too risky in transfer due to current lack of auth security measures

// for now, it'll log in using a google verification, then completing account setup will verify account
// verified badge, founder badge, etc shown on acc
