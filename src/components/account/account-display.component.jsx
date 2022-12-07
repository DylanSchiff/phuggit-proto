import styled from "styled-components";
const AccountDisplayContainer = styled.div``;
const AccountDisplay = ({ currentDocs }) => {
    const { userName } = currentDocs;
    return (
        <AccountDisplayContainer>
            {userName &&
                `Hello, ${
                    userName.charAt(0).toUpperCase() + userName.slice(1)
                }`}
        </AccountDisplayContainer>
    );
};
export default AccountDisplay;
