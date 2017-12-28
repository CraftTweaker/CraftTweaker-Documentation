# PlayerLoggedIn

The PlayerLoggedIn Event is fired whenever a player logs in.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLoggedInEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                      |
|-----------|----------------------------------|
| `player`  | [IPlayer](/Vanilla/Game/IPlayer) |