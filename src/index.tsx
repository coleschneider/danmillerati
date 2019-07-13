import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./theme/globalStyles";
import { size } from "./theme/devices";
import useWindowWidth from "./hooks/useWindowSize";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Routes = () => {
    const layout = useWindowWidth(size);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme(layout)}>
                <>
                    <GlobalStyle />
                    <App />
                </>
            </ThemeProvider>
        </BrowserRouter>
    );
};
ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
