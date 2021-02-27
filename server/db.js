const Pool= require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password: "1935",
    database: "tododb",
    host: "localhost",
    port: 5432
});

module.exports= pool;