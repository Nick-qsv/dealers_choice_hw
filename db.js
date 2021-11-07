const pg = require('pg');
const client = new pg.client('postgres://localhost');

client.connct();

module.exports = client;
