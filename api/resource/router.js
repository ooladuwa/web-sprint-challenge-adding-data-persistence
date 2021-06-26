const express = require("express");

const Resources = require("./model.js");
const router = express.Router();

router.get("/resources", (req, res) => {
  Resources.findResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/resources", async (req, res, next) => {
  try {
    const newResource = await Resources.createResource({
      resource_name: req.body.resource_name,
      resource_description: req.body.resource_description,
    });
    console.log(newResource);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
