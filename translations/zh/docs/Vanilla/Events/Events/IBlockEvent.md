# IBlockEvent

This interface is extended by all Events that can deal with blocks in the world.

## 导入类

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IBlockEvent;`

## Extending IEventPositionable

This interface extends [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), which means that all functionality that IEventPositionable offers is also present in IBlockEvent

## ZenGetters

| 名称         | 类型                                          |
| ---------- | ------------------------------------------- |
| world      | [IWorld](/Vanilla/World/IWorld/)            |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| block      | [IBlock](/Vanilla/Blocks/IBlock/)           |