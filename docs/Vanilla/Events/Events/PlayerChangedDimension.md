# PlayerChangedDimension

The PlayerChangedDimension Event is fired whenever a [player's](/Vanilla/Players/IPlayer) [dimension/world](/Vanilla/World/IWorld) changes, for example upon entering/leaving the nether.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerChangedDimensionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                             |
|-------------|-----------------------------------------|
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)     |
| `from`      | int                                     |
| `fromWorld` | [IWorld](/Vanilla/World/IWorld)         |
| `to`        | int                                     |
| `toWorld`   | [IWorld](/Vanilla/World/IWorld)         |