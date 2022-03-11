const express = require("express");
const { check } = require("express-validator");

const userController = require("../controllers/UsersController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.post(
  "/signin",
  [    
    check("email").not().isEmpty(),
  ],
  userController.userLogin
);
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").isEmail().normalizeEmail(), // normalize => Test@Test.com => test@test.com
    check("password").isLength({ min: 6 }),
  ],
  userController.addUser
);

module.exports = router;
