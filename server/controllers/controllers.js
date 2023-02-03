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
        Genre1,
        Genre2,
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
                Name: Name.trim(),
                Year: Number(Year),
                MediaType,
                Review: Number(Review),
                Director: Director.trim(),
                Actor1: Actor1.trim(),
                Actor2: Actor2.trim(),
                Actor3: Actor3.trim(),
                Actor4: Actor4.trim(),
                Genre1: Genre1.trim(),
                Genre2: Genre2.trim(),
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

const getYearlyMoviesCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    const MediaType = "Movie";
    try {
        const yearlyMoviesCount =
            await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS YearlyNumberOfMovies FROM media WHERE MediaType = ${MediaType} AND YEAR >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)`;
        res.status(200).json(yearlyMoviesCount);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getTVShowsCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    const MediaType = "TV Show";
    try {
        const tvShowsCount =
            await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS numberOfTVShows FROM media WHERE MediaType = ${MediaType}`;
        res.status(200).json(tvShowsCount);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getAnimesCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    const MediaType = "Anime";
    try {
        const animesCount =
            await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS numberOfAnimes FROM media WHERE MediaType = ${MediaType}`;
        res.status(200).json(animesCount);
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
    getYearlyMoviesCount,
    getTVShowsCount,
    getAnimesCount,
};
