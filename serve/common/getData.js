const mq = require('../config/instance')
function getData(cb1,cb2){
    return async (ctx,next)=>{
        const sql = cb1(ctx)
        let datalist = await mq.query(sql)
        const data = cb2(datalist)
        if( datalist.length!=0 ){
            ctx.status = 200
            ctx.body = {code:0,msg:'query database success',data:data}
        }else{
            ctx.status = 200
            ctx.body = {code:0,msg:'query database success',data:data}
        }
    }
}
module.exports = getData