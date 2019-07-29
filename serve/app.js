const koa = require('koa')
const app = new koa()
const path= require('path');
const router = require('./route/index.js')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const render = require('koa-art-template')
const static = require('koa-static')
// const request = require('request-promise')
const writeLog = require('./common/writeLog')
require('./nodeApi/index.js')
require('./sort')

/* 异常捕获处理 */
app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        code:err.statusCode || err.status || 500,
        message: err.message
      };
      ctx.app.emit('error', err, ctx);
    }
})

app.on('error', (err, ctx) =>{
  writeLog('server error' + err + '\n' + JSON.stringify(ctx) + '\r\n')
})
/* 渲染页面 */
// render(app,{
//     root:path.join(__dirname,'../dist'),
//     extname:'.html',
//     debug:process.env.NODE_ENV!=="production"
// })

/* 渲染views */
render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html'
})

/* ejs渲染页面 */
app.use(views(__dirname + './../dist', {
    map : {html:'ejs'}
  }));

app.use(async(ctx,next)=>{
    ctx.state.username = '张三'
    await next()
})
/* post接口数据处理 */
app.use(bodyParser());

/* 处理参数统一格式 */
app.use(async (ctx, next) => {
    if (ctx.request.method === 'GET') {
        ctx.params = ctx.request.query;
    } else if (ctx.request.method === 'POST') {
        ctx.params = ctx.request.body;
    }
    await next();
});

/* 配置静态web服务的中间件 */
app.use(static(
    path.join( __dirname,'./../dist')
))

/* 渲染页面 */
router.get('/',async (ctx)=>{
    await ctx.render('index')
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('server is starting at port 3000')
})