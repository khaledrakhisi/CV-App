const express = require("express");
const controller = require("../controllers/NotesController");
const expressRouter = express.Router();
const { check } = require("express-validator");

expressRouter.get("/", controller.notes_getAll);
expressRouter.post("/",
[
  check("title").notEmpty(),
  check("content").isLength({ min: 6 }),
  check("userId").notEmpty(),
  check("created_date").isDate(),
],
controller.notes_addNew);

module.exports = expressRouter;