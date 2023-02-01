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
        res.status(500).json(err.message);
    }
};

const getMovies = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const Movies = await prisma.media.findMany({
            where: {
                MediaType: "Movie",
            },
            orderBy: {
                Year: "desc",
            },
        });
        res.status(200).json(Movies);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getTVShows = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const TVShows = await prisma.media.findMany({
            where: {
                MediaType: "TV Show",
            },
            orderBy: {
                Year: "desc",
            },
        });
        res.status(200).json(TVShows);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getAnimes = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const Animes = await prisma.media.findMany({
            where: {
                MediaType: "Anime",
            },
            orderBy: {
                Year: "desc",
            },
        });
        res.status(200).json(Animes);
    } catch (err) {
        res.status(500).json(err.message);
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
        res.status(500).json(err.message);
    }
};

const getActors = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const actors =
            await prisma.$queryRaw`SELECT actor, SUM(medias) as movies_count FROM (SELECT Actor1 as actor, COUNT(*) as medias FROM media WHERE Actor1 != "" GROUP BY actor1 UNION ALL SELECT Actor2 as actor, COUNT(*) as medias FROM media WHERE Actor2 != "" GROUP BY Actor2 UNION ALL SELECT Actor3 as actor, COUNT(*) as medias FROM media WHERE Actor3 != "" GROUP BY Actor3 UNION ALL SELECT Actor4 as actor, COUNT(*) as medias FROM media WHERE Actor4 != "" GROUP BY Actor4) t GROUP BY actor ORDER BY movies_count DESC;`;
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getMoviesCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    const MediaType = "Movie";
    try {
        const moviesCount =
            await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS NumberOfMovies FROM media WHERE MediaType = ${MediaType}`;
        res.status(200).json(moviesCount);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = {
    postMedia,
    getMovies,
    getTVShows,
    getAnimes,
    deleteMedia,
    getActors,
    getMoviesCount,
};
