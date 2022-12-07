import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theP from "../../../phuggitp.png";
import { ColorContext } from "../../../ap/context/color.context";
import AccountButton from "../../account/account-main-button.component";
import AccountPanel from "../../account/account-panel.component";
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
const Header = () => {
    const { currentColor } = useContext(ColorContext);
    return (
        <>
            <HeaderContainer
                currentColor={currentColor ? currentColor : "transparent"}
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
