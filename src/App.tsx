import React from "react";
import {
    Route,
    Link,
    Switch,
    matchPath,
    RouteComponentProps
} from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import devices from "./theme/devices";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
});
const Main = styled(RouteContainer)`
    @media ${devices.desktop} {
        padding: 0;
    }

    opacity: 1;
    display: block;
    transform-origin: 0% 0% 0;
    width: 100%;
`;

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const About = () => (
    <div>
        <h2>Home</h2>
        <ListContainer>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>

            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
            <Item>
                <Link to="/about">About</Link>
                <p>Some generic description about the about page. About.</p>
            </Item>
        </ListContainer>
    </div>
);

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Route
                render={(props: RouteComponentProps) => {
                    const isGalleryRoutes = matchPath(props.location.pathname, {
                        path: "/gallery/:currentIndex?"
                    });

                    const { location } = props;
                    return (
                        <div className="App_Container">
                            <Header
                                displayBack={
                                    isGalleryRoutes
                                        ? isGalleryRoutes.isExact
                                        : false
                                }
                            />
                            <Route
                                path="/gallery/:currentIndex?"
                                // @ts-ignore
                                component={Gallery}
                                key="about"
                            />
                            <Switch location={location}>
                                <PoseGroup>
                                    <Main key={location.pathname}>
                                        <Route
                                            exact
                                            path="/"
                                            component={Home}
                                            key="home"
                                        />
                                        <Route
                                            path="/about"
                                            component={Home}
                                            key="about"
                                        />
                                    </Main>
                                </PoseGroup>
                            </Switch>
                            {!isGalleryRoutes && <Footer />}
                        </div>
                    );
                }}
            />
        </ErrorBoundary>
    );
};

export default App;
