import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Topbar from "./topbar.component";
import Botbar from "./botbar.component";
const AppWrapContainer = styled.div``;
const AppWrap = () => {
    return (
        <AppWrapContainer>
            <Topbar />
            <Outlet />
            <Botbar />
        </AppWrapContainer>
    );
};
export default AppWrap;
