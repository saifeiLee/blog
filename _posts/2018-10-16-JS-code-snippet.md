---
title: JS 代码段笔记
---

#### 数组flatten

```javascript
// 法1
let arr = [1, [[2], 3, [[[4]]]], [[[[['abcd']]]]]];
let flattern = arr => {
  return arr.reduce((accumulator, currentItem) => {
    return accumulator.concat(Array.isArray(currentItem) ? flattern(currentItem) : currentItem);
  }, []);
}
const res = flattern(arr)
console.log(res);

// 法2
function flatten (arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
}

// 法3
// 递归
function flatten(arr){
    var res = [];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}
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

#### isArray

```javascript
Array.isArray = function(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}
```

#### 正则表达式将阿拉伯数字每隔三位用逗号分离

```javascript
"1234567800".split("").reverse().join("").replace(/(\d{3}(?=[^$]))/g, "$1,").split("").reverse().join("");
// (?=exp)也叫零宽度正预测先行断言，它断言自身出现的位置的后面能匹配表达式exp。它预言自己出现的位置后面一定是exp,否则匹配失败。
// /(\d{3})(?=[^$])/ 会匹配连续的三个数字，并且这三个数字不能在字符串的末尾。
```

#### 字符串首字母大写

法1:

```javascript
var str = "hello world hhhh";
var str2 = str.replace(/\b\w{1}/g, (word) => {
  return word.toUpperCase();
});
console.log(str2);
```

法2:

```css
 text-transform: capitalize;
```

#### 去除数组重复元素

```javascript
let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'd', 'e', 'c', 'd', 'd', 'd', 'd'];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
```