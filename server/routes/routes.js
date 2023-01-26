const express = require("express");
const router = express.Router();
const { postMedia, getMovie } = require("../controllers/controllers");

router.post("/postMedia", postMedia);
router.get("/getMovie", getMovie);

module.exports = router;
