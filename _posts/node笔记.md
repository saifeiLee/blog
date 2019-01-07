Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

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

- JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work. Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring.

### node 事件循环

##### 事件循环的阶段(phase)

- timers(定时器），执行setTimeout()和setInterval()的回调
- pending callbacks,executes I/O callbacks deferred to the next loop iteration.
- idle,prepare: 只在内部使用
- poll(轮询),执行I/O相关的回调.
  - 当事件循环进入`poll`阶段后,如果没有正在运行的计时器(there are no timers scheduled),将发生下列两种情况之一:
    - 轮询队列不为空，同步执行队列中的回调
    - 轮询队列为空,有2种情况:
      - If scripts have been scheduled by setImmediate(), the event loop will end the poll phase and continue to the check phase to execute those scheduled scripts.
      - If scripts have not been scheduled by setImmediate(), the event loop will wait for callbacks to be added to the queue, then execute them immediately.
- check:setImmediate() callbacks are invoked here.
- close callbacks: some close callbacks, e.g. socket.on('close', ...)

- Generally, as the code is executed, the event loop will eventually hit the poll phase where it will wait for an incoming connection, request, etc. However, if a callback has been scheduled with setImmediate() and the poll phase becomes idle, it will end and continue to the check phase rather than waiting for poll events.

##### setImmediate() vs setTimeout()

- setImmediate() is designed to execute a script once the current poll phase completes.
- setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.

- 这两者的执行顺序受调用上下文影响。若从主模块调用(比如一个非I/O循环的上下文),执行顺序受进程性能影响，无法预测。但如果在一个I/O循环内调用的话,immediate的回调总是先执行。

- The main advantage to using setImmediate() over setTimeout() is setImmediate() will always be executed before any timers if scheduled within an I/O cycle, independently of how many timers are present.

##### process.nextTick()

- process.nextTick()并不是事件循环的一部分,但是无论处于事件循环的哪一个阶段,`nextTickQueue`都会在当前操作完成后被处理。
- 在任何阶段调用process.nextTick(),所有传入其中的回调都会在事件循环进入下一个阶段之前被处理。

> 为什么允许这样？
- 设计哲学,API始终应该是异步的,即使他不必是。
  
- everything runs in parallel except your code.