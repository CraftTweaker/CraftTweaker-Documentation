# PlayerInteractBlock

The PlayerInteractBlock Event is fired whenever a player right clicks a block.  
It can be canceled to prevent any other events from taking place.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerInteractBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter   | ZenGetter  | Type                                   |
| ----------- | ---------- | -------------------------------------- |
| `hitVector` |            | [IVector3d](/Vanilla/World/IVector3d/) |
| `useBlock`  | `useBlock` | string ("ALLOW" / "DENY" / "DEFAULT")  |
| `useItem`   | `useItem`  | string ("ALLOW" / "DENY" / "DEFAULT")  |

## ZenMethods

- `event.cancel()` sets the event as cancelled.