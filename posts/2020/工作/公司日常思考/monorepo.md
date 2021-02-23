# monorepo babel setup

1. 使用babel.config.json， babel.config.json是中心化的，在项目根目录
2. 通过`overrides` 可以配置子仓库的babel

Q: 是每个子仓库都配置个.babelrc.json, 还是在根目录用js脚本去调用babel编译packages?
A: 先验证可行性

3. lerna exec 在每个子包中运行命令
4. 使用yarn workspace
