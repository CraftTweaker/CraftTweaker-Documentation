# Respawn du joueur

L'Evénement de Réapparition du Joueur est lancé chaque fois qu'un joueur réapparaît.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerRespawnEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerRespawn implémentent les interfaces suivantes et sont en mesure d'appeler toutes leurs méthodes/getters/setters aussi:

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter        | Type de retour                                                 |
| ---------------- | -------------------------------------------------------------- |
| `Joueur`         | [IPlayer](/Vanilla/Players/IPlayer/)                           |
| `isEndConquered` | bool (indique si la réapparition est à cause du portail final) |