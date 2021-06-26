const db = require("../../data/dbConfig.js");
// const helpers = require("../../data/helpers/booleanHelpers.js");

const findTasks = () => {
  return db("tasks");
};

const createTask = async (task) => {
  const [task_id] = await db("tasks as t")
    .insert(task)
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.product_description");

  return findTasks(task_id);
};

module.exports = {
  findTasks,
  createTask,
};
