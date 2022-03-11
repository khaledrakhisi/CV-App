// const { v4: uuid_v4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/HttpError");
const User = require("../models/User");

const getAllUsers = async (req, res, next) => {
  //console.log("GET request in places");

  let users = null;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("users: something's wrong with the database!", 500)
    );
  }

  if (!users || users.length === 0) {
    return next(new HttpError("no user found.", 500));
  }

  res.status(200).json({users: users.map((item) => item.toObject({ getters: true }))});
};

const getUserById = (req, res, next) => {
  const userId = req.params.userId; //{placeid:"the value"}
  const user = USERS.find((item) => item.id === userId);

  if (!user) {
    throw new HttpError("user not found.", 404);
  }

  res.status(200).json({ user });
};

const userLogin = async (req, res, next) => {
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

  const { email, password } = req.body;

  let user = null;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("users: something's wrong with the database!", 500)
    );
  }

  if (!user || user.password !== password) {
    // 401 === authentication is failed
    return next(
      new HttpError(
        "user not found. looks like the credentials are wrong.",
        401
      )
    );
  }

  res.status(200).json({ user: user.toObject({getters: true}) });
};

const addUser = async (req, res, next) => {
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

  const { name, email, password } = req.body;
  // const user = USERS.find((item) => item.email === email);
  let user = null;
  try {
    user = await User.find({ email });
    console.log(user);
  } catch (err) {
    console.log(err);
    return next(new HttpError("something's wront with the database.", 500));
  }
  if (user && user.length > 0) {
    // 422 : invalid user input
    return next(new HttpError("the email provided isn't available.", 422));
  }
  user = new User({
    name,
    email,
    password,
    imageUrl: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png",
    places: [],
  });

  try {
    user = await user.save();
  } catch (err) {
    console.log(err);
    return next(new HttpError("something's wrong with the database.", 500));
  }

  res.status(201).json({ user: user.toObject({ getters: true }) });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.userLogin = userLogin;
exports.addUser = addUser;
