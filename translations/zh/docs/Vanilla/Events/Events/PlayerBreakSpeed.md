# 玩家断路速度

每当玩家试图破坏一个方块时，玩家破碎速度事件都会被射击。  
可以取消它来阻止玩家破坏那个方块。

## 事件类

您需要将事件投射到函数头作为这个类：  
`craftminstruer.event。 layerBreakSpeedEvent`  
你当然也可以 [导入课前的](/AdvancedFunctions/Import/) 然后使用该名称。

## 事件界面扩展

玩家断路事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter | ZenSetter | 类型                                          |
| --------- | --------- | ------------------------------------------- |
| 封禁状态      |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| 封禁        |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| 原始速度      |           | 浮点数                                         |
| 新速度       | 新速度       | 浮点数                                         |