# format@@0 PlayerAttackEntity

L'événement PlayerAttackEntity est lancé chaque fois qu'un joueur attaque un titre.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerAttackEntityEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerAttackEntity implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                        |
| --------- | ------------------------------------- |
| `annulé`  | boolean                               |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `Entité`  | [IEntity](/Vanilla/Entities/IEntity/) |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.