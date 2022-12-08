import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutingContext } from "./AAA/context/AAA-context/routing.context";
import AppWrap from "./components/AAA-components/app-wrap/app-wrap.component";
import Profile from "./components/AAA-components/profile/Profile.component";
// generate routes from context
const App = () => {
    const { currentRoutes } = useContext(RoutingContext);
    return (
        <Routes>
            <Route path="/*" element={<AppWrap />}>
                {currentRoutes &&
                    currentRoutes.map((account) => {
                        return (
                            <Route
                                key={account.uid}
                                path={account.routePath}
                                index
                                element={<Profile account={account} />}
                            />
                        );
                    })}
                <Route path="test" index element={"nothing"} />
            </Route>
        </Routes>
    );
};
export default App;
