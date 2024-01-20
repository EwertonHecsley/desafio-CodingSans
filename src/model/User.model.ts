import pool from '../database/connection';
import { IUser } from '../interfaces/User.interface';



export class UserModel {

    async createUser(user: IUser) {
        const { username, password } = user;

        const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
        const values = [username, password];

        await pool.query(query, values);
        const [result] = await pool.query(`SELECT * FROM users WHERE username = ?`, [username]);

        return result;
    };

};