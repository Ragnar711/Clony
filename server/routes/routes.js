const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/controllers");

router.post("/postMedia", postMedia);
router.get("/getMovies", getMovies);
router.get("/getTVShows", getTVShows);
router.get("/getAnimes", getAnimes);
router.delete("/deleteMedia/:id", deleteMedia);
router.get("/getActors", getActors);
router.get("/getDirectors", getDirectors);
router.get("/getGenres", getGenres);
router.get("/getMoviesCount", getMoviesCount);
router.get("/getYearlyMoviesCount", getYearlyMoviesCount);
router.get("/getTVShowsCount", getTVShowsCount);
router.get("/getAnimesCount", getAnimesCount);
router.post("/postUser", postUser);

module.exports = router;
