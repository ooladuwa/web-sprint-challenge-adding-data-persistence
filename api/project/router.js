// build your `/api/projects` router here
const express = require("express");

const Projects = require("./model.js");
const router = express.Router();

router.get("/projects", (req, res) => {
  Projects.findProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/projects", async (req, res, next) => {
  try {
    const newProject = await Projects.createProject({
      project_name: req.body.project_name,
      project_description: req.body.project_description,
      project_completed: req.body.project_completed,
    });
    console.log(newProject);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
