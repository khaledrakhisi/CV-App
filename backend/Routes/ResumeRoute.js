const express = require("express");

const controller = require("../controllers/ResumeController");

const expressRouter = express.Router();

expressRouter.get("/", controller.resume_getAll);

module.exports = expressRouter;