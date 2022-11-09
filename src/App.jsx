import styled from "styled-components";
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
        </AppContents>
    );
};
export default App;
