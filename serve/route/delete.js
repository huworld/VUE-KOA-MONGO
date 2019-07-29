const router = require('koa-router')()
const getData = require('../common/getData')

router.get('/deleteMsg',getData(
(ctx)=>{
    const age = ctx.request.query.age
    return `DELETE FROM user where age=${age}`
},(data)=>{
    console.log(data)
    return {data:data}
}))


module.exports = router.routes()