# L'élément a expiré

L'Evénement d'Expire des Objets est lancé à chaque fois qu'un Objet expire (atteint sa durée de vie de macimum).  
Il peut être annulé pour empêcher l'élément d'être signalé comme mort.  
Si annulé, il ajoutera `extralife` à la durée de vie de l'élément.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. temExpireEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IEntity](/Vanilla/Events/Events/IEntityEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | Type de texte                                 |
| --------- | --------- | --------------------------------------------- |
| Élément   |           | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| extraLife | extraLife | Indice                                        |