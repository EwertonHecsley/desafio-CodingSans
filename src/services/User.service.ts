import { IUser } from "../interfaces/User.interface";
import { HashCryptService } from '../services/HashCrypt.service';
import { UserModel } from "../model/User.model";
import { TokenService } from "./Token.service";


export class UserService {
    constructor(
        private hashService = new HashCryptService,
        private userModel = new UserModel,
        private tokenService = new TokenService
    ) { };

    async createUser(user: IUser) {
        const { username, password } = user;
        const hashedPassword = await this.hashService.hashPassword(password);

        const newUser = await this.userModel.createUser({ username, password: hashedPassword });
        return newUser;
    };

    async login(user: IUser) {
        const userDb = await this.userModel.getUserByUsername(user.username);
        if (!userDb) return false;

        const compareHash = await this.hashService.compareHash(user.password, userDb.password);
        if (!compareHash) return false;

        const token = await this.tokenService.generateToken(userDb.username);
        return { user: userDb, token };
    }
}