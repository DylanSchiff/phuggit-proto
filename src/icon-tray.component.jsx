import styled from "styled-components";
import Icon from "./icon.component";
const FAKEICONS = [
    { id: "icon-1", isClicked: false },
    { id: "icon-2", isClicked: false },
];

const IconTrayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    padding-top: 20px;
`;

const IconTray = () => {
    return (
        <IconTrayContainer>
            {FAKEICONS.map((icon) => {
                return <Icon key={icon.id}></Icon>;
            })}
        </IconTrayContainer>
    );
};
export default IconTray;
