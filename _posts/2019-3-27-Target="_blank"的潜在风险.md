---
title: target="_blank" - 最被低估的风险
---

当我们使用`target='_blank'做外链的时候，忽略了一个事实：
> 我们链接的外部页面可以通过`window.opener`对象获取当前页面的部分权限

## 如何修复？

加上

```html
rel="noopener noreferrer"
```

对于`window.open()`,修复方法：

```javascript
var newWnd = window.open();
newWnd.opener = null;
```