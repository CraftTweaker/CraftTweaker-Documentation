# format@@0 PlayerSetSpawn

L'Evénement Apparition de Joueur est lancé chaque fois que le lieu d'apparition d'un joueur change.  
Il peut être annulé pour empêcher le traitement ultérieur.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerSetSpawnEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerSetSpawn implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                    | Type de retour                          |
| ---------------------------- | --------------------------------------- |
| `Joueur`                     | [IPlayer](/Vanilla/Players/IPlayer/)    |
| `isForcé`                    | booléen                                 |
| `nouveau point d'apparition` | [Pos IBlock](/Vanilla/World/IBlockPos/) |