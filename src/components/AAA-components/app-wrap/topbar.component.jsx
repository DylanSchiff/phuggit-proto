import { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../../AAA/context/AAA-context/color.context";
import TopBarButton from "./topbar-button.component";
import TopbarNameplate from "./topbar-nameplate.component";
const TopbarContainer = styled.div.attrs((props) => ({
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
    padding: 0 25px;
`;

const Topbar = ({
    currentAuth,
    currentData,
    isPanelOpen,
    setIsPanelOpen,
    signInWithGooglePopup,
}) => {
    const { currentColor } = useContext(ColorContext);
    return (
        <TopbarContainer currentColor={currentColor}>
            <TopbarNameplate />
            <TopBarButton
                currentAuth={currentAuth}
                currentData={currentData}
                setIsPanelOpen={setIsPanelOpen}
                isPanelOpen={isPanelOpen}
                signInWithGooglePopup={signInWithGooglePopup}
            />
        </TopbarContainer>
    );
};
export default Topbar;
