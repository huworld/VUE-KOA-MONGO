
/* 单线程单进程-》子进程 */
// 单线程指的是js的引擎只有一个实例（js引擎只在唯一主进程执行）
// 1.消息队列-先进先出
// 2.事件循环
//macrotask-》microtask（宏任务-微任务-render渲染-宏任务）-loop
console.log('main1');

process.nextTick(function() {
    console.log('process.nextTick1');
});

setTimeout(function() {
    console.log('setTimeout');
    process.nextTick(function() {
        console.log('process.nextTick2');
    });
}, 0);

new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
});

console.log('main2');