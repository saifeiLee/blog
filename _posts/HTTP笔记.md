---
title: HTTP notes
---

### 状态码

#### 1XX 信息性状态码（接受的请求正在处理）

#### 2XX 成功

- 204 No Content 返回的响应报文中不包含任何实体的主体。(可能场景:1. PUT请求但是文件已存在与服务器上； 2. DELETE请求 但是文件已经被删除了)
- 206 (Partial Content) 响应报文包含了多个范围的内容时使用。

#### 3XX 重定向（需要进行附加操作以完成请求）

- 301 Moved Permanently. 表示请求的资源已被分配了新的URI。
- 302 Found 临时性重定向。
- 303 See Other.表示由于请求对应的资源存在着另一个URI,应使用GET方法定向获取请求的资源。
  > 303和302功能相同,区别在于303状态码明确表示客户端应当采用GET方法获取资源.
- 304 Not Modified 表示客户端发送附带条件的请求时,服务器端允许请求访问资源,但未满足条件。不包含任何响应主体。虽被划分为3XX类别，但和重定向无关。
  > 附带条件的请求是指采用GET方法的请求报文中包含if-Match, If-Modified-Since, If-None-Match, If-Range, If-Unmodified-Since中任一首部。
-307 Temporary Redirect. 与302含义相同,区别在于307会按照浏览器标准,不会从POST变成GET.

#### 4XX 客户端错误（服务器无法处理请求）

- 400 Bad Request 请求报文中包含语法错误。
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found.(场景  1: 服务器上无法找到请求的资源；2: 服务端拒绝请求且不想说明理由)
- 422 Unprocessable Entity

#### 5XX 服务端错误（服务器处理请求出错）

- 500 Internal Server Error
- 503 Service Unavailable

### HTTP方法

- OPTIONS: 用于查询针对请求URI资源所支持的方法
- TRACE: 追踪路径. 但是易引发XST(Cross-Site Tracing)攻击
- CONNECT: 要求用隧道协议连接代理

**代理**

- ‘中间人’角色。不改变请求URI
- 使用代理服务器的理由:利用缓存技术减少网络带宽的流量；针对特定网站的访问控制；获取访问日志
- 代理使用方法的分类基准: 1. 是否使用缓存；2.是否会修改报文

**网关**

- 与代理相似，而网关能使通信线路上的服务器提供非HTTP协议服务。
- 利用网关可以提高通信的安全性。
  
**隧道**

- 确保客户端能与服务端进行安全的通信。

**缓存**

- Vary. 使用Vary: User-Agent 可以用来区分移动端和桌面端的展示内容。
- 浏览器自带HTTP缓存实现,只需保证服务器响应提供了正确的HTTP标头指令，以指示浏览器何时可以缓存以及可以缓存多久。
- Webview页面需要提供额外的配置标志。
- 服务器使用ETag HTTP标头传递验证令牌。
- 验证令牌可实现高效的资源更新检查；资源未发生变化时不会传送任何数据。
- ETag(Entity Tags)解决的问题:
  1. 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET;
  2. 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)
  3. 某些服务器不能精确的得到文件的最后修改时间；

- 验证令牌(ETag): 服务器生成并返回的随机令牌通常是文件内容的哈希值或其他指纹。客户端在下一次请求时将其发送至服务器，如果指纹仍然相同，则表示资源未发生变化，就可以跳过下载。

> 如果服务器除了ETag之外，同时设置了Cache-Control:max-age和Expires, 三者将都被使用，也就是说在完全匹配If-Modified-Since和If-None-Match即检查完修改时间和Etag之后，服务器才能返回304.(不要陷入到底使用谁的问题怪圈)
- 缓存策略

![缓存决策树](../assets/images/http-cache-decision-tree.png "缓存决策树")

- 废弃和更新缓存的响应
    - 在资源“过期”之前，将一直使用本地缓存的响应
    - 可以通过在网址中嵌入文件内容指纹，强制客户端更新到新版本的响应。
    - 为获得最佳性能，每个应用都需要定义自己的缓存层次结构。
- 控制强制缓存的字段是Expires和Cache-Control,其实Cache-Control优先级比Expires高。Expires的不足之处在于其原理是使用客户端与服务端返回的时间做对比，如果时间有误差（例如时区不同）,强制缓存直接失效。
- 协商缓存的字段:Last-Modified / If-Modified-Since和Etag / If-None-Match，其中Etag / If-None-Match的优先级比Last-Modified / If-Modified-Since高
- 强制缓存优先于协商缓存。

### 杂记

- HTTP keep-alive: 只要任意一端没有明确提出断开连接,则保持TCP连接状态。好处:减少了TCP重复连接和断开所造成的额外开销,减轻服务端的负载；减少开销的那部分时间，使HTTP请求和响应能够更早的结束,从而提高了页面显示速度
- 持久连接使得多数请求以管线化(pipelining)方式发送成为可能
- 报文(message): 是HTTP通信中的基本单位,由8位组字节流(octet sequence, octet为8个bit)组成，通过HTTP通信传输。
- 实体(entity)作为请求或响应的有效载荷数据（补充项）被传输，其内容由实体首部和实体主体组成。
- MIME: Multipurpose Internet Mail Extensions
- 内容协商机制是指客户端和服务端就响应的资源内容进行交涉，然后提供给客户端最为合适的资源。内容协商以响应资源的语言、字符集、编码方式等作为判断的基准。
- no-cache: 为了防止从缓存中返回过期的资源。
- no-store: 禁止浏览器以及所有中间缓存存储任何版本的返回响应.
- HTTP加上加密处理和认证以及完整性保护后即是HTTPS
- HTTPS使用混合密钥加密:公开密钥和共享密钥相结合,在交换密钥环节使用公开密钥加密方式,之后的建立通信交换报文阶段则用共享密钥加密。
- 在Cookie中设置httponly属性可降低XSS攻击的损失。
- WebDAV(Web-based Distributed authoring and Versioning)是一个可对Web服务器上的内容直接进行文件复制、编辑等操作的分布式文件系统。
- CGI(Common Gateway Interface)是指web服务器在接收到客户端发送过来的请求后转发给程序的一组机制。
- HTTP首部注入攻击可能的影响:设置任何Cookie信息；重定向URL；显示任意主体。

### web安全

- Web应用的安全对策大致可分为两部分:
    - 客户端验证
    - 服务端验证
        - 输入值验证
        - 输出值转义
- 因输出值转义不完全引发的漏洞
    - XSS(Cross-site Scripting)
    - SQL注入
    - OS命令注入
    - HTTP首部注入
    - 邮件首部注入
    - 目录遍历攻击
    - 远程文件包含漏洞
- 因设置或设计上的缺陷引发的安全漏洞:
    - 强制浏览
    - 不正确的错误消息处理
    - 开放重定向
- 因会话管理疏忽引发的漏洞：
    - 会话劫持

### http2

- 与HTTP1.1的最大区别：HTTP2与SPDY一样，将一个TCP连接氛围若干个流，每个流中可以传输若干消息，每个消息由若干最小二进制帧组成。
- - HTTP2的主要技术:压缩、多路复用、TLS义务化、协商、客户端拉拽/服务器推送、流量控制、WebSocket。

### POST/GET 区别

- 最主要：GET产生一个TCP数据包；POST产生两个TCP数据包。
- 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。
- POST/GET 本质上都是TCP/IP连接，并无不同，但由于HTTP规定和浏览器/服务器的限制，导致其在应用过程中体现出不同。

> 其他区别
GET在浏览器回退时是无害的，而POST会再次提交请求。

GET产生的URL地址可以被Bookmark，而POST不可以。

GET请求会被浏览器主动cache，而POST不会，除非手动设置。

GET请求只能进行url编码，而POST支持多种编码方式。

GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

GET请求在URL中传送的参数是有长度限制的，而POST么有。

对参数的数据类型，GET只接受ASCII字符，而POST没有限制。

GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。

GET参数通过URL传递，POST放在Request body中。