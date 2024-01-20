import { NextFunction, Request, Response } from "express";
import { TokenService } from "../services/Token.service";

export const verifyLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ mensagem: 'Para ter acesso, um token válido deve ser passado.' });

    const tokenService = new TokenService();

    const token = authorization.split(' ')[1];

    const verifyToken = await tokenService.verifyToken(token);
    if (!verifyToken) return res.status(401).json({ mensagem: 'Não autorizado.' });
    next();
};

