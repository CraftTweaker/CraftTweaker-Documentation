# format@@0 PlayerSleepInBed

L'événement PlayerSleepInBed est lancé chaque fois qu'un joueur dort.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerSleepInBedEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerSleepInBed implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                       |
| --------- | ------------------------------------ |
| `x`       | Indice                               |
| `y`       | Indice                               |
| `Z`       | Indice                               |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/) |