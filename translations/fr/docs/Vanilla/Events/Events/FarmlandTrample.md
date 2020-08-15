# format@@0 FarmlandTrampleEvent

L'événement FarmlandTrample est tiré chaque fois qu'une terre agricole est sur le point d'être piétinée. L'annulation de l'événement empêchera le bloc d'être piétiné.

## Notes

`event.fallDistance` contient la distance tombée avant de toucher les terres agricoles.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. armlandTrampleEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements FarmlandTrample implémentent les interfaces suivantes et sont capables d'appeler toutes leurs méthodes/getters/setters aussi:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Évènement IBlock](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter             | ZenSetter | Type de texte                         |
| --------------------- | --------- | ------------------------------------- |
| `Entité`              |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `Distance de secours` |           | flottant                              |
