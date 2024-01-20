import 'dotenv/config';
import { knex } from 'knex';

const instaceKnex = knex({
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT as unknown as number,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
});

export default instaceKnex;



