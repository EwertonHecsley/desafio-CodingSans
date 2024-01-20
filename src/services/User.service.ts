import { IUser } from "../interfaces/User.interface";
import { HashCryptService } from '../services/HashCrypt.service';
import { UserModel } from "../model/User.model";
import { TokenService } from "./Token.service";
import { HttpException } from "../middlewares/Http.exception";


export class UserService {
    constructor(
        private hashService = new HashCryptService,
        private userModel = new UserModel,
        private tokenService = new TokenService
    ) { };

    async createUser(user: IUser) {
        const { username, password } = user;
        const hashedPassword = await this.hashService.hashPassword(password);

        const verifyUserDuplicate = await this.userModel.getUserByUsername(username);
        if (verifyUserDuplicate) throw new HttpException(400, 'Username já existe.');

        const newUser = await this.userModel.createUser({ username, password: hashedPassword });
        return newUser;
    };

    async login(user: IUser) {
        const userDb = await this.userModel.getUserByUsername(user.username);
        if (!userDb) throw new HttpException(404, 'Usuário não encontrado.');

        const compareHash = await this.hashService.compareHash(user.password, userDb.password);
        if (!compareHash) throw new HttpException(401, 'Senha inválida.');

        const token = await this.tokenService.generateToken(userDb.username);
        return { user: userDb, token };
    }
}