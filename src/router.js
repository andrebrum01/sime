import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from './Pages/Home';
import DownLoad from "./Pages/DownLoad";

const Router = ()=>{
    return(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route
            path="/"
            component={Home}
            exact
            />
            <Route
            path="/download"
            component={DownLoad}
            exact
            />
        </Switch>
    </BrowserRouter>
    );
}

export default Router;