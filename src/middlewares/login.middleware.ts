import { NextFunction, Request, Response } from "express";
import { TokenService } from "../services/Token.service";
import { HttpException } from "./Http.exception";

export const verifyLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) throw new HttpException(403, 'Para ter acesso, um token válido deve ser passado.');

    const tokenService = new TokenService();

    const token = authorization.split(' ')[1];

    const verifyToken = await tokenService.verifyToken(token);
    if (!verifyToken) throw new HttpException(401, 'Usuário não autorizado');
    next();
};

