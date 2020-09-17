# Dimension du joueur modifiée

The PlayerChangedDimension Event is fired whenever a [player's](/Vanilla/Players/IPlayer/) [dimension/world](/Vanilla/World/IWorld/) changes, for example upon entering/leaving the nether.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerChangedDimensionEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerChandedDimension implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter         | Type de retour                       |
| ----------------- | ------------------------------------ |
| `Joueur`          | [IPlayer](/Vanilla/Players/IPlayer/) |
| `de`              | Indice                               |
| `depuis le monde` | [IWorld](/Vanilla/World/IWorld/)     |
| `à`               | Indice                               |
| `toWorld`         | [IWorld](/Vanilla/World/IWorld/)     |