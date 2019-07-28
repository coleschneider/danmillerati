import "intersection-observer";
import "./fonts/index.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

import theme from "./theme";

const Routes = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
};
ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.register();
