/* 获取当前所在文件夹下除index所有文件 */
const fs = require('fs')
const requireDir = function(dir,name){
    if(name){
        return require(dir+name)
    }
    return require(dir)
}
module.exports = function(dir){
    requireJs = {}
    fs.readdirSync(__dirname + '/../' + dir,(err,files)=>{
        if (err) throw err;
    }).forEach(item=>{
        if (!/\.js$/.test(item)) {
            return;
        }
        if( item.replace(/(\.\/|\.js)/g, '')!='index' ){
            let name = item.replace(/(\.\/|\.js)/g, '')
            let _load =  requireDir('../' + dir + '/',item)
            requireJs[name] = _load
        }
    })
    return requireJs
}