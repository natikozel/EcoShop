import crypto from 'node:crypto';
import {getDb} from "@/lib/dbClient";

export function hashUserPassword(password: string) {
    const salt = crypto.randomBytes(16).toString('hex');

    const hashedPassword = crypto.scryptSync(password, salt, 64);
    return hashedPassword.toString('hex') + ':' + salt;
}

export function verifyPassword(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(':');
    const hashedPasswordBuf = Buffer.from(hashedPassword, 'hex');
    const suppliedPasswordBuf = crypto.scryptSync(suppliedPassword, salt, 64);
    return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}

export async function generateRegistrationToken(userId: string) {
    const token = crypto.randomBytes(32).toString('hex');
    const db = getDb();
    return db.registrationtoken.create({
        data: {
            token,
            expiryDate: new Date(Date.now() + 15 * 60 * 1000),
            used: false,
            userId
        }
    });

}


export async function verifyRegistrationToken(token: string) {

    const db = getDb();
    const regToken = await db.registrationtoken.findFirst({where: {token}});

    if (!regToken || regToken.used)
        return false;
    regToken.used = true;
    await db.registrationtoken.update({
        where: {
            token
        },
        data: {
            used: true
        }
    });

    return regToken.used;
}