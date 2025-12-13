import { Router } from 'express';
import { RegisterRequest } from '../request/RegisterRequest';
import { UserController } from '../controllers/UserController';
import { LoginRequest } from '../request/LoginRequest';

export class UserRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }

    getRoutes() {
        this.router.post(
            '/register',
            RegisterRequest,      // validation rules
            UserController.register.bind(UserController) // controller only sees valid input
        );

         this.router.post(
            '/login',
            LoginRequest,      // validation rules
            UserController.login.bind(UserController) // controller only sees valid input
        );
    }
}

export default new UserRoutes().router;
