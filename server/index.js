const env = process.env.NODE_ENV;
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// body parser (placeholder)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// react preset
if(env)
{
    app.use(express.static(path.join(process.cwd(), "build")));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
    });
}

// start server
app.listen(port, () => console.log("Running", port));