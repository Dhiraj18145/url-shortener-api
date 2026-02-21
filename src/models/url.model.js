const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
originalUrl: {
    type: String,
    required: true
},
shortCode: {
    type: String,
    required: true,
    unique: true
},
clickCount: {
    type: Number,
    default: 0
},
expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
}
}, { timestamps: true });

module.exports = mongoose.model("Url", urlSchema);
