# typescript declaration file

## .d.ts的模块化实践

### 如何在.d.ts中export一个const enum类型，并且能import进来

```javascript
// enum.d.ts
declare namespace Enum {
  export const enum SizeToContent {
    name = 1,
    size = 2
  }
  export const name = '123';
}

// enum.ts

///  <reference path='./enum.d.ts'/>
import Person = Enum.Person;
import SizeToContent = Enum.SizeToContent

const Mike: Person = {
    name: 'mike',
    age: 12
}

console.log('SizeToContent.name', SizeToContent.name);
console.log('SizeToContent.size', SizeToContent.size);
console.log(Mike)
```

### 如何map .d.ts to js

1. 文件名保持一致，比如car.js，对应的生命文件必须为`car.d.ts`
2. 在同一个目录下
3. 只有在ts文件中，编辑器才能获得type语法提示

### tsc和babel之间存在差异，表现为哪些？

1. tsc可以处理 `const enum`而babel不可以
2. tsc支持更丰富的.d.ts module export & import 