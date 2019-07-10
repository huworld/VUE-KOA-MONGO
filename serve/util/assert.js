const assert = require('assert');
console.log('c')

/* 断言 */

// // 生成 AssertionError 以便稍后比较错误的消息：
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
});

// 验证错误的输出：
try {
    // assert(0, 2);
    // console.log('d')
    assert.strictEqual(1,'1');
} catch (err) {
    console.log(err)
//   assert(err instanceof assert.AssertionError);
//   assert.strictEqual(err.message, message);
//   assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
//   assert.strictEqual(err.actual, 1);
//   assert.strictEqual(err.expected, 2);
//   assert.strictEqual(err.code, 'ERR_ASSERTION');
//   assert.strictEqual(err.operator, 'strictEqual');
//   assert.strictEqual(err.generatedMessage, true);
}