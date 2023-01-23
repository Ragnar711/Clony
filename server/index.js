const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
