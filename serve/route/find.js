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
    console.log(data)
    return {name:data[0].name,'age':data[0].age+1}
}))

router.post('/getMsg2',getData(
(ctx)=>{
    const name = ctx.request.body.name
    return `SELECT * FROM user where name='${name}'`
},(data)=>{
    console.log(data)
    return {name:data[0].name,'age':data[0].age+1}
}))

module.exports = router.routes()