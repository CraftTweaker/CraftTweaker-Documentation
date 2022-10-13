# IEventPositionable

This interface is extended by all events whose position matters.  
That means you can use the getters below to access the position details.


## Importare la Classe
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IEventPositionable;`


## ZenGetters

| nome     | type                                   |
| -------- | -------------------------------------- |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | int                                    |
| y        | int                                    |
| z        | int                                    |