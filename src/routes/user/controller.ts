
import { UserModel } from '@/database/db-sequlize';
import { UsuarioInsert, UsuarioLogin, UsuarioUpdate } from '@/database/schema';
import { passwordEncrypt, passwordValidate, TokenCreate } from '@/utils';
import type { Context } from 'hono';
import { UniqueConstraintError } from 'sequelize';

export const Login = async (c: Context) => {

    let userLogin = await c.req.json<UsuarioLogin>()

    try {
        const user = await UserModel.findOne({
            where: {
                usuario: userLogin.usuario
            }
        })

        if (user == null) return c.json("Error de Usuario o Contraseña", 404)

        if (!await passwordValidate(user.password, userLogin.password)) return c.json("Error de Usuario o Contraseña", 404)

        const token = TokenCreate(user.id.toString())
        return c.json({
            id: user.id,
            nombre: user.nombre,
            roles: user.roles,
            token
        })
    } catch (error) {
        return c.json("Error del Servidor", 500)
    }
}

export const GetAll = async (c: Context) => {

    const data = await UserModel.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    return c.json(data)
}

export const GetByID = async (c: Context) => {
    let id = c.req.param("id")
    let data = await UserModel.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    })

    if (data == undefined) {
        return c.json("Usuario no Existe", 404)
    } else {
        return c.json(data)
    }
}

export const Create = async (c: Context) => {
    let user = await c.req.json<UsuarioInsert>()
    try {
        user.password = await passwordEncrypt(user.password)
        await UserModel.create(user)
        return c.json("Usuario agregado con Exito")
    } catch (err) {
        if (err instanceof UniqueConstraintError) return c.json("Usuario ya existe", 500)
        return c.json("Error del Servidor", 500)
    }

}

export const Update = async (c: Context) => {
    const data = await c.req.json<UsuarioUpdate>()
    let id = c.req.param("id")

    try {
        let usuarioDB = await UserModel.findByPk(id)

        if (usuarioDB == null) return c.json("Usuario no Existe", 404)
        if (!await passwordValidate(usuarioDB.password, data.password)) {
            data.password = await passwordEncrypt(data.password)
            await UserModel.update(data, {
                where: {
                    id: Number(id)
                }
            })
        } else {
            await UserModel.update({
                contacto: data.contacto,
                direccion: data.direccion,
                estado: data.estado,
                nombre: data.nombre,
                usuario: data.usuario,
                roles: data.roles,
            }, {
                where: {
                    id: Number(id)
                }
            })
        }

        return c.json("Actualizado con Exito")
    } catch (err) {
        console.log(err)
        return c.json("Error del Servidor", 500)
    }
}
