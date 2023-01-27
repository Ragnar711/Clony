const postMedia = async (req, res) => {
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
    const prisma = req.app.get("prisma");
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
                MediaType,
                Review: Number(Review),
                Director,
                Actor1,
                Actor2,
                Actor3,
                Actor4,
            },
        });
        res.status(201).json(newMedia);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMovies = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const Movies = await prisma.media.findMany({
            where: {
                MediaType: "Movie",
            },
        });
        res.status(200).json(Movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTVShows = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const TVShows = await prisma.media.findMany({
            where: {
                MediaType: "TV Show",
            },
        });
        res.status(200).json(TVShows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getAnimes = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const Animes = await prisma.media.findMany({
            where: {
                MediaType: "Anime",
            },
        });
        res.status(200).json(Animes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteMedia = async (req, res) => {
    const prisma = req.app.get("prisma");
    const { id } = req.params;
    try {
        const deleted = await prisma.media.delete({
            where: {
                id,
            },
        });
        res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    postMedia,
    getMovies,
    getTVShows,
    getAnimes,
    deleteMedia,
};
