// import { useState } from "react";
// import { useContext } from "react";
import styled from "styled-components";
// import { AccountContext } from "../../ap/context/account.context";
import { signInWithGooglePopup } from "../../ap/utils/firebase.utils";
import AccountRButton from "./account-reusable-button.component";
const SignInOptionsContainer = styled.div``;




const SignInOptions = () => {

    return (
        <SignInOptionsContainer>
            {/* <SignInOptionsInputContainer> */}
                <AccountRButton
                    buttonText="Connect Account"
                    eventHandler={() => signInWithGooglePopup()}
                ></AccountRButton>
            {/* </SignInOptionsInputContainer> */}
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
