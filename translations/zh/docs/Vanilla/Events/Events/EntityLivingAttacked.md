# 实体生活被攻击

实体遭到攻击时会被发射。  
它可以被取消来阻止实体遭受伤害。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingAttackedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter | 类型                                              |
| --------- | ----------------------------------------------- |
| 破坏源       | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| 金额        | 浮点数                                             |