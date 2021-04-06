# 如何让enow的热更新更高效

## 旧的编译流程

[main process] tsc -watch
    -> [copy process] copy build & style
        -> [gulp process] gulp watch (babel compiling & watch)

## 新的编译流程

[main process] lerna
                - [parallel] babel compiling
                - [parallel] babel compiling
                ...
                - [parallel] babel compiling
                    -> [copy process] copy json & style file

## 为什么新的方式更快

- babel把ts当作js来处理，不做类型检查。
- Babel cache
- single-file emit architecture

## 造成什么影响

容错更低。例如：子类继承中对同名属性的重载

