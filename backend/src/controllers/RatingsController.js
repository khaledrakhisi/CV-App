const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");
const Post = require("../models/Post");
const Rating = require("../models/Rating");

async function ratings_getAllPostLikes(req, res, next) {
  const postId = req.params.postId; //{postId:"the value"}

  let ratings = null;
  try {
    ratings = await Rating.find({ postId: postId, rating_type: "like" }).populate(
      "Post"
    );
    // console.log(resumeData);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("ratings ctrler: something's wrong with the database!", 500)
    );
  }

  if (!ratings || ratings.length === 0) {
    return next(new HttpError("no rating found.", 500));
  }
  // console.log(ratings);
  res.status(200).json({
    ratings: ratings.map((item) => item.toObject({ getters: true })),
  });
}

async function ratings_addNew(req, res, next) {
  const result = validationResult(req).formatWith(
    ({ location, msg, param, value, nestedErrors }) => {
      // Build your resulting errors however you want! String, object, whatever - it works!
      return `${param} has ${msg} >>> ${value}`;
    }
  );
  if (!result.isEmpty()) {
    // Response will contain something like
    // { errors: [ "body[password]: must be at least 10 chars long" ] }
    // return res.json({ errors: result.array() });
    let errorMessage = "";
    result.array().forEach((element) => {
      errorMessage += element + "\n";
    });
    return next(new HttpError(errorMessage, 422));
  }
  const {
    IPv4,
    IPv6,
    comment,
    city,
    country_code,
    country_name,
    latitude,
    longitude,
    postal,
    state,
    rating_type,
    created_date,
    modified_date,
    postId,
  } = req.body;

  const rating = new Rating({
    IPv4,
    IPv6,
    comment,
    city,
    country_code, //"IR"
    country_name, //"Iran"
    latitude, //35.6961,
    longitude, //51.4231,
    postal,
    state, //null,
    rating_type, // "like"
    created_date,
    modified_date,
    postId,
  });

  // console.log(rating);
  let post = null;
  try {
    post = await Post.findById(postId);
  } catch (error) {
    console.log(error);
    return next(
      new HttpError("ratings: something's wrong with the database!", 500)
    );
  }

  if (!post) {
    return next(
      new HttpError("the id provided for the post is not exist.", 404)
    );
  }
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await rating.save({ session });
    post.ratings.push(rating);
    await post.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Adding new rating was failed.", 500));
  }

  res.status(201).json({ rating: rating });
}

exports.ratings_getAllPostLikes = ratings_getAllPostLikes;
exports.ratings_addNew = ratings_addNew;
