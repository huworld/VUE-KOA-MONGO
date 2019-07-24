const mysql = require('mysql')

const config = mysql.createPool({
    host:'10.88.88.219',
    user: 'root',
    password: 'tengyue360',
    database: 'shuangshi'
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