const mssql = require('mssql');

exports.pool = new mssql.ConnectionPool({
    server: 'localhost',
    user: 'pduser',
    password: 'pduser',
    database:'hm',
    port:1433,
    options: {
        trustServerCertificate: true,
      }

})

// const connection = () =>{
//     pool.connect().then(() =>{
//         console.log('connected')
//     })
// }

// exports.con = pool




// module.exports = {connection, pool}
// module.exports = connection
