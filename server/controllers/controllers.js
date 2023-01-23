const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postMedia = async (req, res, next) => {
    const { Name, Year, Review, MediaType, Actor1, Actor2, Actor3 } = req.body;
    try {
        const mediaExists = await prisma.media.findUnique({
            where: {
                Name,
            },
        });
        if (mediaExists) {
            return res.status(400).json({
                message: "Media already exists",
            });
        }
        const newMedia = await prisma.media.create({
            data: {
                Name,
                Year,
                Review,
                MediaType,
                Actor1,
                Actor2,
                Actor3,
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
