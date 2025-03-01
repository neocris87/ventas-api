import { drizzle } from "drizzle-orm/mysql2";
import { sutando, Model, Attribute, CastsAttributes } from 'sutando'

export * from './schema'
import * as schema from './schema';

export const db = drizzle(process.env.DATABASE_URL!, { schema, mode: 'default', logger: false });

sutando.addConnection({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    logger: true
})

export const db2 = sutando.connection();

class Lista extends CastsAttributes {
    // Cast the given value.
    static get(model: any, key: any, value: any, attributes: any) {
        try {
            if (value == "" || value == null) return []
            return value.split(",");
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    static set(model: any, key: any, value: any, attributes: any) {
        return value.join(",");
    }
}

export class ModelUser extends Model {
    table = "usuarios"

    primaryKey = "id";

    declare id: number
    declare nombre: string
    declare password: string
    declare usuario: string
    declare contacto: string
    declare direccion: string
    declare estado: boolean
    declare roles: string[]

    hidden = ['password'];

    casts = {
        roles: Lista,
        estado: 'boolean',
    };

    // attributeRoles() {
    //     return Attribute.make({
    //         get: (value: string) => value.split(","),
    //         set: (value: string[]) => value.join(",")
    //     })
    // }

    async cambiarEstado(): Promise<void> {
        this.estado = !this.estado
        await this.save();
    }

    async rolecitos(): Promise<string[]> {
        return ["Hello, World!", "Perritos"]
    }
}