# format@@0 PlayerInteractBlock

L'événement PlayerInteractBlock est lancé chaque fois qu'un joueur fait un clic droit sur un bloc.  
Il peut être annulé pour empêcher tout autre événement de se produire. Si l'événement est annulé, un résultat spécifique de succès, d'échec ou de passe peut être fourni. Par défaut, le résultat est passé.

## Event Class

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerInteractBlockEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Event interface extensions

Les événements PlayerInteractBlock implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

The following information can be retrieved from the event:

| zengetter                  | zensetter                  | type                                   |
| -------------------------- | -------------------------- | -------------------------------------- |
| `hitvector`                |                            | [IVector3d](/Vanilla/World/IVector3d/) |
| `Bloc d'utilisation`       | `Bloc d'utilisation`       | chaîne ("allow" / "deny" / "default")  |
| `useitem`                  | `useitem`                  | chaîne ("allow" / "deny" / "default")  |
| `Résultat de l'annulation` | `Résultat de l'annulation` | chaîne ("success" / "pass" / "fail")   |

## ZenMethods

- `event.cancel()` sets the event as cancelled.