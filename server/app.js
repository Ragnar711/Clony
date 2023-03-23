const express = require("express");

const makeApp = (prisma) => {
    const app = express();
    const cors = require("cors");
    const routes = require("./routes/routes");
    app.set("prisma", prisma);
    app.use(cors({ origin: "*" }));
    app.use(express.json());
    app.use(routes);
    return app;
};

module.exports = {
    makeApp,
};
