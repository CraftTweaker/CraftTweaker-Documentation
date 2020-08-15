# IEventPositionable

This interface is extended by all events whose position matters.  
That means you can use the getters below to access the position details.

## Importation de la classe

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IEventPositionable;`

## ZenGetters

| Nom      | Type de type                            |
| -------- | --------------------------------------- |
| position | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| x        | Indice                                  |
| y        | Indice                                  |
| z        | Indice                                  |