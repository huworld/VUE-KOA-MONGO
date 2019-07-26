const mysql = require('mysql')
/* 实例化mysql数据库链接 */
const config = mysql.createPool({
    host:'10.88.88.7',
    user: 'tengyue-dev',
    password: 'Tengyue@2019!best',
    database: 'tengyue-salary-calculate'
})

class Mq{
    /* 数据库链接单例 */
    static getInstance(){
        if( !Mq.instance ){
            Mq.instance = new Mq()
        }return Mq.instance;
    }
    constructor(){
        this.mysqlClient = ''
        this.connect()
    }
    /* 链接数据库 */
    connect(){
        return new Promise((resolve,reject)=>{
            if( !this.mysqlClient ){
                config.getConnection((err, connection)=>{
                    if (err) {
                        reject( err )
                    } else {
                        this.mysqlClient = connection
                        resolve( this.mysqlClient )
                    }
                })
            }else{
                resolve( this.mysqlClient )
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    /* mysql数据查询请求promise封装 */
    query(sql,values){
        return new Promise((resolve,reject)=>{
            this.connect().then((connect)=>{
                connect.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    // connect.release()
                })
            })
        }).catch((error) => {
            console.log(error,'Promise error');
        });
    }
}
module.exports = Mq.getInstance()