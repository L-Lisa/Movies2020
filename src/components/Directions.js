import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "pages/Home"
import { Details } from "pages/Details"

export const Directions = () => {
    return (
        <BrowserRouter>
            {/*   <Nav/> */}
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