---
title: CSS 笔记
---

# CSS 学习笔记

- `width: fit-content`可轻松实现水平居中。(搭配margin:auto) [CSS3 width:fit-content使用与margin auto下水平居中demo](https://www.zhangxinxu.com/study/201605/width-fit-content.html)
- `unset` 一个属性定义了unset值，如果该属性是默认继承属性，该值等同于inherit，如果该属性是非继承属性，该值等同于initial ; unset属于CSS-wide关键字，这表示所有的属性都可以接受该值，

### restart a css animation 两种方式:
[参考链接1](https://css-tricks.com/restart-css-animation/)
[参考链接2](https://www.reddit.com/r/learnjavascript/comments/782qdx/what_does_void_elementoffsetwidth_do/)

   ```javascript
    // 法1:
    elem.addEventListener('click', function(e) {
    target.classList.remove('test');
    setTimeout(() => {
        target.classList.add('test');
    }, 0);
    })
    // 法2:
    // retrieve the element
    element = document.getElementById("logo");

    // reset the transition by...
    element.addEventListener("click", function(e) {
    e.preventDefault;
  
  // -> removing the class
    element.classList.remove("run-animation");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
    void element.offsetWidth;
  
  // -> and re-adding the class
    element.classList.add("run-animation");
    }, false);
    ```
-----------------------------------------

- position: relative  元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。
- absolute 相对于最近的positioned ancestor(非static元素)
- CSS `flex` 属性是flex-grow,flex-shrink,flex-basis的缩写.[参考资料](https://zhoon.github.io/css3/2014/08/23/flex.html)

-超长换行

```css
p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-break: keep-all;
  text-align: center;
}
```

- zoom / scale 差异
1. zoom的缩放是相对于左上角的；scale默认居中缩放。
2. zoom的缩放改变了元素占据的空间大小；而scale的缩放占据的原始尺寸不变，页面布局不会发生变化。所以transform: scale 后的元素width/height不变

> zoom / scale若同时使用缩放效果会叠加。

- 行内框与一个浮动元素重叠时，其边框、背景和内容都在该浮动元素之上显示。
- 块框与一个浮动元素重叠时，其边框和背景在该浮动元素之下显示，而内容在浮动元素之上显示
- div默认的宽度是100%,inline-block元素的宽度是根据内容而定的
- 浮动框不属于文档中的普通流，当一个元素浮动之后，不会影响块级框的布局，而只影响内连元素(通常是文本)的排列，文档中的普通流就会表现的和浮动框不存在一样。
- 闭合浮动
```css
.clearfix:after {
    content:"\200B";
    display:block;
    height:0;
    clear:both;
}
/* \200B是零宽度空格，以此为content,可以省去一行css visibility: hidden; */
```

- float与position: absolute的区别: float有文字环绕
 
### 理解width: max-content
假设我们的容器有足够的宽度、足够的空间,此时所占据的宽度就是max-content所表示的尺寸。

### 理解width: min-content
采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度。

> 最小宽度值是指:替换元素，例如图片的最小宽度值就是图片呈现的宽度，对于文本元素，如果全部是中文，则最小宽度值就是一个中文的宽度值；如果包含英文，因为默认英文单词不换行，所以，最小宽度可能就是里面最长的英文单词的宽度。