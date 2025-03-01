import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { Env } from './types/env'

import { UserRouter } from './routes/user/route'
import { db2, ModelUser } from './database/db'
import { UserModel } from './database/db-sequlize'
import { passwordEncrypt } from './utils'


const app = new Hono<Env>()

app.use(logger())
app.use("/*", cors())


// app.get("/", c => c.text('Api OK'))
app.get("/", async (c) => {
    // const result = await db2.table("usuarios").get()
    // const result = await ModelUser.query().findMany([11, 21])
    // const result = await ModelUser.query().all()

    const estado = true

    // const result = await ModelUser.query()
    //     .select(["id", "nombre"])
    //     .where("nombre", "LIKE", "%cha%")
    //     .where((query) => {
    //         if (estado != undefined || estado != null) {
    //             query.where("estado", estado)
    //         }
    //     })
    //     .toSql()

    const result = await UserModel.findAll({
        attributes: {
            exclude: ['password']
        }
    })

    // const user = await UserModel.create({
    //     nombre: 'Yensy',
    //     usuario: 'yensy',
    //     password: await passwordEncrypt("password"),
    //     roles: ["Cliente"],
    //     estado: true,
    //     contacto: "3154371779",
    //     direccion: "Calle 123"
    // })


    return c.json({
        result,
        // user
    })
})
app.basePath("/api").route("/usuario", UserRouter)

export default app
