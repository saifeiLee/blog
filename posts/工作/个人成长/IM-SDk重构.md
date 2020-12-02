# IM-SDK代码结构优化

## 目标

1. 接口隔离原则，将controller区分开
2. 变量命名规范
3. 目录结构清晰
4. 尽可能的单元测试覆盖

## 关键步骤

1. 梳理BaseController, SingleMessageController, RoomMessageController, GroupMessageController的边界
2. 移除不必要的(?)的MsgDistributor
3. 梳理interface定义，让interface在代码中更加直观
4. 处理完所有的todo