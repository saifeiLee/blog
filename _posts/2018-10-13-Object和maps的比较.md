---
title: Object and maps compared
---

1. Object的key只能是`String`和`Symbols`,Map的key可以是任何值(functon, object, any primitive)
2. Map中的key有顺序,遍历时按照插入时的顺序
3. Map有`size`属性,立刻得到Map的大小
4. Map is `iterable`
5. Map增删key更高效
6. Object中的prototype有一些默认属性,可能与Object中个人定义的key冲突。(ES5解决方法:map = Object.create(null))