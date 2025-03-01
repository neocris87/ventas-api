import { Env } from '@/types/env'
import { RolesEnum } from '@/types/roles'
import { createMiddleware } from 'hono/factory'

export const AuthMiddleware = (rol: RolesEnum) => createMiddleware<Env>(async (c, next) => {

    const user = c.get("user")
    if (user.roles?.includes(RolesEnum[rol])) await next()

    return c.json("No tienes permiso", 403)
})