import styled from "styled-components";
// import PopBackground from "./components/pop/pop-background.component";
// import PopDisplay from "./components/pop/pop-display.component";
// import PopTray from "./components/pop/pop-tray.component";
import splashimage from "./components/images/light.svg";
import ship from "./components/images/ship.svg";
import circleone from "./components/images/circleone.svg";
import circletwo from "./components/images/circletwo.svg";
import circlethree from "./components/images/circlethree.svg";
import { useState } from "react";

const AppContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: var(--white-001);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    overflow: hidden;
    overflow-y: auto;
    @media only screen and (min-width: 1000px) {
        align-items: center;
    }
`;

const AppNavbar = styled.div`
    width: 100vw;
    position: sticky;
    top: 0;
    min-height: 50px;
    max-height: 50px;
    background-color: var(--main-002);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 20px;
`;
const NavLogoContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;
const NavLogoImageContainer = styled.div`
    min-height: 40px;
    max-height: 40px;
    min-width: 40px;
    max-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavLogoImage = styled.img`
    min-height: 30px;
    max-height: 30px;
    min-width: 30px;
    max-width: 30px;
    object-fit: cover;
    cursor: pointer;
`;
const NavLogoHeadingContainer = styled.div`
    padding: 0 10px;
    @media only screen and (max-width: 300px) {
        display: none;
    }
`;
const NavLogoHeading = styled.span`
    color: var(--white-001);
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    max-height: 30px;
    user-select: none;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

const NavButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    color: var(--accent-001);
    font-size: 15px;
    font-weight: 500;
    border: 1px solid transparent;
    margin: 5px;
    user-select: none;
    &:hover {
        border: 1px solid var(--accent-001);
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppNotificationBanner = styled.div`
    width: 100%;
    background-color: var(--accent-002);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
`;
const AppNotification = styled.span`
    color: var(--accent-004);
    font-size: 12.5px;
    user-select: none;
`;
const AppNotificationLink = styled.a`
    margin-left: 5px;
    cursor: pointer;
    font-weight: 500;
    color: var(--accent-004);
    user-select: none;
    &:hover {
        text-decoration: underline;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppSplash = styled.section`
    max-width: 1500px;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    padding: 50px 60px;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        flex-flow: column nowrap;
        align-items: center;
    }
    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;
const SplashDetails = styled.div`
    flex: 3;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column nowrap;
    transition: 111ms linear;
    @media only screen and (max-width: 600px) {
        flex: 1;
    }
    @media only screen and (max-width: 300px) {
        max-width: 150px;
    }
    @media only screen and (max-width: 200px) {
        max-width: 100px;
    }
`;
const SplashHeadingContainer = styled.div`
    @media only screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const SplashHeading = styled.h2`
    height: fit-content;
    font-size: 45px;
    line-height: 45px;
    font-weight: 600;
    user-select: none;
    @media only screen and (max-width: 1000px) {
        max-width: 275px;
        font-size: 30px;
        line-height: 30px;
        font-weight: 600;
    }
    @media only screen and (max-width: 600px) {
        max-width: 100%;
        max-width: 275px;
        font-size: 35px;
        line-height: 35px;
        font-weight: 600;
        text-align: center;
    }
    @media only screen and (max-width: 200px) {
        font-size: 30px;
        line-height: 30px;
        font-weight: 600;
        text-align: center;
    }
`;
const SplashSummaryContainer = styled.div`
    @media only screen and (max-width: 600px) {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const SplashSummary = styled.p`
    flex: 1;
    font-size: 25px;
    line-height: 25px;
    font-weight: 400;
    user-select: none;
    @media only screen and (max-width: 1000px) {
        font-size: 22.5px;
        line-height: 22.5px;
        font-weight: 400;
        max-width: 80%;
    }
    @media only screen and (max-width: 600px) {
        max-width: 100%;
        padding: 0 40px;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
    }
    @media only screen and (max-width: 300px) {
        padding: 0;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
    @media only screen and (max-width: 450px) {
        justify-content: center;
        flex-flow: column nowrap;
    }
`;

const SplashButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
`;

const FirstSplashButton = styled(SplashButton)`
    padding: 15px 20px;
    background-color: var(--accent-001);
    font-size: 25px;
    font-weight: 500;
    border: 1px solid #0001;
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        box-shadow: 0 1px 3px #0001, 0 2px 5px #0001, 0 3px 8px #2221;
    }
`;
const SecondSplashButton = styled(SplashButton)`
    margin-left: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    @media only screen and (max-width: 450px) {
        margin-left: 0px;
        margin-top: 20px;
    }
    &:hover {
        color: var(--accent-003);
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const SplashImageContainer = styled.div`
    flex: 4;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    @media only screen and (max-width: 1000px) {
        padding-top: 10px;
        width: 80%;
    }
    @media only screen and (max-width: 200px) {
        display: none;
    }
`;
const SplashImage = styled.img`
    user-select: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1000px) {
        margin-top: 50px;
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AppCardsContainer = styled.div`
    background-color: var(--white-001);
    flex: 1;
    width: 100%;
    padding: 50px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    transition: 111ms linear;
    @media only screen and (max-width: 600px) {
        padding: 25px;
    }
`;
const CardsHeading = styled.span`
    font-size: 35px;
    line-height: 35px;
    font-weight: 600;
    user-select: none;
    padding: 30px 20px;

    @media only screen and (max-width: 1000px) {
        font-size: 30px;
        line-height: 30px;
        font-weight: 600;
    }
    @media only screen and (max-width: 600px) {
        font-size: 25px;
        line-height: 25px;
        font-weight: 600;
        text-align: center;
    }
`;
const AllCards = styled.div`
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;
    justify-items: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 0px;
        border-radius: 25px;
        overflow: hidden;
        border: 1px solid var(--fade-002);
        box-shadow: 0 1px 3px #0001, 0 2px 5px #0001, 0 3px 8px #2221;
    }
`;
const Card = styled.div`
    border: 1px solid var(--fade-002);
    flex: 1;
    width: 100%;
    background-color: var(--white-004);
    border-radius: 25px;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 1px 3px #0001, 0 2px 5px #0001, 0 3px 8px #2221;
    transition: 111ms linear;
    &:hover {
        background-color: var(--accent-001);
    }
    @media only screen and (max-width: 1000px) {
        border-radius: 0px;
        border: none;
        box-shadow: none;
        &:first-of-type {
            border-bottom: 1px solid var(--fade-002);
        }
        &:last-of-type {
            border-top: 1px solid var(--fade-002);
        }
        &:hover {
            background-color: var(--white-004);
        }
    }
`;
const CardImageContainer = styled.div`
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
`;
const CardImage = styled.img`
    max-height: 151px;
    max-width: 151px;
    min-height: 151px;
    min-width: 151px;
`;
const CardHeadingContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const CardHeading = styled.span`
    font-size: 35px;
    font-weight: 500;
`;
const CardSubheading = styled.span`
    margin: 20px 0;
    text-align: center;
    line-height: 25px;
    font-size: 17.5px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

const CardTagsButtonFlipper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1000px) {
        flex-flow: column-reverse nowrap;
    }
`;
const CardButtonContainer = styled.div``;
const CardButton = styled.div`
    cursor: pointer;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    color: var(--white-001);
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    border: 1px solid var(--fade-002);
    background-color: var(--white-001);
    padding: 10px 20px;
    color: var(--accent-004);
    &:hover {
        color: var(--accent-001);
        box-shadow: 0 1px 3px #0001, 0 2px 5px #0001, 0 3px 8px #2221;
    }
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
        border: 1px solid var(--fade-002);
        background-color: var(--white-001);
        padding: 10px 20px;
        color: var(--accent-004);
        margin-bottom: 20px;
    }
`;
const CardTagsContainer = styled.div`
    padding: 40px 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const CardTag = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 10px 0;
`;
const CardTagImageContainer = styled.div`
    height: 30px;
    width: 30px;
`;
const CardTagImage = styled.img`
    height: 25px;
    width: 25px;
`;
const CardTagHeadingContainer = styled.div``;
const CardTagHeading = styled.span`
    font-weight: 400;
    font-size: 17.5px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const AdditionalProjectsContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;
const AdditionalProjects = styled.div`
    border-radius: 25px;
    display: ${({ display }) => display};
    flex: 1;
    width: 100%;
    min-height: 30vh;
    background-color: var(--fade-001);
    margin-bottom: 20px;
    box-shadow: inset 0 1px 3px #0001, inset 0 2px 5px #0001,
        inset 0 3px 8px #2221;
`;
const AdditionalProjectsButton = styled.div`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    transition: 111ms linear;
    user-select: none;
    padding: 15px 20px;
    background-color: var(--accent-001);
    font-size: 25px;
    font-weight: 500;
    border: 1px solid #0001;
    @media only screen and (max-width: 1000px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
    &:hover {
        box-shadow: 0 1px 3px #0001, 0 2px 5px #0001, 0 3px 8px #2221;
        color: var(--white-002);
    }
`;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const ContactBox = styled.div`
    padding: 30px 0;
    flex: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const ContactHeading = styled.span`
    font-size: 35px;
    font-weight: 500;
    padding: 10px 0;
`;
const ContactSubheading = styled.span`
    font-size: 15px;
    font-weight: 400;
    padding: 10px 0;
    text-align: center;
`;
const ContactIcons = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 50px;
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const ContactIcon = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;
const ContactIconImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 55px;
`;
const ContactIconImage = styled.img`
    height: 55px;
    width: 55px;
`;
const ContactIconHeadingContainer = styled.div`
    margin-top: 10px;
`;
const ContactIconHeading = styled.span`
    font-size: 15px;
    font-weight: 500;
`;
const ContactButton = styled.div``;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const cards = [
    {
        id: "1",
        heading: "Numquam",
        subheading:
            "Numquam labore dolorem, voluptates excepturi doloremque quas.",
        buttontext: "demo",
        imageUrl: circleone,
        tags: [
            {
                id: "1",
                heading: "travel",
                imageUrl:
                    "https://www.svgrepo.com/show/364112/airplane-tilt-duotone.svg",
            },
            {
                id: "2",
                heading: "geolocation",
                imageUrl:
                    "https://www.svgrepo.com/show/363496/compass-duotone.svg",
            },
            {
                id: "3",
                heading: "multi-media",
                imageUrl:
                    "https://www.svgrepo.com/show/363399/camera-duotone.svg",
            },
            {
                id: "4",
                heading: "timeline",
                imageUrl:
                    "https://www.svgrepo.com/show/363396/calendar-check-duotone.svg",
            },
        ],
    },
    {
        id: "2",
        heading: "Dolorem",
        subheading:
            "Numquam labore dolorem, voluptates excepturi doloremque quas.",
        buttontext: "demo",
        imageUrl: circletwo,
        tags: [
            {
                id: "1",
                heading: "time keeping",
                imageUrl:
                    "https://www.svgrepo.com/show/363221/alarm-duotone.svg",
            },
            {
                id: "2",
                heading: "data logging",
                imageUrl:
                    "https://www.svgrepo.com/show/363826/paperclip-duotone.svg",
            },
            {
                id: "3",
                heading: "admin portal",
                imageUrl:
                    "https://www.svgrepo.com/show/363700/identification-card-duotone.svg",
            },
            {
                id: "4",
                heading: "team centric",
                imageUrl:
                    "https://www.svgrepo.com/show/364073/users-four-duotone.svg",
            },
        ],
    },
    {
        id: "3",
        heading: "Voluptates",
        subheading:
            "Numquam labore dolorem, voluptates excepturi doloremque quas.",
        buttontext: "demo",
        imageUrl: circlethree,
        tags: [
            {
                id: "1",
                heading: "time keeping",
                imageUrl:
                    "https://www.svgrepo.com/show/363834/pencil-circle-duotone.svg",
            },
            {
                id: "2",
                heading: "color generation",
                imageUrl:
                    "https://www.svgrepo.com/show/363560/drop-duotone.svg",
            },
            {
                id: "3",
                heading: "pallet editor",
                imageUrl:
                    "https://www.svgrepo.com/show/363573/eyedropper-duotone.svg",
            },
            {
                id: "4",
                heading: "shadow and opacity",
                imageUrl:
                    "https://www.svgrepo.com/show/363981/star-half-duotone.svg",
            },
        ],
    },
];

const contactIcons = [
    {
        id: "1",
        heading: "linkedin",
        imageUrl: "https://www.svgrepo.com/show/70809/linkedin.svg",
    },
    {
        id: "2",
        heading: "github",
        imageUrl: "https://www.svgrepo.com/show/341847/github.svg",
    },
    {
        id: "3",
        heading: "pexels",
        imageUrl:
            "https://cdn.dribbble.com/users/3027576/avatars/normal/5fa423ee11a1e0d7b32815eb8397512c.png?1594056145",
    },
    {
        id: "4",
        heading: "instagram",
        imageUrl: "https://www.svgrepo.com/show/13639/instagram.svg",
    },
];

const App = () => {
    const [additionalProjectsVisible, setAdditionalProjectsVisible] =
        useState("none");
    const toggleAdditionalProjectsVisible = () =>
        setAdditionalProjectsVisible(!additionalProjectsVisible);
    return (
        // <AppContents>
        //     <PopTray />
        //     <PopDisplay />
        //     <PopBackground />
        // </AppContents>

        <>
            <AppNavbar backgroundimage={`url(${ship})`}>
                <NavLogoContainer>
                    <NavLogoImageContainer>
                        <NavLogoImage src="https://www.svgrepo.com/show/233196/smile.svg" />
                    </NavLogoImageContainer>
                    <NavLogoHeadingContainer>
                        <NavLogoHeading>Schiff</NavLogoHeading>
                    </NavLogoHeadingContainer>
                </NavLogoContainer>
                <NavButton>Connect</NavButton>
            </AppNavbar>

            <AppContainer>
                <AppNotificationBanner>
                    <AppNotification>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Numquam labore dolorem, voluptates excepturi
                        doloremque quas?
                        <AppNotificationLink>Learn More</AppNotificationLink>
                    </AppNotification>
                </AppNotificationBanner>
                <AppSplash>
                    <SplashDetails>
                        <SplashHeadingContainer>
                            <SplashHeading>
                                Commodi sapiente cupiditate vero, officia
                                tempore.
                            </SplashHeading>
                        </SplashHeadingContainer>
                        <SplashSummaryContainer>
                            <SplashSummary>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Commodi sapiente cupiditate
                                vero, officia tempore ratione vel consectetur
                                tempora blanditiis placeat.
                            </SplashSummary>
                        </SplashSummaryContainer>
                        <SplashButtonsContainer>
                            <FirstSplashButton>Projects</FirstSplashButton>
                            <SecondSplashButton>learn more</SecondSplashButton>
                        </SplashButtonsContainer>
                    </SplashDetails>
                    <SplashImageContainer>
                        <SplashImage src={splashimage} />
                    </SplashImageContainer>
                </AppSplash>
                <AppCardsContainer>
                    <CardsHeading>
                        Officia tempore ratione vel consectetur tempora
                        blanditiis placeat.
                    </CardsHeading>
                    <AllCards>
                        {cards.map((card) => {
                            const {
                                id,
                                heading,
                                subheading,
                                buttontext,
                                imageUrl,
                                tags,
                            } = card;
                            return (
                                <Card key={id}>
                                    <CardImageContainer>
                                        <CardImage src={imageUrl} />
                                    </CardImageContainer>
                                    <CardHeadingContainer>
                                        <CardHeading>{heading}</CardHeading>
                                        <CardSubheading>
                                            {subheading}
                                        </CardSubheading>
                                    </CardHeadingContainer>
                                    <CardTagsButtonFlipper>
                                        <CardButtonContainer>
                                            <CardButton>
                                                {buttontext}
                                            </CardButton>
                                        </CardButtonContainer>
                                        <CardTagsContainer>
                                            {tags.map((tag) => {
                                                const {
                                                    id,
                                                    heading,
                                                    imageUrl,
                                                } = tag;
                                                return (
                                                    <CardTag key={id}>
                                                        <CardTagImageContainer>
                                                            <CardTagImage
                                                                src={imageUrl}
                                                            />
                                                        </CardTagImageContainer>
                                                        <CardTagHeadingContainer>
                                                            <CardTagHeading>
                                                                {heading}
                                                            </CardTagHeading>
                                                        </CardTagHeadingContainer>
                                                    </CardTag>
                                                );
                                            })}
                                        </CardTagsContainer>
                                    </CardTagsButtonFlipper>
                                </Card>
                            );
                        })}
                    </AllCards>
                    <AdditionalProjectsContainer>
                        <AdditionalProjects
                            display={
                                additionalProjectsVisible ? "none" : "flex"
                            }
                        ></AdditionalProjects>
                        <AdditionalProjectsButton
                            onClick={() => toggleAdditionalProjectsVisible()}
                        >
                            All Projects
                        </AdditionalProjectsButton>
                    </AdditionalProjectsContainer>
                    <ContactBox>
                        <ContactHeading>Capiente</ContactHeading>
                        <ContactSubheading>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </ContactSubheading>
                        <ContactIcons>
                            {contactIcons.map((icon) => {
                                const { id, heading, imageUrl } = icon;
                                return (
                                    <ContactIcon key={id}>
                                        <ContactIconImageContainer>
                                            <ContactIconImage src={imageUrl} />
                                        </ContactIconImageContainer>
                                        <ContactIconHeadingContainer>
                                            <ContactIconHeading>
                                                {heading}
                                            </ContactIconHeading>
                                        </ContactIconHeadingContainer>
                                    </ContactIcon>
                                );
                            })}
                        </ContactIcons>
                        <ContactButton></ContactButton>
                    </ContactBox>
                </AppCardsContainer>
            </AppContainer>
        </>
    );
};
export default App;
