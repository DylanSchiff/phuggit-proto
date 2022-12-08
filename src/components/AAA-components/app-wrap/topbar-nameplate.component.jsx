import styled from "styled-components";
import logo from "../../../phuggitp.png";
import { Link } from "react-router-dom";
const TopbarNameplateContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TopbarNameplageImage = styled.img`
    height: 50px;
    object-fit: cover;
`;
const TopbarNameplate = () => {
    return (
        <TopbarNameplateContainer to="/">
            <TopbarNameplageImage src={logo} />
        </TopbarNameplateContainer>
    );
};
export default TopbarNameplate;
