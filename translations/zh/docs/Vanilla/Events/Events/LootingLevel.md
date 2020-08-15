# LootingLevel

This event is fired whenever a Living Entity creature is killed in order to calculate the looting level. The value can be increased or decreased or left as-is. The value may have already been modified by other events, but the original value is not included.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LootingLevelEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
LootingLevel Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                              |
| --------- | --------- | ----------------------------------------------- |
| `抢掠级别`    | `抢掠级别`    | 整数                                              |
| `破坏源`     |           | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
