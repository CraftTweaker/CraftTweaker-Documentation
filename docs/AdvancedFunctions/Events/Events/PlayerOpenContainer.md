# PlayerOpenContainer

The PlayerOpenContainer Event is fired whenever a player opens a container.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerOpenContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                                 |
|-------------|---------------------------------------------|
| `canceled`  | boolean                                     |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)         |
| `container` | [IContainer](/Vanilla/Container/IContainer) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.