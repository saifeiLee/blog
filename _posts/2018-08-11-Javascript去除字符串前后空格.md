---
title: JS去除字符串前后空格
---

**思路：**
先用`正则表达式`匹配去除字符串头部的空格，再用非正则法去除尾端的空格。

```javascript
function trim(str) {
    var str2 = str.replace(/\s+/, '');
    var end = str.length - 1;
    var whitespace = /\s/;
    while(whitespace.test(str2.charAt(end))) {
        end--;
    }
    str2 = str2.slice(0, end + 1);
    return str2;
}
```