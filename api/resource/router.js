const express = require("express");

const Resources = require("./model.js");
const router = express.Router();

router.get("/resources", (req, res, next) => {
  Resources.findResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/resources", (req, res, next) => {
  Resources.createResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

module.exports = router;
