import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { PublicRoute } from "./utils";
import { MainLayout } from "./layouts";
import { Portfolio, Journal, ViewArticle } from "./views";

function Routes() {
    return (
        <BrowserRouter>
            <PublicRoute
                path="/"
                layout={MainLayout}
                component={Portfolio}
                exact
            />
            <PublicRoute
                path="/journal"
                layout={MainLayout}
                component={Journal}
                exact
            />
            <PublicRoute
                path="/journal/:topic/:title/:id"
                layout={MainLayout}
                component={ViewArticle}
                exact
            />
        </BrowserRouter>
    );
}

export default Routes;
