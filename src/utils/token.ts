import { JwtPayload, sign , verify } from 'jsonwebtoken'

export const TokenCreate = (key : string): string => {
    const secret = process.env.SECRET || "LoMasSecreto***";
    const token = sign({
        id : key,
        sub: key
    }, secret, { expiresIn: 60 * 60 * 24 * 365 });
    return token;
};

export const TokenValidate = (token : string): string | JwtPayload  => {
    const secret = process.env.SECRET || "LoMasSecreto***";
    const data = verify(token , secret)
    return data;
};
