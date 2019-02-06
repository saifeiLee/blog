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
`\uFEFF`是字节次序标记符(byte order mask,BOM)
`\xA0`是No-Break space,即&nbsp

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

#### JS deep copy

```javascript
function deepCopy(target){ 
    let copyed_objs = [];//此数组解决了循环引用和相同引用的问题，它存放已经递归到的目标对象
    function _deepCopy(target){ 
        if((typeof target !== 'object')||!target){return target;}
        for(let i= 0 ;i<copyed_objs.length;i++){
            if(copyed_objs[i].target === target){
                return copyed_objs[i].copyTarget;
            }
        }
        let obj = {};
        if(Array.isArray(target)){
            obj = [];//处理target是数组的情况 
        }
        copyed_objs.push({target:target,copyTarget:obj}) 
        Object.keys(target).forEach(key=>{ 
            if(obj[key]){ return;} 
            obj[key] = _deepCopy(target[key]);
        }); 
        return obj;
    } 
    return _deepCopy(target);
}
```

#### 异步JSON.parse()

```javascript
// 使用fetch API中Response对象的方法
function asyncParse(string){  
        return (new Response(string)).json();  
    }
```

#### 创建密集数组

```javascript
var a = Array.apply(null, Array(3));

// 初始化数组并且数组值为对应下标
Array.apply(null, Array(3)).map(Function.prototype.call.bind(Number));
```

#### 数组乱序

```javascript
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sign = 1; 
a.sort(function(a, b) {
    //因为Math.random产生的数在0-1之间
    //所以0.5两边的概率是相等的
    //大于0.5时为升序，小于0.5时为降序
    sign = (Math.random() > 0.5) ? 1 : -1;
    return (a - b) * sign;
 
});
```