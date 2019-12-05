##  已解决

1. AES-128的密钥长度必须是16位
2. 修改`handleKeyResponse`方法中key的处理逻辑

## 未解决
1. webworker.postMessage 的第二个参数：transferList????
2. buffer 是如何更新和变化的？如何监听到buffer为空？

## 备忘录

1.实现自定义事件监听：
    - `buffer`为空