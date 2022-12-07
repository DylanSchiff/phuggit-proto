import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import styled from "styled-components";
import ThemeSwapper from "./theme-swapper.component";
const PanelAccountDisplayContainer = styled.div`
    padding-bottom: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`;
const PanelAccountDisplayIntro = styled.div``;
const PanelAccountDisplay = () => {
    const { currentData } = useContext(AccountContext);
    const { displayName, handle } = currentData;
    return (
        currentData && (
            <PanelAccountDisplayContainer>
                <ThemeSwapper />
                <PanelAccountDisplayIntro>
                    <p>{displayName}</p>
                    <span>@{handle}</span>
                </PanelAccountDisplayIntro>
            </PanelAccountDisplayContainer>
        )
    );
};
export default PanelAccountDisplay;
