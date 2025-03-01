import { Env } from '@/types/env'
import { GetAll, Login, GetByID, Create, Update } from './controller'
import { Hono } from 'hono'
import { UserMiddleware } from '@/middleware/UserMiddleware'
import { AuthMiddleware } from '@/middleware/AuthMiddleware'
import { RolesEnum } from '@/types/roles'

export const UserRouter = new Hono<Env>()
    .post("/login", Login)
    .use(UserMiddleware)
    .get(
        "/",
        GetAll
    )
    .get(
        "/:id",
        GetByID
    )
    .post(
        "/create",
        AuthMiddleware(RolesEnum['Super Admin']),
        Create
    )
    .post(
        "/update/:id",
        AuthMiddleware(RolesEnum['Super Admin']),
        Update
    )




