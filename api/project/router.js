const express = require("express");

const Projects = require("./model.js");
const router = express.Router();

router.get("/projects", (req, res, next) => {
  Projects.findProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/projects", (req, res, next) => {
  Projects.createProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

module.exports = router;
