import { useContext, useRef } from "react";
import styled from "styled-components";
import { ColorContext } from "../../ap/context/color.context";
import PopTray from "../pop/pop-tray.component";
import { PopContext } from "../pop/pop.context";
const ContactBoxContainer = styled.div.attrs((props) => ({
    style: {
        borderBottom: "3px solid" + props.currentColor,
    },
}))`
    overflow: hidden;
    border-radius: 25px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 50px 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: var(--main-004);
    box-shadow: var(--shade-001);
`;
const ContactButton = styled.a.attrs((props) => ({
    style: {
        color: props.currentColor,
    },
}))`
    transition: 111ms;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    &:hover {
        /* color: var(--accent-001);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002); */
    }
`;
const ContactBox = () => {
    const { currentPop } = useContext(PopContext);
    const { currentColor } = useContext(ColorContext);
    const contactsection = useRef(null);
    window.scrolltocontactsection = () =>
        window.scrollTo({
            top: contactsection.current.offsetTop - 20,
            behavior: "smooth",
        });
    return (
        <ContactBoxContainer ref={contactsection} currentColor={currentColor}>
            <PopTray />
            <ContactButton
                href={currentPop ? currentPop.path : null}
                currentColor={!currentPop ? currentColor : "var(--thir-001)"}
                target="_blank"
                rel="noreferrer"
            >
                {currentPop ? `visit ${currentPop.heading}` : "where to?"}
            </ContactButton>
        </ContactBoxContainer>
    );
};
export default ContactBox;
