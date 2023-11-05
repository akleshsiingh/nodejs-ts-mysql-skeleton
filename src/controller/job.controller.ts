import { Request, Response } from "express";
import Connection from "../db/connection.db";

export class JobController {
    private instance: Connection;
    constructor() {
        this.instance = Connection.getInstance();
    }

    job(req: Request, res: Response) {
        res.json({ msg: 'job route triggered' });
    }

    test(req: Request, res: Response) {
        res.json({ msg: 'test job route triggered' });
    }

    async getJob(req: Request, res: Response) {
        console.log('qrery ==> ', req.query);
        const {id} = req.params;
        const [rows, fields] = await this.instance.connection.execute('SELECT * FROM `tbl_area` where id =?', [id]);

        console.log(rows);
        res.status(200).json({ t: 'Hello, World! from job route', rows });
    }

}