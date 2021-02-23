### NoSQL特点

1. 通过将负载分布到多台服务器之上的水平扩展能力。
2. 不需要是关系型数据库，存储的直接就是对象或文档，无需转换层进行对象和数据之间的双向转换。

### 杂记

- React does not call a toString() automatically on objects, because it expects all objects as children of components to be React components if they are not strings.
- componentDidMount() method runs after the component output has been rendered to the DOM.

> 查询结果为100万条数据该如何处理？

法1: 使用limit()限制返回的最大数据个数，若输出页面实现了分页，可以用skip()方法来指定从指定结果开始返回。
法2: 使用forEach()或stream()流式的把结果返回到客户端。

### webpack

- 安装dev-server插件后，在webpack.config.js中设置devServer,可以配置代理。
- 浏览器刷新会重新下载所有文件，而模块热替换只下载增量文件。