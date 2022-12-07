import styled from "styled-components";
const PanelButtonContainer = styled.div`
    padding: 0 10px;
    width: fit-content;
    height: 40px;
    margin: 0 5px;
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
const PanelButton = ({ buttonText, buttonHandler }) => {
    return (
        <PanelButtonContainer onClick={() => buttonHandler()}>
            {buttonText}
        </PanelButtonContainer>
    );
};
export default PanelButton;
