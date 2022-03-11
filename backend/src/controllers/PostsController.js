const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");
const Post = require("../models/Post");

async function posts_getAll(req, res, next) {

  let posts = null;
  try {
    posts = await Post.find({});
    // console.log(resumeData);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("posts ctrler: something's wrong with the database!", 500)
    );
  }

  if (!posts || posts.length === 0) {
    return next(new HttpError("no post found.", 500));
  }
  // console.log(posts);
  res
    .status(200)
    .json({
      posts: posts.map((item) => item.toObject({ getters: true })),
    });
}

exports.posts_getAll = posts_getAll;