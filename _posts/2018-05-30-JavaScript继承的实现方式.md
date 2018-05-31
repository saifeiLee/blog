---
title: JavaScript 继承的实现
---
# JavaScript 继承的三种实现方法

## 1: Prototypal Model

{% highlight ruby %}
var AnswerPrototype = {
    constructor: function fn0(value) {
        this._val = value;
    },
    get: function fn1() {
        return this._val;
    }
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();   // ->42

var dessertAnswer = object.create(AnswerPrototype);
dessertAnswer.constructor(3.14159);
dessertAnswer.get();    // ->3.14159


var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
luckyAnswer.get();  // -> "7!!""

var magicAnswer = Object.create(AnswerPrototype);
magicAnswer.constructor(3);
magicAnswer.get();  // -> "3!!"
{% endhighlight %}

## 2: Classical Model

```javascript
function Answer(value) {
    this._val = value;
}
Answer.prototype.get = function fn1() {
    return this._val;
};

var lifeAnswer = new Answer(42);
lifeAnswer.get();   // -> 42

var dessertAnswer = new Answer(3.14159);
dessertAnswer.get();    // ->3.14159


function FirmAnswer(value) {
    Answer.call(this, value);
}

FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;
FirmAnswer.prototype.get = function fn2() {
    return Answer.prototype.get.call(this) + "!!";
};

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get()   // -> "7!!"

var magicAnswer = new FirmAnswer(3);
magicAnswer.get();  // -> "3!!"
```

## 3: ES6 Syntax

```javascript
class Answer{
    constructor(value) {
        this._val = value;
    }

    get() {
        return this._val;
    }
}

var lifeAnswer = new Answer(42);
lifeAnswer.get();   // -> 42

var dessertAnswer = new Answer(3.14159);
dessertAnswer.get();    // -> 3.14159

class FirmAnswer extends Answer {
    constructor(value) {
        super(value);
    }

    get() {
        return super() + "!!";
    }
};

var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get();  // -> "7!!"

var magicAnswer = new FirmAnswer(3);
magicAnswer.get();   // ->"3!!"
```

需要注意的是， `class` 语法 `没有` 给JavaScript引入新的面向对象继承模型，事实上， `class syntax` 背后的原理和 `classical inheritence` 是相同的对象模型，不同在于`class syntax`用起来更方便。