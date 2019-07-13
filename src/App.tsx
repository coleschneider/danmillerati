import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import Header from "./sections/Header/Header";
import devices from "./theme/devices";

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
        <Route
            render={({ location }) => (
                <div className="App_Container">
                    {/* <a className="skip" href="/" /> */}
                    <Header />
                    <PoseGroup>
                        <Main key={location.pathname}>
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
                                    key="home"
                                />
                                <Route
                                    path="/about"
                                    component={About}
                                    key="about"
                                />
                            </Switch>
                        </Main>
                    </PoseGroup>
                </div>
            )}
        />
    );
};

export default App;
