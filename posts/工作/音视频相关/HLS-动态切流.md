# 关键帧

由于存储所有图像占据过大的磁盘空间，所以编码时的格式为：关键帧 + diff。当从视频中间的某一点开始播放，播放器计算从开始点（当前chunks的keyframe）的所有diff，然后开始播放。

关键帧间隔： 建议3s

# HLS Break Points

关键词： #EXT-X-DISCONTINUITY
场景：动态切流、视频中间添加广告。

# Live Streaming With HLS

- 直播流的m3u8不同之处：
  - `#EXT-X-MEDIA-SEQUENCE:1` , 必须要有
  - 不能以`#EXT-X-ENDLIST`结尾
- 当m3u8 playlist中新增`.ts`时，`#EXT-X-MEDIA-SEQUENCE:<counter>` 必须加1
- 确保m3u8文件声明了`no-cache`头
- 初始向量(Initialization vector, 缩写为IV)， 密码学领域，是一个固定长度的输入值。