# PlayerSetSpawn

The PlayerSetSpawn Event is fired whenever a player's spawn location changes.  
It can be canceled to prevent further processing.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSetSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
PlayerSetSpawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](IPlayerEvent)
- [IEventCancelable](IEventCancelable)

## ZenGetters
The following information can be retrieved from the event:

| ZenGetter  | Return Type                           |
|------------|---------------------------------------|
| `player`   | [IPlayer](/Vanilla/Players/IPlayer)   |
| `isForced` | bool                                  |
| `newSpawn` | [IBlockPos](/Vanilla/World/IBlockPos) |