# videojs

## 已解决

1. AES-128的密钥长度必须是16位
2. 修改`handleKeyResponse`方法中key的处理逻辑
3. videojs插件判断的方式：advance plugin extends from `Plugin`, but basic plugin is just function.
4. http-streaming.js里调用了`registerSourceHandler`添加handler, HLS的handler是添加在`Html5 tech`下了。handlers的注册逻辑`handlers.splice(index, 0, handlers)`,保证最新的handler在数组的第一项。`selectHandler`的逻辑是 遍历handler数组，返回第一个满足playType的handler
5. `options.techOrder`会被遍历，调用`player.loadTech`,发现合适的之后break循环
6. Videojs的核心：1. 代码设计（组件机制、插件机制、中间件机制）；2. 测试工具（Karma）; 3. 工程化方案
7. flv播放流程

   1. videojs 实例化Player组件，Player组件有一系列默认子组件: MediaLoader, LoadingSpinner...
   2. 在MediaLoader中调用player.loadTech_方法，添加Html5 Tech, 这是默认的Tech
   3. 实例化完成后，执行player.src()方法
      - 如果传入的是string,调用`filterSource()`方法转换为srcObj数组
   4. 调用`player.loadTech_()`,移除当前html5 Tech, 改为flv tech, 实例化`Flv Tech Class` -> 调用videojs-flv构造函数 -> 因为video-flv继承于Html5->Tech, 所以会调用Tech.setSource -> Tech.setSource方法确定sourceHandler
   5. 此时注册的handler有默认的http-streaming和html5，都无法处理flv, 所以fallback到native source handler
   6. Html5.nativeSourceHandler.handleSource方法调用videoFlv.setSrc方法，执行`attachMediaElement() & load()`

8. SourceHandler什么时候确定的

   在videojs加载时注册了html5 handler.(Tech.js)、 videojs-http-streaming handler
9. Component.setTimeout()的作用
   1. 对window.setTimeout做一层封装，方便用Component.clearTimeout和Component.dispose进行清除

## 未解决

### webworker.postMessage 的第二个参数：transferList是什么

### buffer 是如何更新和变化的？如何监听到buffer为空

### Player类做了什么

   1. Player.src()
      - 给Player设置srcObject, 异步执行middleware.setSource(player, src, next), 在`next`回调中更新srcObject
   2. 执行中间件
   3. 执行registerTech, 默认注册Html5和Tech, Tech是媒体播放控制器的基础类
   4. 注册通用的children组件(例如MediaLoader, LoadingSpinner...)

### Component类的功能

### middleware有哪些作用

 > With middleware, you are now able to interact with and change how the player and the tech talk to each other.

    1. middleware.use()方法注册中间件，VHS就是使用这个方法注册中间件的,VHS注册的中间件人会的对象格式setSource方法必须有

### 事件模型

   源码在videojs/events.js

### setSourceHelper的原理

### 如何实现tech插件化，使得flv.js的接入成为可能
