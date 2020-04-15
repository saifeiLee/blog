# 问题描述

直播中心使用`webpack externals`引用了fe-monitor, 在`<script>`中引用，当链接本身不可用时， webpack的注入就会失败，import就会直接报错。

## 解决

还是要避免使用webpack external的方式。