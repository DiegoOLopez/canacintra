const { Client } = require('pg');

async function getConnection(){
  const client = new Client( {
    host: 'localhost',
    port: 5432,
    user: 'canacintra_admin',
    password: '12345678',
    database: 'canacintra'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
