const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
});
const find = require('./find.js')
router.use('/find',find );
module.exports = router