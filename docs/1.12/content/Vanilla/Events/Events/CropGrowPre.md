# CropGrowPreEvent

The CropGrowPre Event is fired when crops attempt to grow. It has a **result** which determines whether the default behaviour occurs or not:

- **allow**: the crop is forced to grow.
- **deny**: the crop is prevented from growing.
- **default**: the attack uses default Vanilla behaviour.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPreEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
CropGrowPost Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter            | ZenSetter     | Type                                                               |
|----------------------|---------------|--------------------------------------------------------------------|
| `originalBlockState` |               | [IBlockState](/Vanilla/Blocks/IBlockState/)                        |
| `originalBlock`      |               | [IBlock](/Vanilla/Blocks/IBlock/)                                  |


## ZenGetters/ZenSetters/ZenMethodes from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `result`        |                 | string with value of `default`, `deny` or `allow` |


ZenMethodes
- `event.deny()` Method, sets the event's result to `deny`
- `event.allow()` Method, sets the event's result to `allow`
- `event.default()` Method, sets the event's result to `default`


## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |


