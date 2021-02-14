# PlayerLeftClickBlock

The PlayerLeftClickBlock Event is fired whenever a player left clicks a block.  
It can be canceled to prevent any other events from taking place. If the player holds down the left click, the event will fire again even if it has been canceled. Canceling this event will prevent the left click from being registered, preventing block breaking (although not in creative mode). If the event is canceled, a specific result of success, fail or pass can be provided. By default, the result is pass.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerLeftClickBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter            | type                                   |
| -------------------- | -------------------- | -------------------------------------- |
| `hitvector`          |                      | [IVector3d](/Vanilla/World/IVector3d/) |
| `useblock`           | `useblock`           | string ("allow" / "deny" / "default")  |
| `useitem`            | `useitem`            | string ("allow" / "deny" / "default")  |
| `cancellationResult` | `cancellationResult` | string ("success" / "pass" / "fail")   |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
