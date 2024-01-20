import { IUser } from "../interfaces/User.interface";
import { HashCryptService } from '../services/HashCrypt.service';
import { UserModel } from "../model/User.model";


export class UserService {
    private userModel: UserModel;
    private hashService: HashCryptService;

    constructor() {
        this.userModel = new UserModel();
        this.hashService = new HashCryptService();
    };

    async createUser(user: IUser) {
        const { username, password } = user;
        const hashedPassword = await this.hashService.hashPassword(password);
        const hashedUsername = await this.hashService.hashUsername(username);

        const newUser = await this.userModel.createUser({ username: hashedUsername, password: hashedPassword });
        return newUser;
    };
}