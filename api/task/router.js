const express = require("express");

const Tasks = require("./model.js");
const router = express.Router();

router.get("/tasks", (req, res, next) => {
  Tasks.findTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/tasks", async (req, res, next) => {
  Tasks.createTask(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch(next);
});

module.exports = router;
