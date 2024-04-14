const mssql = require("mssql/msnodesqlv8");
const pools = new Map();

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

module.exports = {
    get: (name, config = sqlConfig) => {
        if (!pools.has(name)) {
            if (!config) {
                throw new Error("Pool does not exist");
            }
            const pool = new mssql.ConnectionPool(config);
            const close = pool.close.bind(pool);
            pool.close = (...args) => {
                pools.delete(name);
                return close(...args);
            };
            pools.set(name, pool.connect());
        }
        return pools.get(name);
    },

    closeAll: () =>
        Promise.all(
            Array.from(pools.values()).map((connect) => {
                return connect.then((pool) => pool.close());
            }),
        ),
};
