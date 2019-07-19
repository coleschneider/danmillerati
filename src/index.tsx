import "intersection-observer";
import "./fonts/index.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import Router from "./utils/Router";
import theme from "./theme";

const Routes = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Router>
    );
};
ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.register();
