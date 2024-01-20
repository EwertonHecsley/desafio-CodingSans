import 'dotenv/config';
import jwt, { Secret } from 'jsonwebtoken';

export class TokenService {
    public async generateToken(username: string): Promise<string> {
        const payload = { username };
        const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY as Secret, { expiresIn: '1h' });
        return token;
    };

    public async verifyToken(token: string) {
        return await jwt.verify(token, process.env.JWT_SECRET_KEY as Secret);
    };
};