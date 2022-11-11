import { useContext, useRef } from "react";
import styled from "styled-components";
import PopTray from "../pop/pop-tray.component";
import { PopContext } from "../pop/pop.context";
const ContactBoxContainer = styled.div`
    overflow: hidden;
    border-radius: 25px;
    padding: 50px 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: var(--main-002);
    background: linear-gradient(
        0deg,
        var(--main-001) 0%,
        var(--main-002) 30%,
        var(--main-002) 80%,
        var(--main-001) 100%
    );
`;
const ContactButton = styled.a`
    margin-top: 30px;
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    color: ${({ color }) => color};
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    &:hover {
        color: var(--accent-001);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
    }
`;
const ContactBox = () => {
    const { currentPop } = useContext(PopContext);
    const contactsection = useRef(null);
    window.scrolltocontactsection = () =>
        window.scrollTo({
            top: contactsection.current.offsetTop - 20,
            behavior: "smooth",
        });
    return (
        <ContactBoxContainer ref={contactsection}>
            <PopTray />
            <ContactButton
                href={currentPop ? currentPop.path : null}
                color={currentPop ? "var(--white-001)" : "var(--accent-002)"}
                target="_blank"
                rel="noreferrer"
            >
                {currentPop ? `visit ${currentPop.heading}` : "where to?"}
            </ContactButton>
        </ContactBoxContainer>
    );
};
export default ContactBox;
