import React from "react";

import "./index.css";

import Editor from "../../components/Editor";
import Console from "../../components/Console";

function Home()
{
    return(
        <div className="half-horizontal">
            <div className="left-screen">
                <Editor />
            </div>
            <div className="half-vertical">
                <Console />
            </div>
        </div>
    )
}

export default Home;