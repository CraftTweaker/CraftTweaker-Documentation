# IExplosionEvent

This interface is extended by all explosion events. That means you can use the getters below to access the position details.

## Importar la clase
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| nombre   | tipo                                   |
| -------- | -------------------------------------- |
| world    | [IWorld](/Vanilla/World/IWorld/)       |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | doble                                  |
| y        | doble                                  |
| z        | doble                                  |
