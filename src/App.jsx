import styled from "styled-components";
import PopDisplay from "./pop-display.component";
import PopTray from "./pop-tray.component";

const AppContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const App = () => {
    return (
        <AppContents>
            <PopTray />
            <PopDisplay />
        </AppContents>
    );
};
export default App;
