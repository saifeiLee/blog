# class

## class与custom function的区别：

- Class declarations, unlike function declarations, are not hoisted. Class declarations act like let declarations, so they exist in the temporal dead zone until execution reaches the declaration. 
- All code inside class declarations runs in strict mode automatically. 
There’s no way to opt out of strict mode inside classes. 
- All methods are nonenumerable. This is a significant change from custom types, where you need to use Object.defineProperty() to make a method nonenumerable.
- All methods lack an internal [[Construct]] method and will throw an error if you try to call them with new.
- Calling the class constructor without new throws an error.
- Attempting to overwrite the class name within a class method throws an error.

## 使用super()的注意事项

1. 只能在子类的constructor()中使用。
2. 必须在调用this之前使用，因为super()是负责初始化this的
3. 唯一可以避免调用super()的方式是在constructor()中返回一个对象。

## Modules

1. keep in mind that no matter how many times you use a module in import statements, the module will execute only once. After the code to import the module executes, the instantiated module is kept in memory and reused whenever another import statement references it.