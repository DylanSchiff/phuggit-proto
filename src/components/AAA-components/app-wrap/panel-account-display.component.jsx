import { useContext } from "react";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import styled from "styled-components";
// import ThemeSwapper from "./theme-swapper.component";
import ColorCube from "./theme-cube.component";
import { ColorContext } from "../../../AAA/context/AAA-context/color.context";

const PanelAccountDisplayWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`;
const PanelAccountDisplayContainer = styled.div`
    flex: 1;
    width: 100%;
    min-height: 150px;
    padding: 10px;
    padding-left: 0;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: var(--main-003);
    box-shadow: var(--shade-002);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    overflow: hidden;
`;
const PanelAccountDisplaySettings = styled.div`
    /* flex: 1; */
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    font-size: 12.5px;
    cursor: pointer;
    user-select: none;
    margin-bottom: 10px;
    padding-right: 2.5px;
`;
const PanelAccountDisplayDisplay = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    @media only screen and (max-width: 400px) {
        flex-flow: column nowrap;
    }
`;
const PanelAccountDisplayIntro = styled.div`
    flex: 1;
    width: 100%;
    @media only screen and (max-width: 400px) {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
`;
const PanelAccountDisplaySpan = styled.div`
    font-size: ${({ fontsize }) => fontsize};
    font-weight: ${({ fontweight }) => fontweight};
    user-select: none;
    white-space: nowrap;
    margin: ${({ margin }) => margin};
`;
const PanelAccountDisplayBadges = styled.div`
    padding-top: 10px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    @media only screen and (max-width: 400px) {
        justify-content: center;
    }
`;
const PanelBadge = styled.div`
    border-radius: 4px;
    margin: 2.5px;
    padding: 2.5px 5px;
    background-color: var(--thir-004);
    color: var(--main-004);
    font-weight: 300;
    min-height: 20px;
    min-width: 20px;
    max-height: 20px;
    max-width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    overflow: hidden;
`;
const PanelAccountDisplayFollowContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    margin-bottom: 10px;
    @media only screen and (max-width: 400px) {
        justify-content: center;
        padding-left: 0;
        margin-top: 10px;
    }
`;
const PanelAccountDisplay = () => {
    const {
        isEditorOpen,
        setIsEditorOpen,
        // isBadgesOpen,
        // setIsBadgesOpen,
        // isFollowingOpen,
        // setIsFollowingOpen,
    } = useContext(AccountPanelContext);
    const toggleIsEditorOpen = () => setIsEditorOpen(!isEditorOpen);
    // const toggleIsBadgesOpen = () => setIsBadgesOpen(!isBadgesOpen);
    // const toggleIsFollowingOpen = () => setIsFollowingOpen(!isFollowingOpen);
    const { currentData } = useContext(AccountContext);
    const { displayName, handle, badges, followers, following } = currentData;
    const {
        hasEffects,
        currentColor,
        currentEffects,
        lightcolor,
        darkcolor,
        darkercolor,
    } = useContext(ColorContext);
    return (
        currentData && (
            <PanelAccountDisplayWrapper>
                <PanelAccountDisplaySettings>
                    {/* <PanelAccountDisplaySpan
                        onClick={() => toggleIsFollowingOpen()}
                        margin="0 0 0 10px"
                    >
                        peeps
                    </PanelAccountDisplaySpan>
                    <PanelAccountDisplaySpan
                        onClick={() => toggleIsBadgesOpen()}
                        margin="0 0 0 10px"
                    >
                        badges
                    </PanelAccountDisplaySpan> */}
                    <PanelAccountDisplaySpan
                        onClick={() => toggleIsEditorOpen()}
                        margin="0 0 0 10px"
                    >
                        edit
                    </PanelAccountDisplaySpan>
                </PanelAccountDisplaySettings>
                <PanelAccountDisplayContainer>
                    <PanelAccountDisplayDisplay>
                        {/* <ThemeSwapper /> */}
                        <ColorCube
                            hasEffects={hasEffects}
                            currentColor={currentColor}
                            lightcolor={lightcolor}
                            darkcolor={darkcolor}
                            darkercolor={darkercolor}
                            shadowString={currentEffects}
                        />
                        <PanelAccountDisplayIntro>
                            <PanelAccountDisplaySpan
                                fontsize="20px"
                                fontweight="600"
                            >
                                {currentData && displayName}
                            </PanelAccountDisplaySpan>
                            <PanelAccountDisplaySpan fontsize="15px">
                                {`@${handle}`}
                            </PanelAccountDisplaySpan>
                            {badges && (
                                <PanelAccountDisplayBadges>
                                    {badges.map((badge, index) => {
                                        if (index < 4) {
                                            return (
                                                <PanelBadge key={badge + index}>
                                                    {badge}
                                                </PanelBadge>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}

                                    {badges.length < 5 ? null : (
                                        <PanelAccountDisplaySpan
                                            fontsize="15px"
                                            fontweight="500"
                                            margin="2.5px"
                                        >
                                            {`+${badges.length - 4}`}
                                        </PanelAccountDisplaySpan>
                                    )}
                                </PanelAccountDisplayBadges>
                            )}
                        </PanelAccountDisplayIntro>
                    </PanelAccountDisplayDisplay>
                    {currentData && (
                        <PanelAccountDisplayFollowContainer>
                            <PanelAccountDisplaySpan
                                margin="0 10px"
                                fontsize="12.5px"
                            >{`following ${
                                following && following.length
                            }`}</PanelAccountDisplaySpan>
                            <PanelAccountDisplaySpan
                                margin="0 10px"
                                fontsize="12.5px"
                            >{`${
                                followers && followers.length
                            } followers`}</PanelAccountDisplaySpan>
                        </PanelAccountDisplayFollowContainer>
                    )}
                </PanelAccountDisplayContainer>
            </PanelAccountDisplayWrapper>
        )
    );
};
export default PanelAccountDisplay;
