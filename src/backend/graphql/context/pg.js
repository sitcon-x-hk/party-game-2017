const pgp = require('pg-promise')();

module.exports = () => pgp(process.env.DB_URL);
