# Collecte de joueurs

Chaque fois qu'un joueur interagit avec un titane, l'Événement de prise en charge est lancé.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerPickupEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                        |
| --------- | ------------------------------------- |
| `annulé`  | boolean                               |
| `traité`  | boolean                               |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `Entité`  | [IEntity](/Vanilla/Entities/IEntity/) |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.
- `event.process()` définit l'événement tel qu'il a été traité.