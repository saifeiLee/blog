---
Date: 2019-02-04
---

# 问题排查记录

`nginx -s stop` 报错： `nginx: [error] open() "/usr/local/var/run/nginx.pid" failed (2: No such file or directory)`

根据信息，没有nginx.pid这个文件，解决方法：`sudo nginx -c /usr/local/etc/nginx/nginx.conf`, 提示错误信息：`nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)`, 怀疑是端口占用，执行`ps ax -o pid,ppid,%cpu,vsz,wchan,command|egrep '(nginx|PID)'`, 未发现nginx进程,使用mac的活动监视器也没找到nginx进程，说明nginx并没有运行成功。

此时打开我的项目页面，控制台查看网络请求的返回结果，server是apache, 说明有apache服务， `sudo apachectl stop`关闭apache服务进程，问题解决。`ps ax -o pid,ppid,%cpu,vsz,wchan,command|egrep '(nginx|PID)'`可查看到nginx进程信息。