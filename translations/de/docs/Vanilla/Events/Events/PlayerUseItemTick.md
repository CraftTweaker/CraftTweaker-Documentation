# PlayerUseItemTick

The PlayerUseItemTick Event is fired each tick a player consistently uses an item.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemTick`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerUseItemTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter  | Rückgabetyp                              |
| ---------- | ---------------------------------------- |
| `canceled` | boolean                                  |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `item`     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `duration` | int                                      |

## ZenMethods

- `event.cancel()` sets the event as cancelled