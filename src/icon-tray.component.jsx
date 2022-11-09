import { useContext } from "react";
import styled from "styled-components";
import Icon from "./icon.component";
import { DisplayContext } from "./icon.context";

const IconTrayContainer = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
    border-bottom: 0.5px solid #ffffff55;
    padding: 20px 0 10px 0;
`;

const IconTray = () => {
    const { currentDisplay } = useContext(DisplayContext);
    const FAKEICONS = [
        { id: "icon-1", isClicked: false },
        { id: "icon-2", isClicked: false },
        { id: "icon-3", isClicked: false },
        // add elements to load, then based on the click load those into a display with context
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
