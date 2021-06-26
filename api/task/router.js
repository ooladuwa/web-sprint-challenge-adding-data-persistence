const express = require("express");

const Tasks = require("./model.js");
const router = express.Router();

router.get("/tasks", (req, res) => {
  Tasks.findTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/tasks", async (req, res, next) => {
  try {
    const newTask = await Tasks.createResource({
      task_description: req.body.task_description,
      task_notes: req.body.task_notes,
      task_completed: req.body.task_completed,
    });
    console.log(newTask);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
