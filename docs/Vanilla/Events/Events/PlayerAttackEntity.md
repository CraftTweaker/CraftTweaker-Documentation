# PlayerAttackEntity

The PlayerAttackEntity Event is fired whenever a player attacks an Entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAttackEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## Event interface extensions
PlayerAttackEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter  | Return Type                          |
|------------|--------------------------------------|
| `canceled` | boolean                              |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer)  |
| `entity`   | [IEntity](/Vanilla/Entities/IEntity) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.