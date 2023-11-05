import express from 'express';
import { JobController } from '../controller/job.controller';

export class JobRoutes {
    router = express.Router();
    private jobController = new JobController();
    constructor() {
        this.initRoutes(this.jobController);
    }

    initRoutes(instance: any) {

        this.router.get('/', this.jobController.job.bind(instance));
        this.router.get('/test', this.jobController.job.bind(instance));
        this.router.get('/:id', this.jobController.getJob.bind(instance));
    }
}