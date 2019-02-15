---
title: toString()和valueOf()的区别
---

> toString()将数据对象用字符串表示,特殊的地方在于:表示对象的时候,输出"[object Object]]",表示数组的时候输出数组内容以逗号连接的字符串,相当于Array.split(',')

```javascript
//先看看toString()方法的结果
var a = 3;
var b = '3';
var c = true;
var d = {test:'123',example:123}
var e = function(){console.log('example');}
var f = ['test','example'];

a.toString();// "3"
b.toString();// "3"
c.toString();// "true"
d.toString();// "[object Object]"
e.toString();// "function (){console.log('example');}"
f.toString();// "test,example

//再看看valueOf()方法的结果
a.valueOf();// 3
b.valueOf();// "3"
c.valueOf();// true
d.valueOf();// {test:'123',example:123}
e.valueOf();// function(){console.log('example');}
f.valueOf();// ['test','example']
```

一般用操作符单独对对象进行转换的时候，如果对象存在valueOf或toString改写的话，就先调用改写的方法，valueOf优先级更高，如果没有被改写，则直接调用对象原型的valueOf方法。如果是弹窗的话，直接调用toString方法。