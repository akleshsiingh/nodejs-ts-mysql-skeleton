import { Request, Response } from "express";
import Connection from "../db/connection.db";

export class AuthController {
    private conn: any;
    constructor() {
        this.conn = Connection.getInstance().connection;
    }

    login(req: Request, res: Response) {
        res.json({ msg: 'login route triggered' });
    }

    test(req: Request, res: Response) {
        res.json({ msg: 'test route triggered' });
    }

}