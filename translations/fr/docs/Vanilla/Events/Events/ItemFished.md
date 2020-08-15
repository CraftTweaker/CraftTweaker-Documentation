# format@@0 ItemFishedEvent

Cet événement est déclenché lorsqu'un joueur est sur le point de pêcher un objet. Annuler l'événement empêchera le joueur de recevoir un objet, mais le bâton subira toujours des dégâts.

## Notes

Des dégâts supplémentaires peuvent être infligés à la tige en définissant `event.additionalDamage`. Une liste de IItemStacks (qui est **non modifiable**) qui vont être pêchés est contenue dans `event.drops`.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. temFishedEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
ItemFished Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter       | ZenSetter                | Type de texte                              |
| --------------- | ------------------------ | ------------------------------------------ |
| `endommagement` |                          | Indice                                     |
|                 | `Dégâts supplémentaires` | Indice                                     |
| `gouttes`       |                          | [IItemStack](/Vanilla/Items/IItemStack/)[] |
