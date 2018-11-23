---
title: JS 代码段笔记
---

#### 数组flatten

```javascript
let arr = [1, [[2], 3, [[[4]]]], [[[[['abcd']]]]]];
let flattern = arr => {
  return arr.reduce((accumulator, currentItem) => {
    return accumulator.concat(Array.isArray(currentItem) ? flattern(currentItem) : currentItem);
  }, []);
}
const res = flattern(arr)
console.log(res);
```

#### trim

```javascript
String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
```

#### 正确比较 0和-0

```javascript
function eq (a, b) {
    if (a === b) return a !== 0 || 1 / a === 1/ b;
    return false;
}
```

#### 若认为NaN和NaN是相等的,如何判断？

```javascript
// 利用NaN不等于自身
function eq(a, b) {
    if (a !== a) return b !== b;
}
```

#### uuid in JS

```javascript
function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};
```

#### General Curry Function

```javascript
function curry(fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg)
  }
}
```
