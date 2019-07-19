import React from "react";
import { Route, matchPath, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Routes from "./Routes";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";

const AppContainer = styled.div`
    outline: none;
`;

const App = () => {
    return (
        <ErrorBoundary>
            <Route
                render={(props: RouteComponentProps) => {
                    const isGalleryRoutes = matchPath(props.location.pathname, {
                        path: "/gallery"
                    });
                    return (
                        <AppContainer>
                            <Header />
                            <Routes {...props} />
                            {!isGalleryRoutes && <Footer />}
                        </AppContainer>
                    );
                }}
            />
        </ErrorBoundary>
    );
};

export default App;
