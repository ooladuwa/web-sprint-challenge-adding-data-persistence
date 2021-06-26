// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./project/router.js");
const ResourceRouter = require("./resource/router.js");
const TaskRouter = require("./task/router.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api", ProjectRouter);
server.use("/api", ResourceRouter);
server.use("/api", TaskRouter);

server.get("/api", (req, res) => {
  res.status(200).json({ api: "This challenge is up and running my dude!" });
});

module.exports = server;
