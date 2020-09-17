# IEventPositionnable

Cette interface est étendue par tous les événements dont la position est importante.  
Cela signifie que vous pouvez utiliser les getters ci-dessous pour accéder aux détails de la position.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IEventPositionable;`

## ZenGetters

| Nom      | Type de type                            |
| -------- | --------------------------------------- |
| position | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| x        | Indice                                  |
| y        | Indice                                  |
| Z        | Indice                                  |