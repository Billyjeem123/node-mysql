import { body } from "express-validator";

export const LoginRequest = [
  body("email")
    .exists({ checkFalsy: true }).withMessage("Email is required")
    .isEmail().withMessage("Valid email is required"),

  body("password")
    .exists({ checkFalsy: true }).withMessage("Password is required") // ensures field exists and is not empty
];
