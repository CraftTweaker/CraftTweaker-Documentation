# PlayerPickupXp

The PlayerPickupXp Event is fired whenever a player picks up experience orbs.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupXpEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                            |
|-------------|----------------------------------------|
| `canceled`  | boolean                                |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)    |
| `entity`    | [IEntityXp](/Vanilla/Entity/IEntityXp) |
| `xp`        | float                                  |

## ZenMethods

- `event.cancel()` sets the event as cancelled.