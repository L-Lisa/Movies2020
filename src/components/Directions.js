import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "pages/Home"
import { Details } from "pages/Details"
/* import { Header } from "components/Header" */

export const Directions = () => {
    return (
        <BrowserRouter>

            <main>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/episode-details/:id" exact>
                        <Details />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    )
}