---
title: Java笔记
---

- `main`方法必须为public
- java源代码文件名必须与`public class`名称相同,且大小写敏感.
- 每一个`NaN`都是独立的，不能用来比较,可以用isNaN方法.
- Arrays.copyOf(oriArr, length)可用于扩展数组长度

  创建数组：
- String[] names = new String[10];
- int[] smallPrimes = {2, 3, 5};
- int[] test = new int[] {1, 2, 3};
  
- Java不允许指针运算(通过数组指针+1访问下一个元素)
- Java命令行参数不包括文件名. 例子：java Message -h args[0]是'-h'
- 快速打印二维数组:Arrays.deepToString(a)
- Java底层实际上只有一维数组.
- 对象的三个要素:behavior,state,identity.
- 类间关系:
    1. Dependence('uses-a')
    2. Aggregation('has-a')
    3. Inheritance('is-a')
- 注意访问器方法不要返回一个可变对象的引用,这种情况下应该先clone,再返回。
- 一个类的方法有权访问这个类的任何对象的私有域。
- Java class fields 初始默认值: numbers to 0, boolean values to flase, object reference to null.
- 只有在没有构造函数的情况下,JAVA才会提供默认构造函数。
- 任何类都可以添加`finalize`方法，finalize方法在GC抹去对象之前被调用。在实践中，由于无法知道`finalize`方法何时被调用所以不要依赖此方法去回收资源。(建议用: `Runtime.addShutdownHook`方法添加'shutdown hooks')
- static import:

  ```java
    import static java.lang.System.*;
    ==> out.println("Goodbye, world!"); // i.e. System.out
        exit(0);                        // i.e. System.exit
  ```

- Java子类无法直接访问父类的私有成员变量，要调用接口，加`super`关键字,`super`并不是一个引用，而是一个特殊的关键字，用于引导编译器调用父类的方法。
- 多态:一个对象变量可以作为多种类型的引用
- 动态绑定：在运行时自动选择正确的方法进行调用
- 类型转换之前用instanceof进行判断
- 包含抽象方法的类本身必须为抽象类。
- 仅对本类可见-private
- 对所有类可见-public
- 对本包和所有子类可见-protected
- 对本包可见-默认,不需要修饰符
- equals方法有很多种实现方式,equals方法必须具备的特性:自反、对称、传递、一致性、对于任意非空引用x,x.equals(null)应该返回false.
- Just as methods in an interface are automatically public, fields are always public static final.
- 可以使用`default`在interface中设置默认方法
- 默认方法冲突的解决方法
  - 超类优先.(class wins)
  - 如果多个接口间的命名冲突,在class中重载该方法以覆盖