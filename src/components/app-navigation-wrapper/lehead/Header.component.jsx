import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../ap/context/user.context";
import theP from "../../../phuggitp.png";
import ThemeSwapper from "./Theme-swapper.component";
import {
    signInWithGooglePopup,
    signOutUser,
} from "../../../ap/utils/firebase.utils";
const HeaderContainer = styled.div`
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 50px;
    max-height: 50px;
    width: 100vw;
    background-color: var(--main-002);
    box-shadow: var(--shade-001);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;
const HeaderBrandingContainer = styled.div`
    padding: 0 20px;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;
const HeaderImageContainer = styled(Link)`
    height: 50px;
    cursor: pointer;
`;
const HeaderImage = styled.img`
    object-fit: cover;
    height: 50px;
`;

const NavControls = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 50px;
`;
const NavButton = styled.div`
    padding: 0 10px;
    height: 40px;
    margin: 0 5px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    cursor: pointer;
    color: var(--thir-002);
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    &:hover {
        border: 1px solid var(--thir-004);
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const Header = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <HeaderContainer>
            <HeaderBrandingContainer>
                <HeaderImageContainer
                    onClick={() => window.scrolltoheadsection()}
                >
                    <HeaderImage src={theP} />
                </HeaderImageContainer>
            </HeaderBrandingContainer>
            <NavControls>
                <NavButton onClick={() => window.scrolltocontactsection()}>
                    CONNECT
                </NavButton>
                <NavButton
                    onClick={
                        !currentUser
                            ? () => signInWithGooglePopup()
                            : () => signOutUser()
                    }
                >
                    {currentUser ? "Sign Out" : "Sign In"}
                </NavButton>
                <ThemeSwapper />
            </NavControls>
        </HeaderContainer>
    );
};
export default Header;
