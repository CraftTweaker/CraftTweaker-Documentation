# format@@0 PlayerSmelted

L'Evénement de Fonderie de Joueur est lancé chaque fois qu'un joueur sort quelque chose d'un fourneau.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerSmeltedEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerSmelted implémentent les interfaces suivantes et sont en mesure d'appeler toutes leurs méthodes/getters/setters aussi:

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                           |
| --------- | ---------------------------------------- |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `Sortie`  | [IItemStack](/Vanilla/Items/IItemStack/) |