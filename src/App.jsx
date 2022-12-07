import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { FreshAccountContext } from "./ap/context/fresh-account.context";
import NavigationWrap from "./components/app-navigation-wrapper/Navigation-wrap.component";
const App = () => {
    const { currentRoutes } = useContext(FreshAccountContext);
    return (
        <Routes>
            <Route path="/*" element={<NavigationWrap />}>
                {currentRoutes &&
                    currentRoutes.map((routePath) => {
                        return (
                            <Route
                                key={routePath}
                                path={routePath}
                                index
                                element={`${routePath}`}
                            />
                        );
                    })}
            </Route>
        </Routes>
    );
};
export default App;
