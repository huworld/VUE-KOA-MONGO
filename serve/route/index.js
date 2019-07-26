const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
});
/* 加载route下文件 */
const getFile = require('../common/getFile')
const getFiles = getFile('route')
/* 循环route下所有js文件并加入路由 */
Object.keys(getFiles).forEach(item=>{
    if( Object.keys(getFiles[item]).length!=0 ){
        router.use(`/${item}`,getFiles[item] );
    }
})
module.exports = router