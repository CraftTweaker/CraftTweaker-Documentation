# IBlockEvent

This interface is extended by all Events that can have a central living entity.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IBlockEvent;`

## Extending IEventPositionable
This interface extends [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), which means that all functionality that IEventPositionable offers is also present in IBlockEvent

## ZenGetters

| name             | type                                                     |
|------------------|----------------------------------------------------------|
| world            | [IWorld](/Vanilla/World/IWorld/)                          |
| blockState       | [IBlockState](/Vanilla/Blocks/IBlockState/)               |
| block            | [IBlock](/Vanilla/Blocks/IBlock/)                         |