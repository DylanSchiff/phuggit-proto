import styled from "styled-components";
// import Pop from "./pop.component";
const ContactPopContainer = styled.div`
    flex: 1;
    max-width: 300px;
    display: flex;
    flex-flow: column nowrap;
    user-select: none;
    margin-bottom: 50px;
`;
// const AboutHeading = styled.span`
//     color: #fff9;
//     font-size: 1.25rem;
//     font-weight: 400;
//     text-align: center;
//     margin-bottom: 10px;
// `;
// const AboutParagraph = styled.span`
//     flex: 1;
//     color: #b1ccf799;
//     font-size: 1rem;
//     font-weight: 300;
//     padding: 10px 0 10px;
//     text-align: center;
// `;
// const ContactPops = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 10px;
//     justify-items: center;
//     align-items: center;
// `;
// const PopWrap = styled.a`
//     padding: 20px 0;
// `;
// const ConstactInputContainer = styled.div`
//     padding: 20px 0;
//     flex: 1;
//     display: flex;
//     flex-flow: column nowrap;
//     align-items: center;
//     user-select: none;
// `;
// const ContactInput = styled.input`
//     flex: 1;
//     width: 100%;
//     min-height: 50px;
//     max-height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 0.5px solid #ffffff55;
//     background-color: #e9f1f605;
//     outline: none;
//     border-radius: 10px;
//     text-align: center;
//     color: #ffffff99;
// `;
// const ContactInputButton = styled.button`
//     margin-top: 10px;
//     padding: 5px 10px;
//     width: fit-content;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: transparent;
//     border: none;
//     outline: none;
//     text-align: center;
//     color: #ffffff99;
//     cursor: pointer;
//     transition: 100ms linear;
//     font-size: 15px;
//     &:active {
//         color: #b1ccf799;
//         transform: scale(1.05);
//     }
// `;

const ContactPop = ({ contactPops }) => {
    return (
        <ContactPopContainer>
            {/* <AboutHeading>Connect</AboutHeading>
            <ContactPops>
                {contactPops.map((pop) => {
                    const { id, path } = pop;
                    return (
                        <PopWrap
                            key={id}
                            href={path}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Pop pop={pop} isContactPop />
                        </PopWrap>
                    );
                })}
            </ContactPops>
            <AboutParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                aspernatur nesciunt voluptatem quibusdam tempore a, error labore
                reiciendis ipsam facilis, mollitia nobis odio ipsa esse,
                corporis at quis fugiat doloribus.
            </AboutParagraph>
            <ConstactInputContainer>
                <ContactInput placeholder="message" />
                <ContactInputButton>Send</ContactInputButton>
            </ConstactInputContainer> */}
        </ContactPopContainer>
    );
};
export default ContactPop;
