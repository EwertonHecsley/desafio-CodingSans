import { Request, Response } from "express";
import { UserService } from "../services/User.service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response) {
        const { username, password } = req.body;

        const response = await this.userService.createUser({ username, password });
        return res.status(201).json(response);
    };

};