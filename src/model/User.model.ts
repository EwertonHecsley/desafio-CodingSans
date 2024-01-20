import pool from '../database/connection';
import { IUser } from '../interfaces/User.interface';



export class UserModel {

    async createUser(user: IUser) {
        const { username, password } = user;

        const query = `INSERT INTO users (username, password) VALUES ($1, $2)`;
        const values = [username, password];

        const [result] = await pool.query(query, values);

        return result;
    };

}