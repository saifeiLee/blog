1. 使用前先用`MediaKeysSystemAccess.getConfiguration()`获取约定好的配置信息，因为EME只支持部分格式的音视频
2. 应用是如何处理`encrypted`event:
   a. 我们可以给media element 设置一个`MediaKeys Object`, 如果没有，首先通过`navigator.requestMediaKeySystemAccess()`去查看可用的密钥系统，并选择可用的密钥系统。（Note that initialization of the MediaKeys object should happen before the first encrypted event.）
   b. `setMediaKeys()`将MediaKeys绑定到media element

## workflow

1. web-app 尝试播放加密媒体流
2. 浏览器`识别`到媒体是加密的，触发`encrypted`事件 with `metaData`(initData) obtained from the media about the encryption.
3. app处理`encrypted`事件
    a. 我们可以给media element 设置一个`MediaKeys Object`, 如果没有，首先通过`navigator.requestMediaKeySystemAccess()`去查看可用的密钥系统，并选择可用的密钥系统。（Note that initialization of the MediaKeys object should happen before the first encrypted event.）
    b. `setMediaKeys()`将MediaKeys绑定到media element
4. `createSession()`, 创建MediaKeySession代表证书和密钥的生命期
5. app调用`generateRequest()`发起证书请求，请求携带着`encrypted`事件获取到的媒体数据
6. The CDM fires a message event: a request to acquire a key from a license server.
7. `MediaKeySession`对象接收到`message event`, app向证书服务器发送一个消息
8. app接收到证书服务的响应，使用MediaKeySession的`update`方法把数据传给CDM
9. CDM使用证书里的密钥解密

## Q: 浏览器是怎么得知媒体数据是加密的

加密信息属于媒体容器文件的元信息。浏览器可以读取到。
