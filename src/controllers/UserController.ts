// src/controllers/UserController.ts
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import { handleValidationErrors, outputData } from '../utility/validate';

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      if (handleValidationErrors(req, res)) return;

      const response = await UserService.processUserRegistration(req.body);

      // Laravel-style: just wrap service result in outputData
      return outputData(res, response.success, response.message, response.data, response.status_code);
    } catch (error) {
      console.error('Error during user registration:', error);
      return outputData(res,false, 'Unable to process request, please try again later', null, 500);
    }
  }


   static async login(req: Request, res: Response, next: NextFunction) {
    try {
      if (handleValidationErrors(req, res)) return;

      const response = await UserService.processUserLogin(req.body);

      // Laravel-style: just wrap service result in outputData
      return outputData(res, response.success, response.message, response.data, response.status_code);
    } catch (error) {
      console.error('Error during user login:', error);
      return outputData(res,false, 'Unable to process request, please try again later', null, 500);
    }
  }
}
