# PlayerSetSpawn

The PlayerSetSpawn Event is fired whenever a player's spawn location changes.  
It can be canceled to prevent further processing.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSetSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerSetSpawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `isForced`      |                 | bool                                  |
| `newSpawn`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/) |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`         |                 | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening


## Extension from extension
The following information can be retrieved/set during the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |
