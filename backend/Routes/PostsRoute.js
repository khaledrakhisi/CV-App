const express = require("express");
const controller = require("../controllers/PostsController");
const expressRouter = express.Router();
const { check } = require("express-validator");

expressRouter.get("/", controller.posts_getAll);
expressRouter.post("/",
[
  check("title").notEmpty(),
  check("content").isLength({ min: 6 }),
  check("created_date").isDate(),
  check("modified_date").isDate(),
  check("thumbnail").notEmpty(),
  check("ratings").notEmpty(),
],
controller.posts_getAll);

module.exports = expressRouter;