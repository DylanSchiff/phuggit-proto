import styled from "styled-components";
import PageSpan from "../page-span.component";
import { DATASHEET } from "../DATASHEET";
const AppNavbar = styled.div`
    position: sticky;
    z-index: 999;
    top: 0;
    padding: 0 20px;
    width: 100vw;
    min-height: 50px;
    max-height: 50px;
    border-bottom: 1px solid var(--fade-002);
    background-color: var(--main-col);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    @media only screen and (max-width: 100px) {
        padding: 0;
    }
`;
const NavLogoContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;
const NavLogoImageContainer = styled.div`
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavLogoImage = styled.img`
    min-height: 30px;
    max-height: 30px;
    min-width: 30px;
    max-width: 30px;
    object-fit: cover;
    cursor: pointer;
`;
const NavLogoHeadingContainer = styled.div`
    padding: 0 10px;
    @media only screen and (max-width: 300px) {
        display: none;
    }
`;
const NavButton = styled.div`
    padding: 0 10px;
    margin: 5px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    cursor: pointer;
    color: var(--main-text);
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        border: 1px solid var(--fade-004);
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const Navibar = () => {
    return (
        <AppNavbar>
            <NavLogoContainer onClick={() => window.scrolltoheadsection()}>
                <NavLogoImageContainer>
                    <NavLogoImage src={DATASHEET.brandImageUrl} />
                </NavLogoImageContainer>
                <NavLogoHeadingContainer>
                    <PageSpan
                        color="var(--main-text)"
                        fontsize="25px"
                        fontweight="500"
                        lineheight="30px"
                        maxheight="30px"
                        cursor="pointer"
                        fontsizesix="20px"
                        spantext={DATASHEET.brandName}
                    />
                </NavLogoHeadingContainer>
            </NavLogoContainer>
            <NavButton onClick={() => window.scrolltocontactsection()}>
                CONNECT
            </NavButton>
        </AppNavbar>
    );
};
export default Navibar;
