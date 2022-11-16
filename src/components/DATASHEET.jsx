import dogimage from "./images/dog.svg";
import northbound from "./images/northbound.svg";
import websea from "./images/websea.svg";
import hexa from "./images/hexa.svg";
import reepo from "./images/repo.svg";

export const DATASHEET = {
    brandName: "99E",
    brandImageUrl: dogimage,
    notificationData: {
        notificationText:
            "Time is ticking... we could be creating something amazing!",
        notificationButtonText: "Connect with me",
    },
    splashData: {
        splashHeadingText: "Minimalist Curator of Creativity",
        splashSubheadingText: "Content generation should be simple.",
        splashFirstButtonText: "explore",
        splashSecondButtonText: "learn more",
        splashImageUrl: dogimage,
    },
    cardData: {
        cardsHeader: "Experiment with recent lab projects",
        CARDS: [
            {
                id: "1",
                heading: "Northbound",
                subheading:
                    "Multimedia timeline, used for creating and recalling important memories.",
                buttontext: "demo",
                imageUrl: northbound,
                tags: [
                    {
                        id: "1",
                        heading: "Travel",
                        imageUrl:
                            "https://www.svgrepo.com/show/364112/airplane-tilt-duotone.svg",
                    },
                    {
                        id: "2",
                        heading: "Geolocation",
                        imageUrl:
                            "https://www.svgrepo.com/show/363496/compass-duotone.svg",
                    },
                    {
                        id: "3",
                        heading: "Multimedia",
                        imageUrl:
                            "https://www.svgrepo.com/show/363399/camera-duotone.svg",
                    },
                    {
                        id: "4",
                        heading: "Planning",
                        imageUrl:
                            "https://www.svgrepo.com/show/363396/calendar-check-duotone.svg",
                    },
                ],
            },
            {
                id: "2",
                heading: "WebSea",
                subheading:
                    "A simplified operations management tool, allowing you to focus on what matters.",
                buttontext: "demo",
                imageUrl: websea,
                tags: [
                    {
                        id: "admin",
                        heading: "Admin Portal",
                        imageUrl:
                            "https://www.svgrepo.com/show/363700/identification-card-duotone.svg",
                    },
                    {
                        id: "team",
                        heading: "Team Centric",
                        imageUrl:
                            "https://www.svgrepo.com/show/364073/users-four-duotone.svg",
                    },
                    {
                        id: "records",
                        heading: "Prioritized Records",
                        imageUrl:
                            "https://www.svgrepo.com/show/363221/alarm-duotone.svg",
                    },
                    {
                        id: "data",
                        heading: "Visual Analytics",
                        imageUrl:
                            "https://www.svgrepo.com/show/363826/paperclip-duotone.svg",
                    },
                ],
            },
            {
                id: "3",
                heading: "Hexa",
                subheading:
                    "Your favorite web style assistant, redesigned and ready to access from your browser.",
                buttontext: "demo",
                imageUrl: hexa,
                tags: [
                    {
                        id: "1",
                        heading: "Palette Generator",
                        imageUrl:
                            "https://www.svgrepo.com/show/363560/drop-duotone.svg",
                    },
                    {
                        id: "2",
                        heading: "Tone Editor",
                        imageUrl:
                            "https://www.svgrepo.com/show/363834/pencil-circle-duotone.svg",
                    },
                    {
                        id: "3",
                        heading: "HEX, RGB, HSL",
                        imageUrl:
                            "https://www.svgrepo.com/show/363573/eyedropper-duotone.svg",
                    },
                    {
                        id: "4",
                        heading: "Shadows and Opacity",
                        imageUrl:
                            "https://www.svgrepo.com/show/363981/star-half-duotone.svg",
                    },
                ],
            },
        ],
    },
    toolData: {
        TOOLS: [
            {
                id: "react",
                heading: "react",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/354259/react.svg",
            },
            {
                id: "firebase",
                heading: "firebase",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/353735/firebase.svg",
            },
            {
                id: "netlify",
                heading: "netlify",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/354110/netlify.svg",
            },
            {
                id: "html",
                heading: "html",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/55451/html.svg",
            },
            {
                id: "es6",
                heading: "es6",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/353707/es6.svg",
            },
            {
                id: "css",
                heading: "css",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/373535/css.svg",
            },
            {
                id: "scss",
                heading: "scss",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/374067/scss2.svg",
            },
            {
                id: "styled",
                heading: "styled",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/374104/styled.svg",
            },
            {
                id: "emmet",
                heading: "emmet",
                isBordered: false,
                imageUrl: "https://emmet.io/-/4076541266/i/logo.svg",
            },
            {
                id: "googlefonts",
                heading: "google fonts",
                isBordered: true,
                imageUrl:
                    "https://pbs.twimg.com/profile_images/1366808543773384704/8qFXRmFc_400x400.png",
            },
            {
                id: "undraw",
                heading: "undraw",
                isBordered: true,
                imageUrl:
                    "https://pbs.twimg.com/profile_images/1266792130711879683/i0ElWni3_400x400.jpg",
            },
            {
                id: "svgrepo",
                heading: "svgrepo",
                isBordered: false,
                imageUrl: reepo,
            },
            {
                id: "icon8",
                heading: "icon8",
                isBordered: false,
                imageUrl:
                    "https://avatars.githubusercontent.com/u/6615749?s=200&v=4",
            },
            {
                id: "vscode",
                heading: "vscode",
                isBordered: false,
                imageUrl:
                    "https://www.svgrepo.com/show/354522/visual-studio-code.svg",
            },
            {
                id: "procreate",
                heading: "procreate",
                isBordered: false,
                imageUrl:
                    "https://static.wixstatic.com/media/f57031_3ed69a32eb6e4b8a84d233d837485b0d~mv2.png/v1/fill/w_232,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Procreate%20icon.png",
            },
            {
                id: "github",
                heading: "github",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/217753/github.svg",
            },
            {
                id: "pexels",
                heading: "pexels",
                isBordered: false,
                imageUrl:
                    "https://cdn.dribbble.com/users/3027576/avatars/normal/5fa423ee11a1e0d7b32815eb8397512c.png?1594056145",
            },
            {
                id: "grid",
                heading: "grid",
                isBordered: true,
                imageUrl:
                    "https://static.vaadin.com/directory/user70309/icon/file3460235915593609009_1554052408926logo.png",
            },
        ],
    },
    replacementToolData: {
        TOOLS: [
            {
                id: "react",
                heading: "react",
                isBordered: false,
                imageUrl: "https://www.svgrepo.com/show/354259/react.svg",
            },
        ],
    },
};