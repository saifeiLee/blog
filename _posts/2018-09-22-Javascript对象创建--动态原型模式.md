---
title: 动态原型模式的注意事项
---

# 动态原型模式的注意事项

`使用动态原型模式时，不能用对象字面量重写原型`

```javascript
function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype = {
            constructor: Person,
            getName: function () {
                console.log(this.name);
            }
        }
    }
}

var person1 = new Person('John');
var person2 = new Person('daisy');

// 报错 并没有该方法
person1.getName();

// 注释掉上面的代码，这句是可以执行的。
person2.getName();
```

### 原因

`new` 的实现步骤:

1.首先新建一个对象
2.然后将对象的原型指向 Person.prototype
3.然后 Person.apply(obj)
4.返回这个对象

伪代码表示：

```javascript
new Person("John") = {
    var obj = {};
    obj.__proto__ = Person.prototype; // 此时便建立了obj对象的原型链：
    // obj->Person.prototype->Object.prototype->null
    var result = Person.call(obj,"John"); // 相当于obj.Person("John")
    return typeof result === 'object' ? result : obj; // 如果无返回值或者返回一个非对象值，则将obj返回作为新对象
}
```

当执行`var person1 = new Person('John');`时,在`new`执行过程的第三步,会执行obj.Person()方法，这时构造函数里的if语块代码会被执行，但是在此之前,`obj.prototype`已经被赋值为'Person.prototype',也即最初始的prototype,所以在那之后,if语句里用对象字面量修改Person.prototype并不会影响obj.prototype,因此`person1.getName()`报错。