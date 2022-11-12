import northbound from "./images/northbound.svg";
import websea from "./images/websea.svg";
import hexa from "./images/hexa.svg";
const CARDS = [
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
];

export default CARDS