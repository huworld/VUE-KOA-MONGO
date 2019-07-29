module.exports = function(){
    const t = new Date()
    const y = t.getFullYear()
    const m = parseInt(t.getMonth()+1)>=10?parseInt(t.getMonth()+1):'0'+parseInt(t.getMonth()+1)
    const d = t.getDate()>=10?t.getDate():'0'+t.getDate()
    return y+'-'+m+'-'+d
}