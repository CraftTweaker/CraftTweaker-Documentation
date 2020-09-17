# 末影传送器

EnderTeleport 活动每当一个末影人或潜影人传送时都会被发射。  
每当玩家使用末影珍珠传送时，它也会遭到射击(可能还有其它模组也会触发此事件)

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnderTeleportEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

LivingEntityUseItems 事件实现了以下接口，并且能够同时调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型  |
| --------- | --------- | --- |
| `targetX` | `targetX` | 双精度 |
| `targetY` | `targetY` | 双精度 |
| `目标Z`     | `目标Z`     | 双精度 |
| `攻击伤害`    | `攻击伤害`    | 浮点数 |