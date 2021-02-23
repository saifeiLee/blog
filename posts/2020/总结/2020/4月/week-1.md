1. 希沃视频展台项目启动，使用开源的项目模版[electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)，节省了大量时间.
2. 打包报错：Unable to load preload script in packaged app, 在github提问最终解决，修改`BrowserWindow`的启动配置,开启`nodeIntegration`
3. 解决Electron无法调用webRTC中获取视频流问题。问题原因：权限问题。关键在于让命令行获取到系统的摄像头权限，打开`terminal`或者`iTerm`, 总之不要直接用vscode的命令行，然后运行`yarn dev`, 就会成功触发`terminal`申请系统摄像头的权限。
