# Ramassage des objets du joueur

L'événement de collecte d'objets de joueur est lancé après qu'un joueur a interagi avec un objet d'entité et qu'un objet ou un montant d'objet a été ramassé. Cet événement se déroule après que [PlayerPickupItem](/Vanilla/Events/Events/PlayerPickupItem/) a été déclenché.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerItemPickupEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements PlayerItemPickup implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter          | Type de retour                                |
| ------------------ | --------------------------------------------- |
| `Copie de pile`    | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `Entité originale` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Notes

`stackCopy` est une copie de l'élément contenu dans l'élément original de l'entité, représentant ce qui a été ramassé et placé dans l'inventaire du joueur. `originalEntity` est l'entité d'objet avec n'importe quelle quantité restante de la pile d'objets (si le joueur n'a pas ramassé le montant plein).
