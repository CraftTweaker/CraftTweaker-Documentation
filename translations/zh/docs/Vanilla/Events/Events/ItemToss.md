# 项目

每当某个物品被从玩家的背包中丢弃时，都会发射ItemTos事件。  
取消此事件将阻止项目进入世界，从而导致项目被删除。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemTossEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IEntity事件](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | 类型                                            |
| --------- | --------------------------------------------- |
| 项目        | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| 播放器       | [IPlayer](/Vanilla/Players/IPlayer/)          |