# JavaScript WebSocket sdk 实践分享

工作中，我负责维护公司的websocket-sdk库，WebSocket通过ArrayBuffer发送和接收数据，但是前端工程师少有机会跟二进制编解码打交道，所以一开始我对`ArrayBuffer`、二进制编解码方案等问题一头雾水。今天就跟大家分享一下我的实践。

通过这篇文章，您可以了解到：

1. 跟二进制编解码相关的类: TypedArray / ArrayBuffer 分别是什么?
2. 为什么应该使用二进制编码?
3. JavaScript二进制编解码方案简介
4. 如何让websocket-sdk兼容微信小程序

---

## ArrayBuffer

`ArrayBuffer`对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（`TypedArray`视图和`DataView视图`)来读写，视图的作用是以指定格式解读二进制数据。

## TypedArray

`TypedArray`视图描述了一个底层二进制数据缓冲区,可以理解为JavaScript操作二进制数据的一个接口。事实上，没有名为 TypedArray 的全局属性，也没有一个名为 TypedArray 的构造函数。相反，有许多不同的全局属性，它们的值是特定元素类型的类型化数组构造函数。TypedArray视图支持的数据类型一共有 9 种。

| 数据类型 | 字节长度 | 含义                             | 对应的 C 语言类型 |
|----------|----------|----------------------------------|-------------------|
| Int8     | 1        | 8 位带符号整数                   | signed char       |
| Uint8    | 1        | 8 位不带符号整数                 | unsigned char     |
| Uint8C   | 1        | 8 位不带符号整数（自动过滤溢出） | unsigned char     |
| Int16    | 2        | 16 位带符号整数                  | short             |
| Uint16   | 2        | 16 位不带符号整数                | unsigned short    |
| Int32    | 4        | 32 位带符号整数                  | int               |
| Uint32   | 4        | 32 位不带符号的整数              | unsigned int      |
| Float32  | 4        | 32 位浮点数                      | float             |
| Float64  | 8        | 64 位浮点数                      | double            |

## 为什么应该使用二进制编码

`为了使数据体积更小。`JSON的特点是以Key-Value形式的键值对存储数据，但是如果我们约定好数据对象都包含哪些字段，那么Key值将不再需要。最终传输的数据包中将不再包含Key值，从而减小了体积。

举个例子:
现在有一个数据类为`Person`，我们需要对其进行数据编码处理,假设在理想条件下，我们已经有了两个工具类：`WriteBlock`和`ReadBlock`分别负责二进制数据的写入和读取。(详细代码实现附在文末)

```javascript
// 帮助我们实现二进制数据的写入
class WriteBlock {
    // 省略细节
}

// 实现二进制数据的读取
class ReadBlock {
    // 省略细节
}

class Person {
  name: string; // 姓名
  age: number; // 年龄
  gender: string; // 性别

  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.gender = info.gender;
  }

  Encode: () => ArrayBuffer = () => {
    const wb = new WriteBlock();
    // 依次写入数据
    wb.WriteStringField(1, this.name);
    wb.WriteIntField(2, this.age);
    wb.WriteStringField(3, this.gender);
    return wb.getArrayBuffer();
  };

  Decode: (
    buffer: ArrayBuffer
  ) => {
    name: string;
    age: number;
    gender: string;
  } = (buffer) => {
    const rb = new ReadBlock(buffer);
    // 按照约定的协议，依次将数据解析出来
    return {
        name: rb.ReadStringField(1),
        age: rb.ReadIntField(2),
        gender: rb.ReadStringField(3),
    }
  };
}

```

## JavaScript二进制编解码方案简介

JavaScripts采用`UCS-2`编码，这种编码类似UTF-16, 每个字符占两个字节。所以可以用以下方法将JavaScript字符编码为ArrayBuffer:

```javascript
function str2ab(str) {
  var buf = new ArrayBuffer(str.length*2); // 每个字符占两个字节
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
```

解码方法：

```javascript
// 方法1
function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

// 方法2:
function ab2str(buf) {
  var uint8 = new Uint8Array(buffer)
  var decoder = new TextDecoder('utf8')
  var str = decoder.decode(uint8)
  return str
}

```

## 如何让websocket-sdk兼容微信小程序

微信小程序环境下，websocket的接口与浏览器环境下不一致,差异体现在websocket相关的API不同。

|            | 初始化                   | websocket API Style                 |
|------------|--------------------------|-------------------------------------|
| 浏览器     | new WebSocket(url)       | websocket.onopen = () => {}         |
| 微信小程序 | wx.connectSocket(object) | websocket.onOpen(function callback) |

借助`适配器模式`,我们可以在适配器层抹平差异，对上层提供一致的访问接口。

首先我们分别实现浏览器环境和小程序环境的Websocket控制类
```javascript
// 在此省略了接口声明
export class BrowserWebSocket implements GeneralWebSocket {
  private webSocket: WebSocket;

  constructor(url: string) {
    this.webSocket = new WebSocket(url)
    this.webSocket.binaryType = 'arraybuffer'
  }

  onOpen (cb) {
    this.webSocket.onopen = cb
  }

  onClose (cb) {
    this.webSocket.onclose = cb
  }

  onMessage (cb) {
    this.webSocket.onmessage = cb
  }

  onError (cb) {
    this.webSocket.onerror = cb
  }

  send (data) {
    this.webSocket.send(data)
  }
  getReadyState () {
    return this.webSocket.readyState
  }

  close (data) {
    this.webSocket.close()
  }
}

export class WeChatWebSocket implements MiniProgramWebSocket {
  private webSocket: WechatMiniprogram.SocketTask;

  constructor(url) {
    this.webSocket = wx.connectSocket({
      url,
      success: () => {
        console.log('websocket连接成功')
      },
      fail: () => {
        console.log('websocket 连接失败')
      },
    })
  }

  close (data?) {
    this.webSocket.close(data)
  }
  onOpen (cb) {
    this.webSocket.onOpen(cb)
  }

  onClose (cb) {
    this.webSocket.onClose(cb)
  }

  onError (cb) {
    this.webSocket.onError(cb)
  }

  onMessage (cb: (evt) => any) {
    this.webSocket.onMessage(cb)
  }
  send (data: any) {
    this.webSocket.send({
      data,
      success: (info) => {
        console.log('send msg success', info)
      },
      fail: (info) => {
        console.log('send msg fail:', info)
      },
      complete: () => {
        console.log('send complete')
      },
    })
  }
  getReadyState () {
    return (this.webSocket as any).readyState
  }
}

```

在WebsocketAdaptor类中抹平websocket 的差异:

```javascript
class WebSocketAdaptor {
  private webSocket: WeChatWebSocket | BrowserWebSocket
  constructor(env, url) {
    if (env === 'wechat') {
      this.webSocket = new WeChatWebSocket(url)
    } else if (env === 'browser') {
      this.webSocket = new BrowserWebSocket(url)
    }
  }

  onOpen (cb) {
    this.webSocket.onOpen(cb)
  }

  onMessage (cb) {
    this.webSocket.onMessage(cb)
  }

  onError (cb) {
    this.webSocket.onError(cb)
  }

  onClose (cb) {
    this.webSocket.onClose(cb)
  }

  send (data) {
    this.webSocket.send(data)
  }

  getReadyState () {
    return this.webSocket.getReadyState()
  }

  close (data?) {
    this.webSocket.close(data)
  }
}
```

## 总结

- JavaScript可以通过TypedArray视图操作二进制数据
- 使用二进制编码可以显著减小所传输数据的体积
- 通过适配器模式，方便的实现sdk对不同环境的websocket兼容


> 附上二进制读写辅助类的完整实现

```javascript

class ReadBlock {
  pos: number;
  dv: DataView;

  constructor(buffer: ArrayBuffer) {
    this.pos = 0
    this.dv = new DataView(buffer)
  }

  ReadInt16Field: () => number = () => {
    const val0 = this.dv.getUint8(this.pos++)
    const val1 = this.dv.getUint8(this.pos++)
    const ret = (val1 << 8) | val0
    return ret
  }

  ReadInt32Field: () => number = () => {
    const val0 = this.dv.getUint8(this.pos++)
    const val1 = this.dv.getUint8(this.pos++)
    const val2 = this.dv.getUint8(this.pos++)
    const val3 = this.dv.getUint8(this.pos++)
    const ret = (val3 << 24) | (val2 << 16) | (val1 << 8) | val0
    return ret
  }

  ReadInt64Field: () => number = () => {
    let ret = 0
    let step = 1
    for (let i = 0; i < 8; i++) {
      ret += (step * this.dv.getUint8(this.pos++))
      step *= 256
    }
    return ret
  }

  ReadStringField: () => string = () => {
    let str = ''
    const len = this.ReadInt16Field()
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(this.dv.getUint8(this.pos++))
    }
    return str
  }

  ReadArrayBufferField: () => ArrayBuffer = () => {
    const len = this.ReadInt16Field()
    const buf = this.dv.buffer.slice(this.pos, this.pos + len)
    this.pos += len
    return buf
  }
}

class WriteBlock {
  arr: Array<number>;

  constructor() {
    this.arr = []
  }

  WriteInt16Field: (val: number) => void = val => {
    this.arr.push(val & 0xFF)
    this.arr.push((val >> 8) & 0xFF)
  }

  WriteInt32Field: (val: number) => void = val => {
    this.arr.push(val & 0xFF)
    this.arr.push((val >> 8) & 0xFF)
    this.arr.push((val >> 16) & 0xFF)
    this.arr.push((val >> 24) & 0xFF)
  }

  WriteInt64Field: (val: number) => void = val => {
    let ret = val
    for (let i = 0; i < 8; i++) {
      this.arr.push(ret & 0xFF)
      ret /= 256
    }
  }

  WriteStringField: (str: string) => void = str => {
    this.WriteInt16Field(str.length)
    for (let i = 0; i < str.length; ++i) {
      this.arr.push(str.charCodeAt(i))
    }
  }
  WriteArrayBufferField: (buf: ArrayBuffer) => void = buf => {
    this.WriteInt16Field(buf.byteLength)
    const ui8 = new Uint8Array(buf)
    for (let i = 0; i < ui8.length; i++) {
      this.arr.push(ui8[i])
    }
  }

  getArrayBuffer: () => ArrayBuffer = () => {
    return new Uint8Array(this.arr).buffer
  }
}
```