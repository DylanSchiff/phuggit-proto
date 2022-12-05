import { Route, Routes } from "react-router-dom";
import NewTwo from "./components/a-new-two/new-two.component";
import NavigationWrap from "./components/app-navigation-wrapper/Navigation-wrap.component";
import Home from "./components/home/Home.component";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavigationWrap />}>
                <Route path="old-home" index element={<Home />}></Route>
                <Route path="n2" element={<NewTwo />}></Route>
            </Route>
        </Routes>
    );
};
export default App;
