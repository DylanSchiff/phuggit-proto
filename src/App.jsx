import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutingContext } from "./AAA/context/AAA-context/routing.context";
import AppWrap from "./components/AAA-components/app-wrap/app-wrap.component";
// generate routes from context
const App = () => {
    const { currentRoutes } = useContext(RoutingContext);

    return (
        <Routes>
            <Route path="/*" element={<AppWrap />}>
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
