require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

connectDB();

app.use(express.json());

app.use("/", require("./routes/url.routes"));


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
max: 100
});

app.use(limiter);

module.exports=app



