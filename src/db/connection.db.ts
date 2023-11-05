// import * as mysql from 'mysql2';
import * as mysql from 'mysql2/promise';

export default class Connection {
    private static instance: Connection| null = null;
    connection: any = null;

    private constructor() {
    }

     test(){
        return 'test returned';
    }
    async createConnection() {
        const port = process.env.MY_SQL_PORT || 3306;
        try {
            const connection = await mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                port: +port,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                charset: 'utf8_general_ci',
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            });
            
            this.connection = connection;
            console.log('DB connected successfully');
        } catch (error) {
            console.error(error);
            console.log('DB connection failed');
        }
        return true;
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Connection();
        }
        return this.instance;
    }

}