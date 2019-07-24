const router = require('koa-router')()
const Db = require('./../config/config.js')

router.get('/userName',async (ctx)=>{
    const result = await Db.find('user',{})
    await ctx.render('index',{
        list:result
    })
    // ctx.body = 'sjahsahjsa'
})
router.get('/addUser',async (ctx)=>{
    await ctx.render('addUser')
})
router.get('/addMsg',async (ctx)=>{
    let res = await Db.insert('user',{
        'username':'dahu9',
        sex:'男',
        status:'90',
        age:'32'
    })
})

//渲染编辑页面
router.get('/edit',async (ctx)=>{
    let id = ctx.query.id
    let result = await Db.find('user',{'_id':Db.getObjectID(id)})
    await ctx.render('edit',{
        list:result[0]
    })
})


router.get('/render',async (ctx)=>{
    let arr = [111,232,45454,66734,678676]
    await ctx.render('index',{
        list:arr
    })
})


router.get('/remove',async (ctx)=>{
    let result = await Db.remove('user',{'_id':Db.getObjectID(ctx.query.id)})
    try {
        if(result.result.ok){
            ctx.redirect('/getMe/userName')
        }
    } catch (error) {
        ctx.redirect('/getMe/userName')
    }
})
module.exports = router