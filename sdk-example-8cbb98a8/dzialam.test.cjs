const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
test('dzialam',()=>{
assert.equal(fs.readFileSync(__dirname+'/dzialam.txt','utf8'),'dzia\u0142am\n');
});
