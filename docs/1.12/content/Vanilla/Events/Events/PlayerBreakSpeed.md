# PlayerBreakSpeed

The PlayerBreakSpeed Event is fired whenever a player tries to break a block.  
It can be canceled to stop theplayer from being able to break that block.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBreakSpeedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerBreakSpeed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter     | ZenSetter | Type                                       |
|---------------|-----------|--------------------------------------------|
| blockState    |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| block         |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| originalSpeed |           | float                                      |
| newSpeed      | newSpeed  | float                                      |


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods

- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening
 

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |
