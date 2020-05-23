# PlayerInteractBlock

The PlayerInteractBlock Event is fired whenever a player right clicks a block.  
It can be canceled to prevent any other events from taking place. If the event is canceled, a specific result of success, fail or pass can be provided. By default, the result is pass.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerInteractBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| zengetter            | zengetter            | type                                   |
| -------------------- | -------------------- | -------------------------------------- |
| `hitvector`          |                      | [ivector3d](/vanilla/world/ivector3d/) |
| `useblock`           | `useblock`           | string ("allow" / "deny" / "default")  |
| `useitem`            | `useitem`            | string ("allow" / "deny" / "default")  |
| `cancellationResult` | `cancellationResult` | string ("success" / "pass" / "fail")   |

## ZenMethods

- `event.cancel()` sets the event as cancelled.