Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

The EventEmitter calls all listeners synchronously in the order in which they were registered.

Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

 Node.js 中存在 4 类模块（原生模块和3种文件模块)

- `require`加载模块三步走
  1. 检查文件缓存区
  2. 从原生模块加载
  3. 从文件加载

全局变量的条件:

1. 在最外层定义的变量
2. 全局对象的属性
3. 隐式定义的变量(未定义直接赋值的变量)

- util.inherits(): 实现对象间`原型继承`的函数.父类的方法和属性不继承
- domain 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的异常.
- 注册事件和回调到domain，当发生一个错误事件或抛出一个错误时，domain对象会被通知，不会丢失上下文环境，也不导致程序错误立即退出，与process.on('uncaughtException')不同。