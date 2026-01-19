import { Router } from 'express';
import { PostController } from '../controllers/ProductController';
import { ProductRequest } from '../request/ProductRequest';
import { authenticateJWT } from '../middlewares/Auth';
export class ProductRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }

    getRoutes() {
        this.router.post(
            '/create',
             ProductRequest,
            authenticateJWT,
            PostController.create.bind(PostController) 
        );

        this.router.get(
            '/all',
            authenticateJWT,
            PostController.getUserPosts.bind(PostController) 
        );

         
    }
}

export default new ProductRoutes().router;
