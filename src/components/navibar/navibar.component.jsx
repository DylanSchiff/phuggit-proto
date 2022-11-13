import styled from "styled-components";
import PageSpan from "../page-span.component";
import star from "../images/star.svg";
const AppNavbar = styled.div`
    width: 100vw;
    position: sticky;
    top: 0;
    min-height: 50px;
    max-height: 50px;
    background-color: var(--accent-004);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 20px;
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
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    color: var(--accent-001);
    font-size: 15px;
    font-weight: 500;
    border: 1px solid transparent;
    margin: 5px;
    user-select: none;
    &:hover {
        border: 1px solid var(--accent-001);
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const Navibar = () => {
    return (
        <AppNavbar backgroundimage={star}>
            <NavLogoContainer onClick={() => window.scrolltoheadsection()}>
                <NavLogoImageContainer>
                    <NavLogoImage src="https://www.svgrepo.com/show/233196/smile.svg" />
                </NavLogoImageContainer>
                <NavLogoHeadingContainer>
                    <PageSpan
                        color="var(--white-001)"
                        fontsize="25px"
                        fontweight="500"
                        lineheight="30px"
                        maxheight="30px"
                        cursor="pointer"
                        fontsizesix="20px"
                        spantext="99E.io"
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
