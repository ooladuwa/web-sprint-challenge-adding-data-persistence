const db = require("../../data/dbConfig.js");

const findProjects = async () => {
  const allProjects = await db("projects");

  allProjects.forEach((project) => {
    project.project_completed === 1
      ? (project.project_completed = true)
      : (project.project_completed = false);
  });
  return allProjects;
};

const createProject = async (project) => {
  const [project_id] = await db("projects").insert(project);

  const newProject = await db("projects")
    .where("project_id", project_id)
    .first();

  [newProject].forEach((project) => {
    project.project_completed === 1
      ? (project.project_completed = true)
      : (project.project_completed = false);
  });
  return newProject;
};

module.exports = {
  findProjects,
  createProject,
};
