# 呼叫级别

每当一个有生命实体的生物被杀以便计算抢劫程度，就会发生这种事件。 值可以增加或减少或保持不变。 该值可能已经被其他事件修改，但原始值未包括在内。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LootingLevelEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
Lootinglevel Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                              |
| --------- | --------- | ----------------------------------------------- |
| `抢掠级别`    | `抢掠级别`    | 整数                                              |
| `破坏源`     |           | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
