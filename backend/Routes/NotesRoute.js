const express = require("express");
const controller = require("../controllers/NotesController");
const expressRouter = express.Router();
const { check } = require("express-validator");

expressRouter.get("/", controller.notes_getAll);
expressRouter.post("/",
[
  check("title").not().isEmpty(),
  check("content").isLength({ min: 6 }),
  check("userId").not().isEmpty(),
  check("creationDate").not().isEmpty(),
],
controller.notes_addNew);

module.exports = expressRouter;