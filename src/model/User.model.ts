import knex from '../database/connection';
import { IUser } from '../interfaces/User.interface';

export class UserModel {

    async createUser(user: IUser) {
        const { username, password } = user;
        await knex('users').insert({ username, password });
        const response = this.getUserByUsername(username);
        return response
    };

    async getUserByUsername(username: string) {
        return await knex('users').where({ username }).first();
    }

};