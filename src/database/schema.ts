import { mysqlTable, primaryKey, int, varchar, timestamp, boolean, customType } from "drizzle-orm/mysql-core"
import { relations } from "drizzle-orm/relations";

const timestamps = {
	updated_at: timestamp(),
	created_at: timestamp().defaultNow().notNull(),
}


const customLista = (name: string, values: string[]) => {
	return customType<{ data: string[]; driverData: string }>({
		dataType: () => "text",
		toDriver: (inputValues) => inputValues.join(','),
		fromDriver: (driverValues: string) => driverValues.split(','),
	})(name)
}

export const UsuarioTable = mysqlTable("usuarios", {
	id: int().autoincrement().notNull(),
	nombre: varchar({ length: 50 }).notNull(),
	password: varchar({ length: 255 }).notNull(),
	usuario: varchar({ length: 50 }).notNull(),
	contacto: varchar({ length: 155 }),
	direccion: varchar({ length: 255 }),
	estado: boolean().default(true),
	roles: customLista("roles", []),
	...timestamps,
},
	(table) => [
		primaryKey({ columns: [table.id], name: "users_id" }),
	]
);


export type UsuarioInsert = typeof UsuarioTable.$inferInsert
export type UsuarioSelect = typeof UsuarioTable.$inferSelect
export type UsuarioUpdate = Omit<UsuarioInsert, "id">
export type UsuarioLogin = Pick<UsuarioInsert, "password" | "usuario">
export type UsuarioAuth = Pick<UsuarioInsert, "id" | "roles">



