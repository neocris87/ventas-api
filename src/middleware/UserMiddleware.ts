import { UserModel } from '@/database/db-sequlize'
import { Env } from '@/types/env'
import { TokenValidate } from '@/utils'
import { createMiddleware } from 'hono/factory'
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'

export const UserMiddleware = createMiddleware<Env>(async (c, next) => {

    const token = c.req.header("Authentication")

    if (token == undefined) return c.json("Debe enviar un token", 401)
    try {
        const decodeToken = TokenValidate(token) as { id: string }
        const user = await UserModel.findByPk(decodeToken.id)
        c.set("user", {
            id: user?.id,
            roles: user?.roles
        })
        return next()
    } catch (error) {
        if (error instanceof TokenExpiredError) return c.json("Token Vencido", 401)
        if (error instanceof JsonWebTokenError) return c.json("Token Invalido", 401)
        return c.json("Token Error", 401)
    }

})