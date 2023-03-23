const { makeApp } = require("./app");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const PORT = 8080;
const app = makeApp(prisma);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
