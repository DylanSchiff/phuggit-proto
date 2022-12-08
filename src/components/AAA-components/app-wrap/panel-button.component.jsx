import styled from "styled-components";
import { Link } from "react-router-dom";
const PanelButtonContainer = styled.div`
    padding: 0 10px;
    width: 100%;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    cursor: pointer;
    color: var(--thir-002);
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    &:hover {
        border: 1px solid var(--thir-004);
    }
`;
const ButtonLink = styled(Link)`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`;
const PanelButton = ({ buttonText, buttonHandler, isLink, routePath }) => {
    return (
        <PanelButtonContainer
            onClick={() => (buttonHandler ? buttonHandler() : null)}
        >
            {isLink ? (
                <ButtonLink to={`${routePath}`}>{buttonText}</ButtonLink>
            ) : (
                buttonText
            )}
        </PanelButtonContainer>
    );
};
export default PanelButton;
