import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { PublicRoute } from "./utils";
import { MainLayout } from "./layouts";
import { Portfolio, Journal, ViewArticle, NewArticle, Apps, DSA } from "./views";

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
                path="/journal/:title/:id"
                layout={MainLayout}
                component={ViewArticle}
                exact
            />
            <PublicRoute
                path="/journal/new-article"
                layout={MainLayout}
                component={NewArticle}
                exact
            />
            <PublicRoute
                path="/projects"
                layout={MainLayout}
                component={Apps}
                exact
            />
            <PublicRoute
                path="/dsa"
                layout={MainLayout}
                component={DSA}
                exact
            />

        </BrowserRouter>
    );
}

export default Routes;
