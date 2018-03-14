# PlayerAttackEntity

The PlayerAttackEntity Event is fired whenever a player attacks an Entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAttackEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter  | Return Type                          |
|------------|--------------------------------------|
| `canceled` | boolean                              |
| `player`   | [IPlayer](/Vanilla/Players/IPlayer)  |
| `entity`   | [IEntity](/Vanilla/Entities/IEntity) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.