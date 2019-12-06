##  已解决

1. AES-128的密钥长度必须是16位
2. 修改`handleKeyResponse`方法中key的处理逻辑
3. videojs插件判断的方式：advance plugin extends from `Plugin`, but basic plugin is just function.

## 未解决

### webworker.postMessage 的第二个参数：transferList是什么

### buffer 是如何更新和变化的？如何监听到buffer为空

### Player类做了什么

   1. Player.src: 更新src到cache
   2. 执行中间件

### Component类的功能

   1. Component.setTimeout()的作用以及为什么这么做？

### middleware有哪些作用

    1. middleware.use()方法注册中间件，VHS就是使用这个方法注册中间件的,VHS注册的中间件对象格式{setSource, setCurrentTime, play}

## 备忘录

1.实现自定义事件监听：
    - `buffer`为空