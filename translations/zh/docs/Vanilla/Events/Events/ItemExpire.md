# 项目过期

每当物品过期时都会触发物品过期(达到其宏寿命)。  
它可以被取消以防止项目被标记为死亡。  
如果取消，它将会将 `额外的` 添加到项目的生命期。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.ItemExpireEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IEntity事件](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | 类型                                            |
| --------- | --------- | --------------------------------------------- |
| 项目        |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | 整数                                            |