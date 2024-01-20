import * as  bcrypt from 'bcrypt';

export class HashPasswordService {
    public async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    };

    public async hashUsername(username: string): Promise<string> {
        return await bcrypt.hash(username, 8);
    };

    public async compareHash(data: string, dataHash: string): Promise<boolean> {
        return await bcrypt.compare(data, dataHash);
    };
}