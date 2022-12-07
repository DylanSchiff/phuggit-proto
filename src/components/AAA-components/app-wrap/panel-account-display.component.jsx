import { useContext } from "react";
import { AccountContext } from "../../../AAA/context/AAA-context/account.context";
import styled from "styled-components";
const PanelAccountDisplayContainer = styled.div`
    padding-bottom: 10px;
`;
const PanelAccountDisplayIntro = styled.div``;
const PanelAccountDisplay = () => {
    const { currentData } = useContext(AccountContext);
    const { displayName, handle } = currentData;
    return (
        currentData && (
            <PanelAccountDisplayContainer>
                <PanelAccountDisplayIntro>
                    <p>{displayName}</p>
                    <span>@{handle}</span>
                </PanelAccountDisplayIntro>
            </PanelAccountDisplayContainer>
        )
    );
};
export default PanelAccountDisplay;
