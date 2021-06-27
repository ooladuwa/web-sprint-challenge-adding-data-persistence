const db = require("../../data/dbConfig.js");

const findResources = () => {
  return db("resources");
};

const createResource = async (resource) => {
  const [resource_id] = await db("resources").insert(resource);

  return db("resources").where("resource_id", resource_id).first();
};

module.exports = {
  findResources,
  createResource,
};
