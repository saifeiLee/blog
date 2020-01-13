# 如何配置jest到ts+react项目

1. 配置jest支持`import`语法
2. 配置jest忽视less/css文件

```javascript
// /babelrc
"env": {
    "test": {
      "presets": [
        ["@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
```

```javascript
// jest.config.js
"moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }

// fileMock.js
module.exports = 'test-file-stub';

// styleMock.js
module.exports = 'test-file-stub';
```
