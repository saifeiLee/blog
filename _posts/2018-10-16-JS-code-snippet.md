---
title: JS 代码段笔记
---

#### 数组flatten

```javascript
var flattened = [[1, 2, 3]].reduce((a, b) => {
  return a.concat(b)
})
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