---
title: 用chrome调试mocha测试集
---

# 步骤

1. 在`package.json`文件中添加:

```JSON
"test:debug": "node --inspect node_modules/mocha/bin/_mocha --watch --no-timeouts"
```

2. 运行该命令，输出结果中有一个`ws`开头的url,打开chrome://inspect
