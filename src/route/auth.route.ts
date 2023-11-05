import express from 'express';
import { AuthController } from '../controller/auth.controller';

export class AuthRoute {
    router = express.Router();
    private authController = new AuthController();
    constructor() {
        this.initRoutes(this.authController);
    }

    initRoutes(instance: any) {

        this.router.get('/', this.authController.login.bind(instance));
        this.router.post('/test', this.authController.test.bind(instance));
    }
}