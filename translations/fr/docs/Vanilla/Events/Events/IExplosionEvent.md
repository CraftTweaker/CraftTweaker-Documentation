# format@@0 IExplosionEvent

Cette interface est étendue par tous les événements d'explosion. Cela signifie que vous pouvez utiliser les getters ci-dessous pour accéder aux détails de la position.

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IExplosionEvent ;`

## ZenGetters

| Nom      | Type de type                            |
| -------- | --------------------------------------- |
| monde    | [IWorld](/Vanilla/World/IWorld/)        |
| position | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| x        | double                                  |
| y        | double                                  |
| Z        | double                                  |
