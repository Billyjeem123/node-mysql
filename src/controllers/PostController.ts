// src/controllers/UserController.ts
import { Request, Response, NextFunction } from 'express';
import { handleValidationErrors, outputData } from '../utility/validate';
import { PostService } from '../services/PostService';

export class PostController {
  
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (handleValidationErrors(req, res)) return;

       const user_id = req.user.user_id;

      const response = await PostService.create({...req.body,user_id});

      // Laravel-style: just wrap service result in outputData
      return outputData(res, response.success, response.message, response.data, response.status_code);
    } catch (error) {
      console.error('Error during post creation:', error);
      return outputData(res,false, 'Unable to process request, please try again later', null, 500);
    }
  }


  // Fetch all posts belonging to the authenticated user
  static async getUserPosts(req: Request, res: Response) {
    try {
      const userId = req.user.user_id;

      const response = await PostService.getPostsByUser(userId);

      return outputData( res,  response.success,  response.message,  response.data,  response.status_code
      );
    } catch (error) {
      console.error("Error fetching user posts:", error);
      return outputData(res,  false,  "Unable to fetch posts, please try again later",  null,  500);
    }
  }

 
}
