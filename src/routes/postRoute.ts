import { Router } from 'express';
import { PostController } from '../controllers/PostController';
import { PostRequest } from '../request/PostRequest';
import { authenticateJWT } from '../middlewares/Auth';
export class PostRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }

    getRoutes() {
        this.router.post(
            '/create',
             PostRequest,
            authenticateJWT,
            PostController.create.bind(PostController) 
        );

        this.router.post(
            '/all',
            authenticateJWT,
            PostController.getUserPosts.bind(PostController) 
        );

         
    }
}

export default new PostRoutes().router;
