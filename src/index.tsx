import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./theme/globalStyles";
import { size } from "./theme/devices";
import useWindowWidth from "./hooks/useWindowSize";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Router from "./utils/Router";

const Routes = () => {
    const layout = useWindowWidth(size);
    return (
        <Router>
            <ThemeProvider theme={theme(layout)}>
                <>
                    <GlobalStyle />
                    <App />
                </>
            </ThemeProvider>
        </Router>
    );
};
ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.register();
