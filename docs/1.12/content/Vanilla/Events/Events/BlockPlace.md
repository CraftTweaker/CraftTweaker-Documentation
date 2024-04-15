
# BlockPlaceEvent

The BlockBreak Event is fired whenever a block is being placed.
You can cancel the event to prevent the block from being placed.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
BlockPlace Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `player`         |               | [IPlayer](/Vanilla/Players/IPlayer/)                               |
| `current`        |               | [IBlockState](/Vanilla/Blocks/IBlockState/)                        |
| `placedAgainst`  |               | [IBlockState](/Vanilla/Blocks/IBlockState/)                        |
| `hand`           |               | string                                                             |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `canceled`      | `canceled`      | bool                                              |
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening


## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |
