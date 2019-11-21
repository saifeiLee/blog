1. 使用MDN上的demo, 可能会遇到如下报错：

    > Failed to execute 'endOfStream' on 'MediaSource': The MediaSource's readyState is not 'open'.

原因是：需要将regular mp4 file转化为 fragment mp4 file.

## Q&A

### Q: 如何查看视频是否fragment-ed?

    A: 使用命令行工具mp4info查看,下载地址：[点我](https://www.bento4.com/downloads/)
### Q: 