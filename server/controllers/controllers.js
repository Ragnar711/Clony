const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postMedia = async (req, res, next) => {
    const {
        Name,
        Year,
        Review,
        MediaType,
        Director,
        Actor1,
        Actor2,
        Actor3,
        Actor4,
    } = req.body;
    try {
        const mediaExists = await prisma.Media.findUnique({
            where: {
                Name,
            },
        });
        if (mediaExists) {
            return res.status(400).json({
                message: "Media already exists",
            });
        }
        const newMedia = await prisma.Media.create({
            data: {
                Name,
                Year: Number(Year),
                Review: Number(Review),
                MediaType,
                Director,
                Actor1,
                Actor2,
                Actor3,
                Actor4,
            },
        });
        res.json(newMedia);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postMedia,
};
