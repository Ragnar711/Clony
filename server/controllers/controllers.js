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
    const prisma = req.app.get("prisma")
    try {
        const mediaExists = await prisma.media.findUnique({
            where: {
                Name,
            },
        });
        if (mediaExists) {
            res.status(400).json({
                message: "Media already exists",
            });
            return;
        }
        const newMedia = await prisma.media.create({
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
        res.status(200).json(newMedia);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postMedia,
};
