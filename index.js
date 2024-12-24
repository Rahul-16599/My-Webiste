
//
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 4000;



app.use(express.static(path.join(__dirname, 'public')));


app.get ("/api/users/rahul", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get ("/api/users/amazon", (req, res) => {
    res.sendFile(path.join(__dirname, "public/amazon/project.html"));
});


app.listen(PORT, () => {
    console.log("Server Started at", PORT);
    });
