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

    public async login(req: Request, res: Response) {
        const body = req.body as IUser;

        const userService = new UserService();
        const response = await userService.login({ username: body.username, password: body.password });
        if (!response) return res.status(401).json({ mensagem: 'Não autorizado.' });

        const { password: _, create_time: __, ...responseFormated } = response.user;

        return res.status(200).json({ mensagem: 'Usuário logado com sucesso.', usuario: responseFormated, token: response.token });
    };

    public async getBreweries(req: Request, res: Response) {
        const { filtro } = req.query;

        const userService = new UserService();
        if (typeof filtro === 'string') {
            const response = await userService.getBreweries(filtro);
            return res.status(200).json(response);
        };
    };

};