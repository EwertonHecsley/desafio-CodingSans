import 'dotenv/config';
import { createPool, Pool, PoolOptions } from 'mysql2/promise';

const dbConfig: PoolOptions = ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT as unknown as number,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const pool: Pool = createPool(dbConfig);

export default pool;