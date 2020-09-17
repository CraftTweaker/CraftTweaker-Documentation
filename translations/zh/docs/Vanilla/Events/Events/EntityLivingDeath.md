# EntityLivingDeath

每当实体即将死亡时都会被射杀。  
它可以被取消让实体生存下来。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter | 类型                                              |
| --------- | ----------------------------------------------- |
| 破坏源       | [IDamageSource](/Vanilla/Damage/IDamageSource/) |