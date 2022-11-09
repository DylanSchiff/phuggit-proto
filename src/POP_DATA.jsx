export const POPS = [
    {
        id: "home-pop",
        isClicked: false,
        imageUrl: "https://www.svgrepo.com/show/190757/museum.svg",
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
        imageUrl: "https://www.svgrepo.com/show/190698/whiteboard-board.svg",
        tabs: [
            {
                id: "project-one",
                heading: "project one",
                element: "project-one",
            },
            {
                id: "project-two",
                heading: "project two",
                element: "project-two",
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
        imageUrl: "https://www.svgrepo.com/show/190680/exam-result.svg",
        tabs: [],
        fallbackTab: {
            id: "contact",
            heading: "contact",
            element: "contact",
        },
    },
];
