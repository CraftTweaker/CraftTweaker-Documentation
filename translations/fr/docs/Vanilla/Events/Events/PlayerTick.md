# Tick du joueur

Le PlayerTick Event est lancé chaque tick pour chaque joueur.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerTickEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerTick implémentent les interfaces suivantes et sont en mesure d'appeler toutes leurs méthodes/getters/setters aussi:

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                       |
| --------- | ------------------------------------ |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `phase`   | chaîne de caractères                 |