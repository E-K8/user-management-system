import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: "postgrespassword", // TODO change to your postgreSQL password
  port: 5432,
});

export default pool;

// original tutorial uses const Pool = require("pg").Pool; on line 1 and module.exports = pool; on line 11 instead of export default....
