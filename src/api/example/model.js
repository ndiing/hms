const Mssql = require("../../lib/mssql");
const {
    MAX,
    VarChar,
    NVarChar,
    Text,
    Int,
    BigInt,
    TinyInt,
    SmallInt,
    Bit,
    Float,
    Numeric,
    Decimal,
    Real,
    Date,
    DateTime,
    DateTime2,
    DateTimeOffset,
    SmallDateTime,
    Time,
    UniqueIdentifier,
    SmallMoney,
    Money,
    Binary,
    VarBinary,
    Image,
    Xml,
    Char,
    NChar,
    NText,
    Geography,
    Geometry,
    Variant,
} = require("mssql/msnodesqlv8");

const sqlConfig = {
    user: "",
    password: "",
    database: "",
    server: "localhost",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
        trustedConnection: true,
    },
};

class Model {
    static async get(data = {}, pool) {
        try {
            const {} = data;
            pool = pool || (await Mssql.get("default", sqlConfig));
            const request = pool.request();
            const result = await request.query(`SELECT 1`);
            return result.recordset;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;
