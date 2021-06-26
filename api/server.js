// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./project/router.js");
const resourceRouter = require("./resource/router.js");
const taskRouter = require("./task/router.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api", projectRouter);
server.use("/api", resourceRouter);
server.use("/api", taskRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "We up and running my dude!" });
});

module.exports = server;
