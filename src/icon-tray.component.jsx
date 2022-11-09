import { useContext } from "react";
import styled from "styled-components";
import Icon from "./icon.component";
import { DisplayContext } from "./icon.context";
import { PAGES } from "./page-categories";

const IconTrayContainer = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #ffffff55;
    padding: 20px 0 10px 0;
`;

const IconTray = () => {
    const { currentDisplay } = useContext(DisplayContext);
    return (
        <IconTrayContainer>
            {PAGES.map((icon) => {
                return (
                    <Icon
                        key={icon.id}
                        icon={icon}
                        isSelected={currentDisplay === icon.id ? true : false}
                    ></Icon>
                );
            })}
        </IconTrayContainer>
    );
};
export default IconTray;
