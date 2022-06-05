const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "A900@1491s",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports =pool;