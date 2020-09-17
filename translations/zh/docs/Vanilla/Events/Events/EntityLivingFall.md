# EntityLivingFall

每当一个实体被设定下来时，EntityLivingFall事件都会被发射。  
它可以被取消为实体从下退出。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingFallEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | 类型  |
| --------- | --------- | --- |
| disance   | disance   | 浮点数 |
| 伤害加成      | 伤害加成      | 浮点数 |