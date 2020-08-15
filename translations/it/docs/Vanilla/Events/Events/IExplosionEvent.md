# IExplosionEvent

This interface is extended by all explosion events. That means you can use the getters below to access the position details.

## Importare la classe
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| nome     | tipo                                   |
| -------- | -------------------------------------- |
| world    | [IWorld](/Vanilla/World/IWorld/)       |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | doppia                                 |
| y        | doppia                                 |
| z        | doppia                                 |
