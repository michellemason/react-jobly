import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import CompanyList from "./Companies/CompanyList";
import CompanyDetail from "./Companies/CompanyDetail";
import JobList from "./Jobs/JobList";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";

function Routes({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <Route exact path="/companies">
                    <CompanyList />
                </Route>

                <Route exact path="/jobs">
                    <JobList />
                </Route>

                <Route exact path="/companies/:handle">
                    <CompanyDetail />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;