const validUrl = require("valid-url");

module.exports = (req, res, next) => {
const { originalUrl } = req.body;

if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({ message: "Invalid URL" });
}

next();
};