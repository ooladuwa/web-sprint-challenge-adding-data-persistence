const db = require("../../data/dbConfig.js");

const findTasks = async () => {
  let allTasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");

  allTasks.forEach((task) => {
    task.task_completed === 1
      ? (task.task_completed = true)
      : (task.task_completed = false);
  });
  return allTasks;
};

const createTask = async (task) => {
  const [task_id] = await db("tasks as t").insert(task);

  let newTask = await db("tasks as t")
    .where("task_id", task_id)
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description")
    .first();

  [newTask].forEach((task) => {
    task.task_completed === 1
      ? (task.task_completed = true)
      : (task.task_completed = false);
  });
  return newTask;
};

module.exports = {
  findTasks,
  createTask,
};
