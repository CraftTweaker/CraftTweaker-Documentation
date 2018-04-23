# PlayerTick

The PlayerTick Event is fired each tick for each player.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
PlayerTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](IPlayerEvent)

## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                         |
|-----------|-------------------------------------|
| `player`  | [IPlayer](/Vanilla/Players/IPlayer) |