export const POPS = [
    {
        id: "home-pop",
        isClicked: false,
        imageUrl: "https://www.svgrepo.com/show/375538/asset-inventory.svg",
        tabs: [],
        fallbackTab: {
            id: "home",
            heading: "home",
            element: "home",
        },
    },
    {
        id: "projects-pop",
        isClicked: false,
        imageUrl: "https://www.svgrepo.com/show/375403/container-registry.svg",
        tabs: [
            {
                id: "Northbound",
                heading: "Northbound",
                element: "Northbound",
            },
            {
                id: "WebSea",
                heading: "WebSea",
                element: "WebSea",
            },
            {
                id: "WSA",
                heading: "WSA",
                element: "WSA",
            },
        ],
        fallbackTab: {
            id: "projects",
            heading: "projects",
            element: "projects",
        },
    },
    {
        id: "contact-pop",
        isClicked: false,
        imageUrl:
            "https://www.svgrepo.com/show/375461/network-connectivity-center.svg",
        tabs: [],
        fallbackTab: {
            id: "contact",
            heading: "contact",
            element: "contact",
        },
    },
];
