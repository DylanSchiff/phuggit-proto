import styled from "styled-components";
const AccountDisplayContainer = styled.div``;
const AccountDisplay = ({ currentDocs }) => {
    const { userName } = currentDocs;
    const welcomeMessage = userName
        ? `Hello, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`
        : "Welcome";
    return (
        <AccountDisplayContainer>
            {userName && welcomeMessage}
        </AccountDisplayContainer>
    );
};
export default AccountDisplay;
