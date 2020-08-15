# format@@0 PlayerPickupXp

L'événement PlayerPickupXp est lancé chaque fois qu'un joueur récupère des orbes d'expérience.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerPickupXpEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerPickupXp implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter  | Type de retour                            |
| ---------- | ----------------------------------------- |
| `annulé`   | boolean                                   |
| `Joueur`   | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `entitéXp` | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`       | flottant                                  |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.