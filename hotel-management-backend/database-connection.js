const mssql = require('mssql');

const dbconfig = {
  server: 'localhost',
  user: 'pduser',
  password: 'PDUser',
  database:'hm',
  port:1433,
  options: {
      trustServerCertificate: true,
    }

}


exports.connect = async() => {
  const pool = await mssql.connect(dbconfig);
  return pool;
}

exports.sql =async (queryString) => {
 const pool = new mssql.ConnectionPool(dbconfig)

return (await (await pool.connect()).query(queryString)).recordsets[0]

}
