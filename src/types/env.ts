import { UsuarioAuth } from "@/database/schema"

export type Env = {
    Variables: {
        user: UsuarioAuth,
    }
}