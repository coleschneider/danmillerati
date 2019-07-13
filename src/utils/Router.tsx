import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RouteChildrenProps, RouteComponentProps } from "react-router";

export const RouterContext = React.createContext<RouteChildrenProps>(
    {} as RouteComponentProps
);

const CustomBrowserRouter = ({
    children
}: {
    children: React.ReactElement;
}) => (
    <BrowserRouter>
        <Route>
            {routeProps => (
                <RouterContext.Provider value={routeProps}>
                    {children}
                </RouterContext.Provider>
            )}
        </Route>
    </BrowserRouter>
);

export default CustomBrowserRouter;
