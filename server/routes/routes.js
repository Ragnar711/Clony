const express = require("express");
const router = express.Router();
const {
    postMedia,
    getMovies,
    getTVShows,
    getAnimes,
    deleteMedia,
    getActors,
    getMoviesCount,
} = require("../controllers/controllers");

router.post("/postMedia", postMedia);
router.get("/getMovies", getMovies);
router.get("/getTVShows", getTVShows);
router.get("/getAnimes", getAnimes);
router.delete("/deleteMedia/:id", deleteMedia);
router.get("/getActors", getActors);
router.get("/getMoviesCount", getMoviesCount);

module.exports = router;
