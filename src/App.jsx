import styled from "styled-components";
import PopBackground from "./pop-background.component";
import PopDisplay from "./pop-display.component";
import PopTray from "./pop-tray.component";

const AppContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;
`;

const App = () => {
    return (
        <AppContents>
            <PopTray />
            <PopDisplay />
            <PopBackground />
        </AppContents>
    );
};
export default App;
