# PlayerInteractEntity

The PlayerInteractEntity Event is fired whenever a player interacts with an Entity. It can be canceled to prevent the interaction from taking place. Si l'événement est annulé, un résultat spécifique de succès, d'échec ou de passe peut être fourni. Par défaut, le résultat est passé.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerInteractEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

The following information can be retrieved from the event:

| ZenGetter                  | ZenSetters                 | Return Type                           |
| -------------------------- | -------------------------- | ------------------------------------- |
| `player`                   |                            | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`                   |                            | [IEntity](/Vanilla/Entities/IEntity/) |
| `Résultat de l'annulation` | `Résultat de l'annulation` | chaîne ("success" / "pass" / "fail")  |

## ZenMethods

- `event.cancel()` sets the event as cancelled.