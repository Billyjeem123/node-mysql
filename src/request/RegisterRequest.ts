import { body } from "express-validator";

export const RegisterRequest = [
    body("first_name")
        .notEmpty().withMessage("first name is required"),
         body("last_name")
        .notEmpty().withMessage("last name is required"),
    body("email")
        .isEmail().withMessage("Valid email is required"),
    body("password")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
];
