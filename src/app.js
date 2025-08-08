const express = require("express");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

// parse JSON body
app.use(express.json());

app.use("/api", messageRoutes);

module.exports = app;
