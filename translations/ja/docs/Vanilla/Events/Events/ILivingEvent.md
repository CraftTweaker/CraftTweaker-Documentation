# ILivingEvent

This interface is extended by all Events that can have a central living entity.

## クラスのインポート

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ILivingEvent;`

## Extending IEntityEvent

This interface extends [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), which means that all functionality that IEntityEvent offers is also present in ILivingEvent

## ZenGetters

| 名前               | タイプ                                                       |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |