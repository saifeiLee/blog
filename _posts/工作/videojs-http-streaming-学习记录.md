##  已解决

1. AES-128的密钥长度必须是16位
2. 修改`handleKeyResponse`方法中key的处理逻辑
3. videojs插件判断的方式：advance plugin extends from `Plugin`, but basic plugin is just function.
4. http-streaming.js里调用了`registerSourceHandler`添加handler, HLS的handler是添加在`Html5 tech`下了。handlers的注册逻辑`handlers.splice(index, 0, handlers)`,保证最新的handler在数组的第一项。`selectHandler`的逻辑是 遍历handler数组，返回第一个满足playType的handler


## 未解决

### webworker.postMessage 的第二个参数：transferList是什么

### buffer 是如何更新和变化的？如何监听到buffer为空

### Player类做了什么

   1. Player.src: 更新src到cache
   2. 执行中间件
   3. 执行registerTech, 默认注册Html5和Tech, Tech是媒体播放控制器的基础类

### Component类的功能

   Q: Component.setTimeout()的作用以及为什么这么做？

   ---
   1. 对window.setTimeout做一层封装，为了更方便的处理clear逻辑

### middleware有哪些作用

    1. middleware.use()方法注册中间件，VHS就是使用这个方法注册中间件的,VHS注册的中间件对象格式{setSource, setCurrentTime, play}

### 事件模型

   源码在videojs/events.js

### setSourceHelper的原理

### 如何实现tech插件化，使得flv.js的接入成为可能
