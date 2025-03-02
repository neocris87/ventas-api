import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { Env } from './types/env'

import { UserRouter } from './routes/user/route'
import { EmpresaModel, PedidoModel, ProductoModel, UserModel } from './database/db-sequlize'


const app = new Hono<Env>()

app.use(logger())
app.use("/*", cors())


// app.get("/", c => c.text('Api OK'))
app.get("/", async (c) => {

    const estado = true

    // const result = await EmpresaModel.findByPk(1, {
    //     include: [ProductoModel],
    //     attributes: ["razonSocial",]
    // })

    // await PedidoModel.create({
    //     usuarioId: 2,
    //     despachadorId: 1,
    //     estado: 'Pendiente'
    // })

    const result = await PedidoModel.findByPk(1, {
        include: [UserModel]
    })

    return c.json(result)
})
app.basePath("/api").route("/usuario", UserRouter)

export default app
