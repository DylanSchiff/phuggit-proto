import styled from "styled-components";
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
    transition: 111ms linear;
    padding: 0 25px;
`;

const TopBarAccountGroup = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Topbar = ({
    currentAuth,
    currentData,
    isPanelOpen,
    setIsPanelOpen,
    signInWithGooglePopup,
}) => {
    return (
        <TopbarContainer>
            Logo
            <TopBarAccountGroup>
                {currentAuth && (
                    <TopbarNameplate
                        currentAuth={currentAuth}
                        currentData={currentData}
                    />
                )}
                <TopBarButton
                    currentAuth={currentAuth}
                    setIsPanelOpen={setIsPanelOpen}
                    isPanelOpen={isPanelOpen}
                    signInWithGooglePopup={signInWithGooglePopup}
                />
            </TopBarAccountGroup>
        </TopbarContainer>
    );
};
export default Topbar;
