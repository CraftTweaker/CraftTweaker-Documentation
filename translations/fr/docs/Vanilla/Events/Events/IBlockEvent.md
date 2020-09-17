# Évènement IBlock

Cette interface est étendue par tous les événements qui peuvent traiter avec des blocs dans le monde.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IBlockEvent ;`

## Étendre IEventPositionable

Cette interface étend [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), ce qui signifie que toutes les fonctionnalités que IEventPositionable offre sont également présentes dans IBlockEvent

## ZenGetters

| Nom        | Type de type                                     |
| ---------- | ------------------------------------------------ |
| monde      | [IWorld](/Vanilla/World/IWorld/)                 |
| blockState | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| Bloquer    | [Verrouillage](/Vanilla/Blocks/IBlock/)          |