import { useContext } from "react";
import styled from "styled-components";
import Icon from "./icon.component";
import { DisplayContext } from "./icon.context";

const IconTrayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
    padding-top: 20px;
`;

const IconTray = () => {
    const { currentDisplay } = useContext(DisplayContext);
    const FAKEICONS = [
        { id: "icon-1", isClicked: false },
        { id: "icon-2", isClicked: false },
        { id: "icon-3", isClicked: false },
    ];
    return (
        <IconTrayContainer>
            {FAKEICONS.map((icon) => {
                return (
                    <Icon
                        key={icon.id}
                        icon={icon}
                        hoverState={currentDisplay === icon.id ? true : false}
                    ></Icon>
                );
            })}
        </IconTrayContainer>
    );
};
export default IconTray;
