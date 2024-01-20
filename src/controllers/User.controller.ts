import { Request, Response } from "express";
import { UserService } from "../services/User.service";
import { IUser } from "../interfaces/User.interface";

export class UserController {
    public async createUser(req: Request, res: Response) {
        const body = req.body as IUser;

        const userService = new UserService();
        const response = await userService.createUser({ username: body.username, password: body.password });
        return res.status(201).json(response);
    };

};