import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from "./pages/Home";

function Routes()
{
    return(
        <BrowserRouter>
            <Route exact path='/'>
                <Home />
            </Route>
        </BrowserRouter>
    )
};

export default Routes;