# EntityStruckByLightning

每当一只闪电火焰即将击中某个实体时，都会发射EntityStruckByLightning事件。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityStruckByLightningEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

LivingEntityUseItems 事件实现了以下接口，并且能够同时调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

以下信息可以在事件中检索/设置：

| ZenGetter | 返回值类型                                 |
| --------- | ------------------------------------- |
| `闪光`      | [IEntity](/Vanilla/Entities/IEntity/) |