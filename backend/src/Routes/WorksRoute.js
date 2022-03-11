const express = require("express");
const { check } = require("express-validator");

const worksController = require("../controllers/WorksController");

const expressRouter = express.Router();

expressRouter.get("/", worksController.works_getAll);
expressRouter.post("/",
[
  check("title").not().isEmpty(),
  check("description").isLength({ min: 6 }),
//   check("duration").not().isEmpty(),
  check("tags").not().isEmpty(),
],
worksController.works_addNew);

module.exports = expressRouter;