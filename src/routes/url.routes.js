const express = require("express");
const router = express.Router();

const validateUrl = require("../middlewares/validateURL.middleware");

const {
createShortUrl,
redirectUrl,
getStats
} = require("../controllers/url.controller");

router.post("/shorten", validateUrl, createShortUrl);

router.get("/stats/:shortCode", getStats);

router.get("/:shortCode", redirectUrl);

module.exports = router;
