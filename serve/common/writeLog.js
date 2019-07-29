const fs = require('fs')
const date  = require('./date.js')
const writeLog = function(data) {
    fs.access(__dirname+`/../errLog/${date()}.txt`,(err)=>{
        if( err&&err.code != 'ENOENT' ){
            fs.writeFile(__dirname+`/../errLog/${date()}.txt`)
            fs.appendFile(__dirname+`/../errLog/${date()}.txt`, data, 'utf8')
        }else{
            fs.appendFile(__dirname+`/../errLog/${date()}.txt`, data, 'utf8') 
        }
    })
}
module.exports = writeLog