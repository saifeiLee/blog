---
title: JS utf-8字符串&二进制 编解码性能测试
---

## 方案

方案一：
string -> base64 -> binary string -> arraybuffer

方案二：

string -> arraybuffer

方案三：

使用StringView对象

## 结果

测试对象：大小53kb的utf-8测试文件
测试方法：连续运行编解码函数100次，比较总耗时

| 方案   | 耗时       |
|--------|------------|
| 方案一 | 1669.564ms |
| 方案二 | 42.146ms   |
| 方案三 | 153.823ms  |

> 代码地址：<https://github.com/saifeiLee/js-encoding-performance>
