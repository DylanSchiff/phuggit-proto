import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./lehead/Header.component";
import Footer from "./lefoot/Footer.component";
const NavigationWrapContainer = styled.div`
    flex: 1;
    max-width: 100vw;
`;
const NavigationWrap = () => {
    return (
        <NavigationWrapContainer>
            <Header />
            <Outlet />
            <Footer />
        </NavigationWrapContainer>
    );
};
export default NavigationWrap;
