# ILivingEvent

This interface is extended by all Events that can have a central living entity.

## Importing the class

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ILivingEvent;`

## Extending IEntityEvent

This interface extends [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), which means that all functionality that IEntityEvent offers is also present in ILivingEvent

## ZenGetters

| name             | type                                                      |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |