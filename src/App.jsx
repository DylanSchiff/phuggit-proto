import { Route, Routes } from "react-router-dom";
import AccountBox from "./components/account-box/account-box.component";
import NavigationWrap from "./components/app-navigation-wrapper/Navigation-wrap.component";
import Home from "./components/home/Home.component";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavigationWrap />}>
                <Route path="old-home" index element={<Home />} />
                <Route path="account" element={<AccountBox />} />
            </Route>
        </Routes>
    );
};
export default App;
