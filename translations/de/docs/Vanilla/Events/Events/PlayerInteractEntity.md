# PlayerInteractEntity

The PlayerInteractEntity Event is fired whenever a player interacts with an Entity.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerInteractEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                           |
| ---------- | ------------------------------------- |
| `canceled` | boolean                               |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`   | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.