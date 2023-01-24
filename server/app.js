const express = require("express");
const app = express();

const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

module.exports = {
    app,
};
