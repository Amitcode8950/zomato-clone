require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// test api

app.get("/", (req, res) => {
  res.send("hello world");
});
// auth Routes
app.use("/api/auth", authRoutes);
// food Routes
app.use("/api/food", foodRoutes);


module.exports = app;
