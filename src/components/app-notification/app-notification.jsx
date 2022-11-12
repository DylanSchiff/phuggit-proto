import styled from "styled-components";
import PageSpan from "../page-span.component";
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
const ANotification = () => {
    return (
        <AppNotificationBanner>
            <AppNotification>
                <PageSpan
                    color="var(--accent-004)"
                    fontsize="12.5px"
                    spantext="Take a moment to... recognize the libraries and tools that make this website possible. Details about the entire kit below."
                    // spantext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam labore dolorem, voluptates excepturi doloremque quas?"
                    fontsizesix="10px"
                />
                <AppNotificationLink
                    onClick={() => window.scrolltotoolkitsection()}
                >
                    <PageSpan
                        color="var(--accent-004)"
                        fontsize="12.5px"
                        spantext="Learn More"
                        fontsizesix="10px"
                    />
                </AppNotificationLink>
            </AppNotification>
        </AppNotificationBanner>
    );
};
export default ANotification;
