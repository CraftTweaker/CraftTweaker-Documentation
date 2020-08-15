# IBlockEvent

This interface is extended by all Events that can deal with blocks in the world.

## Importar la clase

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IBlockEvent;`

## Extending IEventPositionable

This interface extends [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), which means that all functionality that IEventPositionable offers is also present in IBlockEvent

## ZenGetters

| nombre     | tipo                                        |
| ---------- | ------------------------------------------- |
| world      | [IWorld](/Vanilla/World/IWorld/)            |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| bloque     | [IBlock](/Vanilla/Blocks/IBlock/)           |