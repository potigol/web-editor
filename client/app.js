import React from "react";
import Router from "./routes";
import { hot } from 'react-hot-loader';
const finishHOT = hot(module);

function App()
{
    return (<Router />)
}

export default finishHOT(App);