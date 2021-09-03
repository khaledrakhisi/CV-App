const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");
const Resume = require("../models/Resume");

async function resume_getAll(req, res, next) {

  let resumeData = null;
  try {
    resumeData = await Resume.find({});
    // console.log(resumeData);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("resume ctrler: something's wrong with the database!", 500)
    );
  }

  if (!resumeData || resumeData.length === 0) {
    return next(new HttpError("no resume found.", 500));
  }
  console.log(resumeData);
  res
    .status(200)
    .json({
      resume: resumeData.map((item) => item.toObject({ getters: true })),
    });
}

exports.resume_getAll = resume_getAll;
