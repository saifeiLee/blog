---
title: tabindex 笔记
---

tabindex 的作用:使无法聚焦的DOM元素(例如div,span)变得能聚焦。有三种取值:

1. tabindex="1"(或者任何大于1的数字),显式定义tab的顺序(不推荐)
2. tabindex="0",允许除链接(link)和表单(form)以外的元素接受键盘聚焦(focus)。 It does not change the tab order, but places the element in the logical navigation flow, as if it were a link on the page.
3. tabindex="-1" allows things besides links and form elements to receive "programmatic" focus, meaning focus can be set to the element through scripting, links, etc.

[reference link](https://stackoverflow.com/questions/32911355/whats-the-tabindex-1-in-bootstrap-for)