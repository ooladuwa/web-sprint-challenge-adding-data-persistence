const db = require("../../data/dbConfig.js");
// const helpers = require("../../data/helpers/booleanHelpers.js");

const findResources = () => {
  return db("Resources");
};

const createResource = async (resource) => {
  const [resource_id] = await db("Resources").insert(resource);
  return findResources().where({ resource_id });
};

module.exports = {
  findResources,
  createResource,
};
// build your `Resource` model here
