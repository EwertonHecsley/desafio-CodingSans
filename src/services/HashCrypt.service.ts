import * as  bcrypt from 'bcrypt';

export class HashCryptService {
    public async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 8);
    };

    public async compareHash(data: string, dataHash: string): Promise<boolean> {
        return await bcrypt.compare(data, dataHash);
    };
}