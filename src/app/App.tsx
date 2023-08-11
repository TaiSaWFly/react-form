import React, { lazy, Suspense } from "react";
import withStore from "./hoc/withStore";
import withRouter from "./hoc/withRouter";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import EditFormPage from "./components/pages/EditFormPage/EditFormPage";
import Loading from "./components/common/Loading/Loading";

const LazyFormPage = lazy(() => import("./components/pages/FormPage/FormPage"));

const App: React.FC = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/form/edit" component={EditFormPage} />
                <Route
                    path="/form"
                    render={() => (
                        <Suspense fallback={<Loading />}>
                            <LazyFormPage />
                        </Suspense>
                    )}
                />

                <Redirect to="/" from="*" />
            </Switch>
        </>
    );
};

const AppWithStoreAndRoutes = withStore(withRouter(App));

export default AppWithStoreAndRoutes;
