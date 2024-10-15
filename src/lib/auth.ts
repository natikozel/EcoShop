"use server";
import {isEmailExists} from "@/lib/dbUtil";
import {getDb} from "@/lib/dbClient";
import {generateRegistrationToken, hashUserPassword, verifyPassword} from "@/lib/hash";
import {validateEmail, validateName, validatePassword} from "@/lib/validation";

export const handleLogin = async (prevState: any, formData: any) => {
    const email = formData.get('email');
    const password = formData.get('password');
    const errors: string[] = [];

    if (!validateEmail(email)) {
        errors.push(`אימייל לא תקין`);
    }

    if (!validatePassword(password)) {
        errors.push(`הסיסמא חייבת להכיל לפחות 8 תווים`);
    }

    if (errors.length > 0) {
        return {ok: false, errors};
    }

    const db = await getDb();
    const user = await db.user.findFirst({where: {email}});

    if (user && user.password && verifyPassword(user.password, password)) {
        return {ok: true, errors: null, credentials: {email, password}};
    } else {
        return {ok: false, errors: ['אימייל או סיסמא שגויים']};
    }

};

export const handleSignup = async (prevState: any, formData: any) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const newsLetterChecked = formData.get('newsletter');
    const errors: string[] = [];

    if (!validateName(name)) {
        errors.push(`שם מלא חייב להכיל לפחות שם פרטי ושם משפחה, כל אחד באורך לפחות 2 תווים`);
    }

    if (await isEmailExists(email)) {
        errors.push(`אימייל כבר קיים במערכת`);
    }

    if (!validateEmail(email)) {
        errors.push(`אימייל לא תקין`);
    }

    if (!validatePassword(password)) {
        errors.push(`הסיסמא חייבת להכיל לפחות 8 תווים`);
    }

    if (password !== confirmPassword) {
        errors.push(`הסיסמאות אינן תואמות`);
    }

    if (errors.length > 0) {
        return {ok: false, errors};
    }

    const db = getDb();
    const newUser = await db.user.create({
        data: {
            name,
            email,
            password: hashUserPassword(password),
            newsLetter: newsLetterChecked === 'on',
        }
    });
    if (newUser) {
        const regToken = await generateRegistrationToken(newUser.id);
        const plainToken = JSON.parse(JSON.stringify(regToken));
        return {ok: true, errors: null, credentials: {email, password}, registrationToken: plainToken.token};
    } else
        return {ok: false, errors: ['הרשמה נכשלה'], registrationToken: null};

};

