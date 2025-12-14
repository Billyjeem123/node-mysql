import { body } from "express-validator";

export const PostRequest = [
  body("content")
    .exists({ checkFalsy: true }).withMessage("content is required")
    .isString().withMessage("content must be a string"),

  body("title")
    .exists({ checkFalsy: true }).withMessage("title is required")
    .isString().withMessage("title must be a string"),
];
