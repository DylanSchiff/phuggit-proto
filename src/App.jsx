import styled from "styled-components";
import PopBackground from "./components/pop/pop-background.component";
import PopDisplay from "./components/pop/pop-display.component";
import PopTray from "./components/pop/pop-tray.component";

const AppContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
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
