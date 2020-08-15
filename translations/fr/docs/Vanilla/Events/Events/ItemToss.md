# format@@0 ItemToss

L'Evénement ItemToss est lancé chaque fois qu'un objet est jeté dans l'inventaire d'un joueur.  
L'annulation de cet événement empêchera l'élément d'entrer dans le monde, provoquant ainsi la suppression de l'objet.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. temTossEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IEntity](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | Type de texte                                 |
| --------- | --------------------------------------------- |
| Élément   | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| Joueur    | [IPlayer](/Vanilla/Players/IPlayer/)          |