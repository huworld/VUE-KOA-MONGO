// //mongodb
// const router = require('koa-router')()
// const Db = require('../config/config.js')


// router.post('/age',async (ctx)=>{
//     Db.find('user',{}).then((res)=>{
//     })
//     ctx.body = 'sjahsahjsa'
// })

// //添加数据
// router.post('/doAdd',async (ctx)=>{
//     let result = await Db.insert('user',ctx.request.body)
//     try {
//         if( result.result.ok ){
//             ctx.redirect('/getMe/userName')
//         }
//     } catch (error) {
//         ctx.redirect('/getMe/add')
//     }
// })


// //编辑数据
// router.post('/doEdit',async (ctx)=>{
//     const id =  ctx.request.body._id
//     const name =  ctx.request.body.name
//     const age =  ctx.request.body.age
//     const sex =  ctx.request.body.sex
//     const status =  ctx.request.body.status
//     let result =await Db.update('user',{'_id':Db.getObjectID(id)},{
//         name,age,sex,status
//     })
//     try {
//         if( result.result.ok ){
//             ctx.redirect('/getMe/userName')
//         }
//     } catch (error) {
//         ctx.redirect('/getMe/edit')
//     }
// })
// module.exports = router.routes()