# IExplosionEvent

This interface is extended by all explosion events. That means you can use the getters below to access the position details.

## Diese Klasse importieren
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetter

| name     | type                                   |
| -------- | -------------------------------------- |
| world    | [IWorld](/Vanilla/World/IWorld/)       |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | double                                 |
| y        | double                                 |
| z        | double                                 |
