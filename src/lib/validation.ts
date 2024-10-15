export function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function validatePassword(password: string): boolean {
    return password.length >= 8;
}

export function validateName(fullName: string): boolean {
    const nameParts = fullName.trim().split(/\s+/);
    return nameParts.length >= 2 && nameParts.every(part => part.length >= 2);
}
