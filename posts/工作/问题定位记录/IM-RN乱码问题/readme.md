---
title: IM-webSDK在React Native平台中文乱码问题的定位和解决
---

## 问题背景

IM-SDK V4.0版本，在React Native应用中，发出的信息正常，web端正常，只有app原生环境接收到的中文信息呈现乱码:
![IM乱码](./assets/Im-Garbled.png)

## 推测

1. sdk很多业务在用，乱码问题不是普遍存在，并且问题只在native环境的接收端存在问题，合理推测是二进制解码存在兼容问题；
2. 底层通信编码采用unit8二进制,一个字符占一个字节,但是javascript采用的是UCS-2编码，每个字符都是两个字节，会不会跟这有关？

## 分析定位

### 第一步

打印日志发现text的类型确实是`string`:
![typeof string](assets/text-type.png)
基本可确认是这一步的解码出问题了，查看text的解码逻辑。

### 第二步

代码中text的解码使用了一个名叫`arraybuffer-to-string`的npm包，这个包有两个入口，分别用于兼容node环境和浏览器环境:
![ab2str-pkg.json]('./assets/ab2str-pkg.png')

其中node环境直接采用`Buffer.from()`方法解码，浏览器环境采用`TextDecoder`对象，通过添加日志发现，React Native环境运行的是浏览器入口中的方法：
![arraybuffer-to-string]('assets/browser-string-fromCharCode.png')

由于ReactNative环境中不存在`TextDecoder`对象，因此最终字符解码采用的是`String.fromCharCode`方法，该方法的入参是UTF-16的编码，因此乱码。

## 解决方式

统一采用`Buffer`对象进行解码，针对RN兼容，引入`buffer polyfill`

--- 

> 参考资料
>
> - <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode>
> - <https://www.ruanyifeng.com/blog/2014/12/unicode.html>
