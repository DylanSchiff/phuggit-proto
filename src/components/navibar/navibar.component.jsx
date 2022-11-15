import styled from "styled-components";
import PageSpan from "../page-span.component";
// import star from "../images/star.svg";
const AppNavbar = styled.div`
    position: sticky;
    top: 0;
    padding: 0 20px;
    width: 100vw;
    min-height: 50px;
    max-height: 50px;
    /* background-color: var(--main-002);
    box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
        0 3px 8px var(--fade-002); */
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
    /* color: var(--accent-001); */
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        /* border: 1px solid var(--accent-001); */
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
                    <NavLogoImage src="https://www.svgrepo.com/show/233196/smile.svg" />
                </NavLogoImageContainer>
                <NavLogoHeadingContainer>
                    <PageSpan
                        // color="var(--white-001)"
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
