# format@@0 PlayerPickupItem

Chaque fois qu'un joueur interagit avec un titane, l'évènement de PickupItem est lancé.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerPickupItemEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerPickupItem implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                                |
| --------- | --------------------------------------------- |
| `Élément` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/)          |