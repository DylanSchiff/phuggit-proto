import { useContext, useRef } from "react";
import styled from "styled-components";
import PageSpan from "../page-span.component";
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
        var(--main-002) 0%,
        var(--main-001) 30%,
        var(--main-001) 80%,
        var(--main-003) 100%
    );
`;
const ContactButton = styled.a`
    margin-top: 30px;
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    color: var(--white-001);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--accent-004);
    &:hover {
        color: var(--accent-001);
        box-shadow: 0 1px 3px var(--fade-001), 0 2px 5px var(--fade-001),
            0 3px 8px var(--fade-002);
    }
    /* @media only screen and (max-width: 1000px) {
        border: 1px solid var(--fade-002);
        background-color: var(--white-001);
        padding: 10px 20px;
        color: var(--accent-004);
        margin-bottom: 20px;
    } */
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
            <PageSpan
                fontsize="35px"
                fontweight="500"
                padding="10px 0"
                color="var(--accent-001)"
                spantext="Capiente"
            />
            <PageSpan
                fontsize="15px"
                fontweight="400"
                padding="10px"
                textalign="center"
                color="var(--white-003)"
                spantext="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <PopTray />
            <ContactButton
                // onClick={() =>
                //     !currentPop ? window.scrolltoheadsection() : null
                // }
                href={currentPop ? currentPop.path : null}
                target="_blank"
                rel="noreferrer"
            >
                {currentPop ? `visit ${currentPop.heading}` : "where to?"}
            </ContactButton>
        </ContactBoxContainer>
    );
};
export default ContactBox;
