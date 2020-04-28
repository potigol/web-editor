const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// body parser (placeholder)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// react preset
app.use(express.static("../build/"));
app.get('*', (req,res) => {
    console.log()
    res.sendFile(path.join(process.cwd(), "build/index.html"));
});

// start server
app.listen(port, () => console.log("Running", port));