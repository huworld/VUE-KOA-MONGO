const router = require('koa-router')()
const getData = require('../common/getData')

router.post('/getMsg2',getData(
(ctx)=>{
    ctx.throw(405)
    const name = ctx.request.body.name
    return `SELECT * FROM user where name='${name}'`
},(data)=>{
    return {name:data[0].name,'age':data[0].age+1}
}))

module.exports = router.routes()