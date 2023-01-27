const express = require("express");
const router = express.Router();
const {
    postMedia,
    getMovies,
    getTVShows,
    getAnimes,
} = require("../controllers/controllers");

router.post("/postMedia", postMedia);
router.get("/getMovies", getMovies);
router.get("/getTVShows", getTVShows);
router.get("/getAnimes", getAnimes);

module.exports = router;
