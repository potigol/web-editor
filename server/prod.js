const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// body parser (placeholder)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// react preset
app.use(express.static("../build/"));
app.get('*', (req,res) => {
    res.sendFile("../build/index.html");
});

// start server
app.listen(port, () => console.log("Running", port));