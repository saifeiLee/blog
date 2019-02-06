1. MicroTask Queue/ MacroTask Queue
   - MacroTask Queue: setTimeout, setInterval, setImmediate, requestAnimationFrame, UI rendeing, NodeJS中的`I/O,脚本执行(Javascript Run)
   - MicroTask Queue:
   1. 独立回调microTask：如Promise，其成功／失败回调函数相互独立；
   2. 复合回调microTask：如 Object.observe, MutationObserver 和NodeJs中的 process.nextTick ，不同状态回调在同一函数体

2. 执行顺序:
   1. 依次执行同步代码直至执行完毕
   2. 检查MacroTask 队列，若有触发的异步任务，则取第一个并调用其事件处理函数，然后跳至第三步，若没有需处理的异步任务，则直接跳至第三步；
   3. 检查MicroTask队列，然后执行所有已触发的异步任务，依次执行事件处理函数，直至执行完毕，然后跳至第二步，若没有需处理的异步任务中，则直接返回第二步，依次执行后续步骤；
   4. 最后返回第二步，继续检查MacroTask队列，依次执行后续步骤；
   5. 重复以上步骤至结束。

> 注意: 脚本执行也是一个特殊的MacroTask

3. Node环境下上述执行顺序与浏览器环境不同，因为Node会把相同延时的回调进行合并,即一次性消费完。