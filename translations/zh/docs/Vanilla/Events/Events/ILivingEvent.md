# ILivingEvent

This interface is extended by all Events that can have a central living entity.

## 导入相关包

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ILivingEvent;`

## Extending IEntityEvent

This interface extends [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), which means that all functionality that IEntityEvent offers is also present in ILivingEvent

## ZenGetters

| name             | 类型                                                        |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |