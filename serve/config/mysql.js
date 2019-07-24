const mysql = require('mysql')

const config = mysql.createPool({
    host:'10.88.88.7',
    user: 'tengyue-dev',
    password: 'Tengyue@2019!best',
    database: 'tengyue-salary-calculate'
})

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        config.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
    .catch((error) => {
        console.log(error,'Promise error');
    });
}
module.exports = query