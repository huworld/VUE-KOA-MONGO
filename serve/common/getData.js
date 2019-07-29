/* 接受请求并进行数据处理 */
const mq = require('../config/instance')
function getData(cb1,cb2){
    return async (ctx,next)=>{
        const sql = cb1(ctx)
        let datalist = await mq.query(sql)
        if( datalist.length!=0 ){
            const data = cb2(datalist)
            ctx.status = 200
            ctx.body = {code:0,msg:'success',data:data}
        }else{
            ctx.status = 200
            ctx.body = {code:0,msg:'success',data:[]}
        }
    }
}
module.exports = getData