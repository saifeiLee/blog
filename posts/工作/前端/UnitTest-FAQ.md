### Q: Jest如何只运行单个测试

- A: jest my-test

### Q: 如何解决paper.js引入时，单元测试报错：TypeError: Cannot read property 'acorn' of undefined

- A: [jest 'this' undefined 错误](https://github.com/facebook/jest/issues/3970#issuecomment-328703877), 在ES6模块中，babel直接将全局this转换为undefined.解决方法：添加babel ignore，同时在jest.config.js中同样添加到transformIgnorePatterns。
- 解决过程：先确认是babel处理方式导致的，使用最小demo复现，对比node_modules引入和单文件引入是否一致，确认是babel配置问题后，想办法让babel忽略该文件

### Tips

1. 单元测试应该尽可能小，不应该依赖其他模块的输入，使用mock进行隔离
2. 瓶颈1，使用开源enzyme-inferno方案不可靠，换用inferno-test-utils
第14行
