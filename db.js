const pg = require('pg');
const client = new pg.Client('postgres://localhost/myBooks');

client.connect();

module.exports = client;
