import { genSalt, hash, compare } from "bcryptjs";

export const  passwordValidate = async (passdb: string, pass: string): Promise<boolean> => {
    return await compare(pass , passdb);
}

export const  passwordEncrypt = async (password: string): Promise<string> => {
    const salt = await genSalt(10);
    return await hash(password, salt);
}