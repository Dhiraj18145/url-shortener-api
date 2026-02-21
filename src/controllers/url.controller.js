const { nanoid } = require("nanoid");
const Url = require("../models/url.model");

exports.createShortUrl = async (req, res) => {
try {
    const { originalUrl, expiryDays } = req.body;

    const shortCode = nanoid(6);

    const expiresAt = expiryDays
      ? new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000)
      : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const newUrl = await Url.create({
    originalUrl,
    shortCode,
    expiresAt
    });

    res.status(201).json({
    shortUrl: `${process.env.BASE_URL}/${shortCode}`,
    expiresAt
    });

} catch (error) {
    res.status(500).json({ message: "Server error" });
}
};

exports.redirectUrl = async (req, res) => {
try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
    return res.status(404).json({ message: "URL not found" });
    }

    // 🔥 Expiry Check
    if (url.expiresAt && url.expiresAt < new Date()) {
    return res.status(410).json({ message: "URL has expired" });
    }

    url.clickCount++;
    await url.save();

    res.redirect(url.originalUrl);

} catch (error) {
    res.status(500).json({ message: "Server error" });
}
};

exports.getStats = async (req, res) => {
try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
    return res.status(404).json({ message: "URL not found" });
    }

    res.status(200).json({
    originalUrl: url.originalUrl,
    shortCode: url.shortCode,
    clickCount: url.clickCount,
    createdAt: url.createdAt
    });

} catch (error) {
    res.status(500).json({ message: "Server error" });
}
};
