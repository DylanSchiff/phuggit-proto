import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../ap/context/user.context";
import theP from "../../../phuggitp.png";
import { ColorContext } from "../../../ap/context/color.context";
import AccountButton from "../../account/account-main-button.component";
import AccountPanel from "../../account/account-panel.component";

import {
    signInWithGooglePopup,
    signOutUser,
} from "../../../ap/utils/freshfire.utils";
import { FreshAccountContext } from "../../../ap/context/fresh-account.context";
const HeaderContainer = styled.div.attrs((props) => ({
    style: {
        borderTop: "1px solid" + props.currentColor,
    },
}))`
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
    transition: 111ms linear;
`;
const HeaderBrandingContainer = styled(Link)`
    padding: 0 20px;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;
const HeaderImageContainer = styled.div`
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
    const { currentDocs } = useContext(FreshAccountContext);
    return (
        <>
            <HeaderContainer
                currentColor={currentDocs ? currentDocs.color : "#fff"}
            >
                <HeaderBrandingContainer to="/">
                    <HeaderImageContainer>
                        <HeaderImage src={theP} />
                    </HeaderImageContainer>
                </HeaderBrandingContainer>
                <AccountButton />
            </HeaderContainer>
            <AccountPanel />
        </>
    );
};
export default Header;
