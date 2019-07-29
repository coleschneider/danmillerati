import * as React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { RouteComponentProps, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery, { useGalleryContext } from "./pages/Gallery/Gallery";
import devices from "./theme/devices";

const Main = styled.div`
    @media ${devices.desktop} {
        padding: 0;
    }
    opacity: 1;
    display: block;
    transform-origin: 0% 0% 0;
    width: 100%;
`;

const Routes = ({ location }: RouteComponentProps) => (
    <useGalleryContext.Provider>
        <Switch location={location}>
            <Route path="/gallery" component={Gallery} key="gallery" />

            <Main key={location.pathname}>
                <Route exact path="/" component={Home} key="home" />
                <Route path="/about" component={About} key="about" />
            </Main>
        </Switch>
    </useGalleryContext.Provider>
);
export default Routes;
