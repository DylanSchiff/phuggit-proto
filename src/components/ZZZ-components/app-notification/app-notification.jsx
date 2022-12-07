import { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../../ap/context/color.context";
import PageSpan from "../page-span.component";
const AppNotificationBanner = styled.div`
    width: 100%;
    padding: 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const AppNotification = styled.span``;
const AppNotificationLink = styled.a.attrs((props) => ({
    style: {
        color: props.currentColor,
    },
}))`
    transition: 111ms;
    margin-left: 5px;
    cursor: pointer;
    font-weight: 500;
    user-select: none;
    &:hover {
        text-decoration: underline;
    }
`;
const ANotification = ({ notificationData }) => {
    const { currentColor } = useContext(ColorContext);
    return (
        <AppNotificationBanner>
            <AppNotification>
                <PageSpan
                    fontsize="12.5px"
                    spantext={notificationData.notificationText}
                    fontsizesix="10px"
                />
                <AppNotificationLink
                    onClick={() => window.scrolltocontactsection()}
                    currentColor={currentColor}
                >
                    <PageSpan
                        fontsize="12.5px"
                        spantext={notificationData.notificationButtonText}
                        fontsizesix="10px"
                    />
                </AppNotificationLink>
            </AppNotification>
        </AppNotificationBanner>
    );
};
export default ANotification;
