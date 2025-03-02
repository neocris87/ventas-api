import { Sequelize, Model, DataTypes } from 'sequelize'

export const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)


export class UserModel extends Model {
    declare id: number
    declare nombre: string
    declare usuario: string
    declare password: string
    declare roles: string[]
    declare estado: boolean
    declare contacto: string
    declare direccion: string
    declare createdAt: Date
    declare updatedAt: Date
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roles: {
            type: DataTypes.TEXT,
            get() {
                const value = this.getDataValue('roles');
                return value ? value.split(',') : [];
            },
            set(val: string[]) {
                this.setDataValue('roles', val ? val.join(',') : null);
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        contacto: DataTypes.STRING,
        direccion: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize, modelName: 'usuarios',
        timestamps: true
    }
)


export class EmpresaModel extends Model {
    declare id: number
    declare razonSocial: string
    declare nit: string
    declare direccion: string
    declare contacto: string
    declare email: string
    declare estado: boolean
    declare createdAt: Date
    declare updatedAt: Date
}

EmpresaModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        razonSocial: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nit: DataTypes.STRING,
        direccion: DataTypes.STRING,
        contacto: DataTypes.STRING,
        email: DataTypes.STRING,
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize, modelName: 'empresas',
        timestamps: true
    }
)

export class ProductoModel extends Model {
    declare id: number
    declare codigo: string
    declare nombre: string
    declare descripcion: string
    declare precio: number
    declare stock: number
    declare estado: boolean
    declare createdAt: Date
    declare updatedAt: Date
}

ProductoModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: DataTypes.STRING,
        precio: DataTypes.DOUBLE,
        stock: DataTypes.INTEGER,
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize, modelName: 'productos',
        timestamps: true
    }
)

export class PedidoModel extends Model {
    declare id: number
    declare usuarioId: number
    declare despachadorId: number
    declare estado: string
    declare createdAt: Date
    declare updatedAt: Date
}

PedidoModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        despachadorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        estado: {
            type: DataTypes.ENUM(),
            values: ['Pendiente', 'En Proceso', 'En Camino', 'Entregado', 'Cancelado'],
            allowNull: false,
            defaultValue: 'Pendiente'
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize, modelName: 'pedidos',
        timestamps: true
    }
)

EmpresaModel.hasMany(ProductoModel)
ProductoModel.belongsTo(EmpresaModel)

PedidoModel.belongsTo(UserModel, { foreignKey: 'usuarioId'})
UserModel.hasOne(PedidoModel, { foreignKey: 'usuarioId' })

PedidoModel.belongsTo(UserModel, { foreignKey: 'despachadorId'})
UserModel.hasOne(PedidoModel, { foreignKey: 'despachadorId' })

const initDb = async () => {
    try {
        await sequelize.authenticate();
        sequelize.sync({
            alter: true
        })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// initDb()

export type User = typeof UserModel
