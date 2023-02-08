const { createHash } = require("crypto");

const hash = (input) => {
    return createHash("sha256").update(input).digest("hex");
};

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
            return res.status(400).json({
                message: "Media already exists",
            });
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
        return res.status(201).json(newMedia);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getMovies = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const movies = await prisma.media.findMany({
            where: {
                MediaType: "Movie",
            },
            orderBy: {
                Year: "desc",
            },
        });
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getTVShows = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const tvShows = await prisma.media.findMany({
            where: {
                MediaType: "TV Show",
            },
            orderBy: {
                Year: "desc",
            },
        });
        return res.status(200).json(tvShows);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getAnimes = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const animes = await prisma.media.findMany({
            where: {
                MediaType: "Anime",
            },
            orderBy: {
                Year: "desc",
            },
        });
        return res.status(200).json(animes);
    } catch (err) {
        return res.status(500).json({ error: err.message });
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
        return res.status(200).json({ deleted });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getActors = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const actors =
            await prisma.$queryRaw`SELECT actor, SUM(medias) as movies_count FROM (SELECT Actor1 as actor, COUNT(*) as medias FROM media WHERE Actor1 != "" GROUP BY actor1 UNION ALL SELECT Actor2 as actor, COUNT(*) as medias FROM media WHERE Actor2 != "" GROUP BY Actor2 UNION ALL SELECT Actor3 as actor, COUNT(*) as medias FROM media WHERE Actor3 != "" GROUP BY Actor3 UNION ALL SELECT Actor4 as actor, COUNT(*) as medias FROM media WHERE Actor4 != "" GROUP BY Actor4) t GROUP BY actor ORDER BY movies_count DESC;`;
        return res.status(200).json(actors);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getDirectors = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const directors =
            await prisma.$queryRaw`SELECT director, CAST(COUNT(*) AS CHAR) as movies_count FROM media WHERE director != "" GROUP BY director ORDER By movies_count DESC;`;
        res.status(200).json(directors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getGenres = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const rows = await prisma.$queryRaw`SELECT Genre1, Genre2 FROM media`;
        const genres = {};
        for (const row of rows) {
            for (const genre of Object.values(row)) {
                if (!genre) continue;
                genres[genre] = (genres[genre] || 0) + 1;
            }
        }
        const data = Object.entries(genres).map(([genre, count]) => ({
            y: count,
            label: genre,
        }));
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getMoviesCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const moviesCount = await prisma.media.count({
            where: { MediaType: "movie" },
        });
        return res.status(200).json(moviesCount);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getYearlyMoviesCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    const MediaType = "Movie";
    try {
        const yearlyMoviesCount =
            await prisma.$queryRaw`SELECT CAST(COUNT(*) AS CHAR) AS YearlyNumberOfMovies FROM media WHERE MediaType = ${MediaType} AND YEAR > YEAR(DATE_SUB(CURDATE(), INTERVAL 1 YEAR))`;
        return res.status(200).json(yearlyMoviesCount);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getTVShowsCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const tvShowsCount = await prisma.media.count({
            where: { MediaType: "TV Show" },
        });
        return res.status(200).json(tvShowsCount);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

const getAnimesCount = async (req, res) => {
    const prisma = req.app.get("prisma");
    try {
        const animesCount = await prisma.media.count({
            where: { MediaType: "Anime" },
        });
        return res.status(200).json(animesCount);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const postUser = async (req, res) => {
    const { username, email, password } = req.body;
    const prisma = req.app.get("prisma");
    try {
        const usernameExists = await prisma.users.findUnique({
            where: { username },
        });
        const emailexists = await prisma.users.findUnique({ where: { email } });
        if (usernameExists || emailexists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await prisma.users.create({
            data: {
                username,
                email,
                password: hash(password),
            },
        });
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const putUser = async (req, res) => {
    const prisma = req.app.get("prisma");
    const { username, password } = req.body;
    try {
        const user = await prisma.users.findMany({
            where: {
                username,
            },
        });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const hashedPassword = hash(password);
        if (hashedPassword !== user[0].password) {
            return res.status(400).json({ error: "Wrong password" });
        }
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    postMedia,
    getMovies,
    getTVShows,
    getAnimes,
    deleteMedia,
    getActors,
    getDirectors,
    getGenres,
    getMoviesCount,
    getYearlyMoviesCount,
    getTVShowsCount,
    getAnimesCount,
    postUser,
    putUser,
};
