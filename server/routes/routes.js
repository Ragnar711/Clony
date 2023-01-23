const express = require("express");
const router = express.Router();
const { postMedia } = require("../controllers/controllers");

router.post("/postMedia", postMedia);

module.exports = router;
