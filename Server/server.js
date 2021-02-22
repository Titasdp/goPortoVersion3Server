require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const router = require("../Server/Routes/routes");
// const expressSanitizer = require("express-sanitizer");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// app.use(expressSanitizer());

app.use(router);

app.listen(port, () => {
    console.log(`Server is working on door: ${port}`);
    console.log(`goPorte server is online and ready to serve`);
});