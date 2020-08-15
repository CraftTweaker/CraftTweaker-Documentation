# IExplosionEvent

This interface is extended by all explosion events. That means you can use the getters below to access the position details.

## Importowanie klasy
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| Nazwa   | typ                                    |
| ------- | -------------------------------------- |
| świat   | [IWorld](/Vanilla/World/IWorld/)       |
| pozycja | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x       | podwójne                               |
| y       | podwójne                               |
| z       | podwójne                               |
