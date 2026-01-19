import { body } from "express-validator";

export const ProductRequest = [
  body("product_name")
    .exists({ checkFalsy: true })
    .withMessage("product_name is required")
    .isString()
    .withMessage("product_name must be a string"),

  body("product_image")
    .exists({ checkFalsy: true })
    .withMessage("product_image is required")
    .isString()
    .withMessage("product_image must be a string"),

  body("quantity")
    .exists({ checkFalsy: true })
    .withMessage("quantity is required")
    .isInt({ min: 0 })
    .withMessage("quantity must be a positive integer"),

  body("user_id")
    .exists({ checkFalsy: true })
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be an integer"),
];
