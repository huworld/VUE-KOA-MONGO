const router = require('koa-router')()
const getData = require('../common/getData')

router.get('/getMsg',getData(
(ctx)=>{
    const age = ctx.request.query.age
    return `SELECT * FROM user where age=${age}`
},(data)=>{
    return {name:data[0].name,'age':data[0].age+1}
}))

module.exports = router.routes()