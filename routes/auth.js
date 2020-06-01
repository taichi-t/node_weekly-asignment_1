const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator");
const authController = require("../controllers/auth");
const User = require("../models/user");

// @route   GET /login
// @desc    Login page
// @access  Public
router.get("/login", authController.getLogin);

// @route   POST /login
// @desc    Authenticate a user
// @access  Public
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Please enter a valid Email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password must be at least 5 charactors")
      .isAlphanumeric(),
  ],
  authController.postLogin
);

// @route   POST /logout
// @desc    Un-authenticate a user
// @access  Public
router.post("/logout", authController.postLogout);

// @route   GET /signup
// @desc    User registration page
// @access  Public
router.get("/signup", authController.getSignup);

// @route   POST /signup
// @desc    Create a new user
// @access  Public
router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid Email")
      .custom((value) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject(
              "Email already exists, please enter a different email address"
            );
          }
        });
      }),
    body("password").isLength({ min: 5 }).isAlphanumeric(),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password have to match");
      }
      return true;
    }),
  ],
  authController.postSignup
);

module.exports = router;
