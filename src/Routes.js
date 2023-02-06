import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import CompanyList from "./Companies/CompanyList";
import JobList from "./Jobs/JobList";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/companies">
                    <CompanyList />
                </Route>

                <Route exact path="/jobs">
                    <JobList />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;