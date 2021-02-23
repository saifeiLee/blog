# http-streaming

## 笔记

1. xhr请求存在一个队列中，进行管理（发起和abort）
2. HlsSourceHandler.handleSource方法挂载了`tech.hls`

### 问题

#### setupMediaGroups作用和原理

#### this.masterPlaylistLoader_.on('loadedplaylist')时间监听和处理的原理,如何利用hls-unknown-waiting

#### master-playlist-controller.js

start() --> load() --> SegmentLoader的load()方法 --> loadSegment_() --> mediaSegmentRequest() --> segmentRequestFinished_() --> processSegmentResponse_()
--> `handleSegment_()` --> sourceUpdater_.appendBuffer()

#### handleSegment_() 做了什么事

### mse

#### 基本步骤

1. mse作为中间层，将其绑定到video.src上
2. 对mediaSouce实例添加事件监听`sourceopen`
3. 根据mimeType创建sourceBuffer对象