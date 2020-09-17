# PlayerInteractEntity

L'événement PlayerInteractEntity est lancé chaque fois qu'un joueur interagit avec un titre. Il peut être annulé pour empêcher l'interaction de se produire. Si l'événement est annulé, un résultat spécifique de succès, d'échec ou de passe peut être fourni. Par défaut, le résultat est passé.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerInteractEntityEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerInteractEntity implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interagir avec le joueur](/Vanilla/Events/Events/PlayerInteract/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                  | ZenSetters                 | Type de retour                        |
| -------------------------- | -------------------------- | ------------------------------------- |
| `Joueur`                   |                            | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`                   |                            | [IEntity](/Vanilla/Entities/IEntity/) |
| `Résultat de l'annulation` | `Résultat de l'annulation` | chaîne ("success" / "pass" / "fail")  |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.