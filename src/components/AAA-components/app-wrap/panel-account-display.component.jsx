import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import styled from "styled-components";
import ThemeSwapper from "./theme-swapper.component";
const PanelAccountDisplayContainer = styled.div`
    flex: 1;
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: var(--main-003);
    box-shadow: var(--shade-002);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;
const PanelAccountDisplayIntro = styled.div``;
const PanelAccountDisplaySpan = styled.div`
    font-size: ${({ fontsize }) => fontsize};
    font-weight: ${({ fontweight }) => fontweight};
`;
const PanelAccountDisplay = () => {
    const { currentData } = useContext(AccountContext);
    const { displayName, handle } = currentData;
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
                </PanelAccountDisplayIntro>
            </PanelAccountDisplayContainer>
        )
    );
};
export default PanelAccountDisplay;
