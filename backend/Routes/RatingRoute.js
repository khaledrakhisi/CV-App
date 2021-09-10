const express = require("express");
const controller = require("../controllers/RatingsController");
const expressRouter = express.Router();
const { check } = require("express-validator");

expressRouter.get("/:postId", controller.ratings_getAllPostLikes);
expressRouter.post("/",
[
  check("IPv4").isIP(),    
  check("rating_type").notEmpty(),
  check("created_date").isDate(),
  check("modified_date").isDate(),
  check("postId").notEmpty(),
],
controller.ratings_addNew);

module.exports = expressRouter;