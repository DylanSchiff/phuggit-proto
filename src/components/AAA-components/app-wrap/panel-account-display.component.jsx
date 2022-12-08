import { useContext } from "react";
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
`;

const PanelAccountDisplayBadges = styled.div`
    padding-top: 10px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
`;
const PanelBadge = styled.div`
    margin: 2.5px;
    padding: 2.5px 5px;
    background-color: var(--thir-004);
    min-height: 25px;
    min-width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PanelAccountDisplay = () => {
    const { currentData } = useContext(AccountContext);
    const { displayName, handle, badges } = currentData;
    return (
        currentData && (
            <PanelAccountDisplayContainer>
                <ThemeSwapper />
                <PanelAccountDisplayIntro>
                    <PanelAccountDisplaySpan fontsize="20px" fontweight="600">
                        {displayName}
                    </PanelAccountDisplaySpan>
                    <PanelAccountDisplaySpan fontsize="15px">
                        {`@${handle}`}
                    </PanelAccountDisplaySpan>
                    {badges && (
                        <PanelAccountDisplayBadges>
                            {badges.map((badge) => {
                                return <PanelBadge>{badge}</PanelBadge>;
                            })}
                        </PanelAccountDisplayBadges>
                    )}
                </PanelAccountDisplayIntro>
            </PanelAccountDisplayContainer>
        )
    );
};
export default PanelAccountDisplay;
