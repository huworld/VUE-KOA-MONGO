const router = require('koa-router')()
const getData = require('../common/getData')

router.get('/getMsg',getData(
(ctx)=>{
    const age = ctx.request.query.age
    return `SELECT * FROM user where age=${age}`
},(data)=>{
    return {name:data[0].name,'age':data[0].age+1}
}))

router.post('/getMsg1',getData(
(ctx)=>{
    const age = ctx.request.body.age
    return `SELECT * FROM user where age=${age}`
},(data)=>{
    return {name:data[0].name,'age':data[0].age+1}
}))

router.post('/getMsg2',getData(
(ctx)=>{
    return 'SELECT a.id,a.name,b.school,b.address from user a INNER JOIN userMsg b ON a.id=b.userId  '
},(data)=>{
    console.log(data)
    return {data:data}
}))
module.exports = router.routes()