import * as React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { RouteComponentProps, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery, { useGalleryContext } from "./pages/Gallery/Gallery";
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

const Routes = ({ location }: RouteComponentProps) => (
    <useGalleryContext.Provider>
        <Switch location={location}>
            <Route path="/gallery" component={Gallery} key="gallery" />
            <PoseGroup>
                <Main key={location.pathname}>
                    <Route exact path="/" component={Home} key="home" />
                    <Route path="/about" component={Home} key="about" />
                </Main>
            </PoseGroup>
        </Switch>
    </useGalleryContext.Provider>
);
export default Routes;
