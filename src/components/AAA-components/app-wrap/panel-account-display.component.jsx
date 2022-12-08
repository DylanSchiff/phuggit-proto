import { useContext } from "react";
import { AccountPanelContext } from "../../../AAA/context/AAA-context/account-panel.context";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import styled from "styled-components";
import ThemeSwapper from "./theme-swapper.component";
const PanelAccountDisplayContainer = styled.div`
    flex: 1;
    width: 100%;
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
    flex: 1;
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
`;
const PanelAccountDisplayIntro = styled.div`
    flex: 1;
    width: 100%;
`;
const PanelAccountDisplaySpan = styled.div`
    font-size: ${({ fontsize }) => fontsize};
    font-weight: ${({ fontweight }) => fontweight};
    user-select: none;
    margin: ${({ margin }) => margin};
`;
const PanelAccountDisplayBadges = styled.div`
    padding-top: 10px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;
const PanelBadge = styled.div`
    border-radius: 5px;
    margin: 2.5px;
    padding: 2.5px 5px;
    background-color: var(--thir-004);
    color: var(--main-004);
    font-weight: 300;
    min-height: 25px;
    min-width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;
const PanelAccountDisplayFollowContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 10px;
`;
const PanelAccountDisplay = () => {
    const {
        isEditorOpen,
        setIsEditorOpen,
        isBadgesOpen,
        setIsBadgesOpen,
        isFollowingOpen,
        setIsFollowingOpen,
    } = useContext(AccountPanelContext);
    const toggleIsEditorOpen = () => setIsEditorOpen(!isEditorOpen);
    const toggleIsBadgesOpen = () => setIsBadgesOpen(!isBadgesOpen);
    const toggleIsFollowingOpen = () => setIsFollowingOpen(!isFollowingOpen);
    const { currentData } = useContext(AccountContext);
    const { displayName, handle, badges, followers, following } = currentData;
    return (
        currentData && (
            <>
                <PanelAccountDisplaySettings>
                    <PanelAccountDisplaySpan
                        onClick={() => toggleIsFollowingOpen()}
                        margin="0 0 0 10px"
                    >
                        people
                    </PanelAccountDisplaySpan>
                    <PanelAccountDisplaySpan
                        onClick={() => toggleIsBadgesOpen()}
                        margin="0 0 0 10px"
                    >
                        badges
                    </PanelAccountDisplaySpan>
                    <PanelAccountDisplaySpan
                        onClick={() => toggleIsEditorOpen()}
                        margin="0 0 0 10px"
                    >
                        edit
                    </PanelAccountDisplaySpan>
                </PanelAccountDisplaySettings>
                <PanelAccountDisplayContainer>
                    <PanelAccountDisplayDisplay>
                        <ThemeSwapper />
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
                                                <PanelBadge key={badge}>
                                                    {badge}
                                                </PanelBadge>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </PanelAccountDisplayBadges>
                            )}
                        </PanelAccountDisplayIntro>
                    </PanelAccountDisplayDisplay>
                    {currentData && (
                        <PanelAccountDisplayFollowContainer>
                            <PanelAccountDisplaySpan fontsize="12.5px">{`${
                                following && following.length
                            } Following`}</PanelAccountDisplaySpan>
                            <PanelAccountDisplaySpan fontsize="12.5px">{`${
                                followers && followers.length
                            } Followers`}</PanelAccountDisplaySpan>
                        </PanelAccountDisplayFollowContainer>
                    )}
                </PanelAccountDisplayContainer>
            </>
        )
    );
};
export default PanelAccountDisplay;
