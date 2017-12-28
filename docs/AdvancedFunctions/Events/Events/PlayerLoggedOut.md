# PlayerLoggedOut

The PlayerLoggedOut Event is fired whenever a player logs out.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLoggedOutEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                      |
|-----------|----------------------------------|
| `player`  | [IPlayer](/Vanilla/Game/IPlayer) |