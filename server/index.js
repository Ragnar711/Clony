const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(
    cors({
        origin: "*",
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

async function main() {}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

app.use("/", routes);

app.listen(5000, () => {
    console.log("listening on port 5000");
});
