# PlayerPickupEntity

The PlayerPickupEntity Event is fired whenever a player interacts with an Entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                         |
|-------------|-------------------------------------|
| `canceled`  | boolean                             |
| `processed` | boolean                             |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer) |
| `entity`    | [IEntity](/Vanilla/Entity/IEntity)  |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
- `event.process()` sets the event as processed.