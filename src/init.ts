import { EmpresaModel, ProductoModel, sequelize, UserModel } from "./database/db-sequlize"
import { passwordEncrypt } from "./utils"

const initDb = async () => {

    await sequelize.sync()

    const empresas = [
        {
            "razonSocial": "MARIA-IMPERIO NATURAL"
        },
        {
            "razonSocial": "LUIS-FARMACIA NATIVA"
        },
        {
            "razonSocial": "ANGIE-LHC"
        }
    ]

    const productos = [
        {
            "codigo": "7T01",
            "nombre": "7 TOROS",
            "empresaId": 1,
            "precio": 22725,
            "stock": 13
        },
        {
            "codigo": "A01",
            "nombre": "ARTRIN",
            "empresaId": 2,
            "precio": 6661,
            "stock": 45
        },
        {
            "codigo": "AM01",
            "nombre": "ALICITRIM LITRO",
            "empresaId": 3,
            "precio": 55463,
            "stock": 46
        },
        {
            "codigo": "AN01",
            "nombre": "ARBRON",
            "empresaId": 1,
            "precio": 59065,
            "stock": 43
        },
        {
            "codigo": "AV01",
            "nombre": "ARTERIO VENOSO",
            "empresaId": 2,
            "precio": 12440,
            "stock": 15
        },
        {
            "codigo": "B01",
            "nombre": "BIO 44",
            "empresaId": 2,
            "precio": 63224,
            "stock": 11
        },
        {
            "codigo": "BP01",
            "nombre": "BIL  PRO",
            "empresaId": 1,
            "precio": 75581,
            "stock": 39
        },
        {
            "codigo": "BP01",
            "nombre": "BOTANPROS",
            "empresaId": 2,
            "precio": 31245,
            "stock": 39
        },
        {
            "codigo": "CA01",
            "nombre": "CATUAMA",
            "empresaId": 3,
            "precio": 12684,
            "stock": 49
        },
        {
            "codigo": "CA01",
            "nombre": "CATUAMA",
            "empresaId": 3,
            "precio": 16444,
            "stock": 4
        },
        {
            "codigo": "CB01",
            "nombre": "COMPLEJO B",
            "empresaId": 2,
            "precio": 20335,
            "stock": 43
        },
        {
            "codigo": "CC01",
            "nombre": "COLIRIO CUBANO",
            "empresaId": 2,
            "precio": 19327,
            "stock": 42
        },
        {
            "codigo": "CCN01",
            "nombre": "COLON CLEARSEN",
            "empresaId": 2,
            "precio": 11720,
            "stock": 13
        },
        {
            "codigo": "CG01",
            "nombre": "COLAGENO",
            "empresaId": 2,
            "precio": 12277,
            "stock": 10
        },
        {
            "codigo": "CHP01",
            "nombre": "CHANCA PIEDRA",
            "empresaId": 2,
            "precio": 79980,
            "stock": 25
        },
        {
            "codigo": "CI01",
            "nombre": "COPA DE INDIO",
            "empresaId": 2,
            "precio": 48939,
            "stock": 39
        },
        {
            "codigo": "CL01",
            "nombre": "CALCUBIL LITRO",
            "empresaId": 3,
            "precio": 57730,
            "stock": 29
        },
        {
            "codigo": "CL01",
            "nombre": "CIR LAN",
            "empresaId": 1,
            "precio": 16151,
            "stock": 45
        },
        {
            "codigo": "CM01",
            "nombre": "CARDO MARIANO CAPSULAS",
            "empresaId": 3,
            "precio": 5699,
            "stock": 44
        },
        {
            "codigo": "CO01",
            "nombre": "CALCUBANO LITRO",
            "empresaId": 3,
            "precio": 40508,
            "stock": 26
        },
        {
            "codigo": "CO01",
            "nombre": "CALCUBANO LITRO",
            "empresaId": 3,
            "precio": 42936,
            "stock": 7
        },
        {
            "codigo": "CPC01",
            "nombre": "CONCENTRADO DE PLANTAS CUBANA",
            "empresaId": 3,
            "precio": 22598,
            "stock": 31
        },
        {
            "codigo": "CSZ01",
            "nombre": "COLIRIO SABILA Y ZANAHORIA",
            "empresaId": 2,
            "precio": 27084,
            "stock": 27
        },
        {
            "codigo": "CT01",
            "nombre": "CARTILAGO DE TIBURON",
            "empresaId": 2,
            "precio": 38203,
            "stock": 31
        },
        {
            "codigo": "CV01",
            "nombre": "CIRCULAV LITRO",
            "empresaId": 3,
            "precio": 63926,
            "stock": 44
        },
        {
            "codigo": "du01",
            "nombre": "DOLORAN ULTRA",
            "empresaId": 2,
            "precio": 30454,
            "stock": 43
        },
        {
            "codigo": "DZ01",
            "nombre": "DIABETIZAN",
            "empresaId": 2,
            "precio": 73068,
            "stock": 47
        },
        {
            "codigo": "E01",
            "nombre": "ELIXIR",
            "empresaId": 2,
            "precio": 59035,
            "stock": 24
        },
        {
            "codigo": "EDM01",
            "nombre": "ENFERMEDADES DE LA MUJER",
            "empresaId": 2,
            "precio": 38988,
            "stock": 7
        },
        {
            "codigo": "EMX01",
            "nombre": "ERECMAX",
            "empresaId": 2,
            "precio": 9472,
            "stock": 23
        },
        {
            "codigo": "FC01",
            "nombre": "FLOR DE CENTELLA",
            "empresaId": 2,
            "precio": 20606,
            "stock": 44
        },
        {
            "codigo": "FCN01",
            "nombre": "FLOR DE CENTELLA NUEVA",
            "empresaId": 2,
            "precio": 42941,
            "stock": 47
        },
        {
            "codigo": "FL01",
            "nombre": "FLEXDOL",
            "empresaId": 2,
            "precio": 21469,
            "stock": 1
        },
        {
            "codigo": "FM01",
            "nombre": "FERRUM LITRO",
            "empresaId": 3,
            "precio": 28014,
            "stock": 31
        },
        {
            "codigo": "FN01",
            "nombre": "ZARZAPARILLA",
            "empresaId": 2,
            "precio": 16167,
            "stock": 29
        },
        {
            "codigo": "FO01",
            "nombre": "FENEGRECO CAPSULAS",
            "empresaId": 3,
            "precio": 48011,
            "stock": 45
        },
        {
            "codigo": "FT01",
            "nombre": "FERROVIT LT",
            "empresaId": 3,
            "precio": 42096,
            "stock": 43
        },
        {
            "codigo": "GA01",
            "nombre": "GRAN TAMAKURA",
            "empresaId": 2,
            "precio": 64994,
            "stock": 13
        },
        {
            "codigo": "GL01",
            "nombre": "GASTROBELL",
            "empresaId": 3,
            "precio": 49404,
            "stock": 33
        },
        {
            "codigo": "GM01",
            "nombre": "GREEN MARVIN",
            "empresaId": 2,
            "precio": 71875,
            "stock": 37
        },
        {
            "codigo": "GMI",
            "nombre": "GOTAS MILAGROSAS",
            "empresaId": 2,
            "precio": 14915,
            "stock": 33
        },
        {
            "codigo": "GP01",
            "nombre": "GOLDEN PLUS",
            "empresaId": 2,
            "precio": 81371,
            "stock": 37
        },
        {
            "codigo": "GT01",
            "nombre": "GASTRIUL",
            "empresaId": 2,
            "precio": 61900,
            "stock": 30
        },
        {
            "codigo": "HP01",
            "nombre": "HEPATOX LITRO",
            "empresaId": 3,
            "precio": 80685,
            "stock": 35
        },
        {
            "codigo": "HX01",
            "nombre": "HEPATOX LITRO",
            "empresaId": 3,
            "precio": 64352,
            "stock": 21
        },
        {
            "codigo": "IM01",
            "nombre": "INFAMOL",
            "empresaId": 2,
            "precio": 79040,
            "stock": 5
        },
        {
            "codigo": "IP01",
            "nombre": "INFAMOL PASTAS",
            "empresaId": 2,
            "precio": 81156,
            "stock": 48
        },
        {
            "codigo": "KN01",
            "nombre": "KOLOSAN",
            "empresaId": 1,
            "precio": 81610,
            "stock": 46
        },
        {
            "codigo": "LC01",
            "nombre": "LIMPIEZA CHINA",
            "empresaId": 2,
            "precio": 45303,
            "stock": 44
        },
        {
            "codigo": "MM01",
            "nombre": "MERO MACHO",
            "empresaId": 2,
            "precio": 62051,
            "stock": 13
        },
        {
            "codigo": "MO01",
            "nombre": "MORINGA OLIFERA",
            "empresaId": 2,
            "precio": 16355,
            "stock": 17
        },
        {
            "codigo": "MR01",
            "nombre": "MEMOREX",
            "empresaId": 2,
            "precio": 68559,
            "stock": 24
        },
        {
            "codigo": "MS01",
            "nombre": "MATRI SEX",
            "empresaId": 2,
            "precio": 36434,
            "stock": 4
        },
        {
            "codigo": "NO01",
            "nombre": "NUTRI OCULAR GOTAS Y PASTAS",
            "empresaId": 2,
            "precio": 21679,
            "stock": 30
        },
        {
            "codigo": "NP01",
            "nombre": "NERVIO PLUS",
            "empresaId": 3,
            "precio": 26145,
            "stock": 33
        },
        {
            "codigo": "NP01",
            "nombre": "NEURO PLUS LITRO",
            "empresaId": 3,
            "precio": 16239,
            "stock": 33
        },
        {
            "codigo": "NS01",
            "nombre": "NERVIO SUSTO",
            "empresaId": 2,
            "precio": 34633,
            "stock": 7
        },
        {
            "codigo": "OM01",
            "nombre": "OXTEOMAX",
            "empresaId": 2,
            "precio": 57507,
            "stock": 8
        },
        {
            "codigo": "PB01",
            "nombre": "PROSTABELL",
            "empresaId": 3,
            "precio": 78815,
            "stock": 20
        },
        {
            "codigo": "PF01",
            "nombre": "POTENFULL",
            "empresaId": 2,
            "precio": 79168,
            "stock": 1
        },
        {
            "codigo": "PG01",
            "nombre": "PPG",
            "empresaId": 2,
            "precio": 39921,
            "stock": 38
        },
        {
            "codigo": "PJ01",
            "nombre": "PAPA JARABE",
            "empresaId": 2,
            "precio": 26404,
            "stock": 10
        },
        {
            "codigo": "PJL01",
            "nombre": "PAP BRAZ JARABE LIRO",
            "empresaId": 1,
            "precio": 22238,
            "stock": 3
        },
        {
            "codigo": "PJL01",
            "nombre": "PAP BRAZ JARABE LIRO",
            "empresaId": 1,
            "precio": 50942,
            "stock": 42
        },
        {
            "codigo": "PP01",
            "nombre": "PROSTA PHARMA",
            "empresaId": 2,
            "precio": 51799,
            "stock": 47
        },
        {
            "codigo": "PS01",
            "nombre": "PAPA SILVESTRE",
            "empresaId": 2,
            "precio": 63809,
            "stock": 24
        },
        {
            "codigo": "PT01",
            "nombre": "PROX TAP LITRO",
            "empresaId": 3,
            "precio": 19377,
            "stock": 2
        },
        {
            "codigo": "RC01",
            "nombre": "ROMPE CALCULOS",
            "empresaId": 2,
            "precio": 41989,
            "stock": 20
        },
        {
            "codigo": "RO01",
            "nombre": "REUMAT OFF LITRO",
            "empresaId": 3,
            "precio": 82920,
            "stock": 37
        },
        {
            "codigo": "RP01",
            "nombre": "RENAL PLUS",
            "empresaId": 2,
            "precio": 39095,
            "stock": 29
        },
        {
            "codigo": "RQ01",
            "nombre": "ROMPE QUISTES",
            "empresaId": 2,
            "precio": 66003,
            "stock": 33
        },
        {
            "codigo": "SC01",
            "nombre": "SUPER CALCIO",
            "empresaId": 3,
            "precio": 63229,
            "stock": 6
        },
        {
            "codigo": "SP01",
            "nombre": "SAW PALMETO CAPSULAS",
            "empresaId": 3,
            "precio": 53225,
            "stock": 9
        },
        {
            "codigo": "ST01",
            "nombre": "SALTO DEL TIGRE",
            "empresaId": 2,
            "precio": 65785,
            "stock": 40
        },
        {
            "codigo": "TB01",
            "nombre": "TOS BRONQUIOS",
            "empresaId": 2,
            "precio": 73614,
            "stock": 14
        },
        {
            "codigo": "TC01",
            "nombre": "TONICO CEREBRAL",
            "empresaId": 3,
            "precio": 57899,
            "stock": 32
        },
        {
            "codigo": "Tp01",
            "nombre": "TUTUMO PULMONARIA",
            "empresaId": 2,
            "precio": 51004,
            "stock": 29
        },
        {
            "codigo": "TV01",
            "nombre": "TORO VITAL",
            "empresaId": 2,
            "precio": 24970,
            "stock": 4
        },
        {
            "codigo": "UC01",
            "nombre": "UNGÜENTO CUBANO",
            "empresaId": 3,
            "precio": 77418,
            "stock": 8
        },
        {
            "codigo": "ul01",
            "nombre": "ultradoll",
            "empresaId": 2,
            "precio": 13292,
            "stock": 36
        },
        {
            "codigo": "ul01",
            "nombre": "ultradoll",
            "empresaId": 2,
            "precio": 9469,
            "stock": 27
        },
        {
            "codigo": "UO01",
            "nombre": "URODATIVO LITRO",
            "empresaId": 3,
            "precio": 67735,
            "stock": 20
        },
        {
            "codigo": "VC01",
            "nombre": "VINO CEREBRAL",
            "empresaId": 2,
            "precio": 42048,
            "stock": 36
        },
        {
            "codigo": "VCF01",
            "nombre": "VITA CEREBRINA FRANCESA",
            "empresaId": 2,
            "precio": 63120,
            "stock": 32
        },
        {
            "codigo": "VP01",
            "nombre": "VISION PLUS ",
            "empresaId": 2,
            "precio": 64282,
            "stock": 40
        },
        {
            "codigo": "VX01",
            "nombre": "VENOFLEX LITRO",
            "empresaId": 3,
            "precio": 72602,
            "stock": 38
        },
        {
            "codigo": "WN01",
            "nombre": "WILTRON",
            "empresaId": 2,
            "precio": 62288,
            "stock": 41
        }
    ]

    const roles = [
        "Super Admin",
        "Admin",
        "Despachador",
        "Cliente",
        "Descarga",
    ]

    const userCliente = await UserModel.create({
        nombre: 'Yensy Cliente',
        usuario: 'yensy',
        password: await passwordEncrypt("password"),
        roles: ["Cliente"],
        estado: true,
        contacto: "3154371779",
        direccion: "Calle 456"
    })

    const userAdmin = await UserModel.create({
        nombre: 'Kristian Admin',
        usuario: 'kristian',
        password: await passwordEncrypt("password"),
        roles: roles,
        estado: true,
        contacto: "3154371779",
        direccion: "Calle 123"
    })

    const userDespachador = await UserModel.create({
        nombre: 'Salvador Despachador',
        usuario: 'salvador',
        password: await passwordEncrypt("password"),
        roles: ["Despachador"],
        estado: true,
        contacto: "3154371779",
        direccion: "Calle 789"
    })

    await EmpresaModel.bulkCreate(empresas)

    await ProductoModel.bulkCreate(productos)



    console.log("OK")

}

initDb()