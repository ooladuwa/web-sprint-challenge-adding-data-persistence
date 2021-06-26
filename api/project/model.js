const db = require("../../data/dbConfig.js");
// const helpers = require("../../data/helpers/booleanHelpers.js");

const findProjects = () => {
  return db("projects");
};

const createProject = async (project) => {
  const [project_id] = await db("projects").insert(project);
  return findProjects().where({ project_id });
};

module.exports = {
  findProjects,
  createProject,
};
