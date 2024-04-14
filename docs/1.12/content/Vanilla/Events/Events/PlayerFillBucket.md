# PlayerFillBucket

The PlayerFillBucket Event is fired whenever a player fills a bucket.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerFillBucketEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Event interface extensions
PlayerFillBucket Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
|                 | `result`        | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `emptyBucket`   |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `dimension`     |                 | int                                               |
| `rayTraceResult`|                 | [IRayTraceResult](/Vanilla/World/IRayTraceResult/)|


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `result`        |                 | string with value of `default`, `deny` or `allow` |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.deny()` Method, sets the event's result to `deny`
- `event.allow()` Method, sets the event's result to `allow`
- `event.default()` Method, sets the event's result to `default`
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
 

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |

## Notes
Because this event extends IProcessableEvent, we have the getter `result`,
but this event also has the setter `result`. Dont mix them up!
You can `print(event.result)` and will get the string value from above,
but if you use `event.result = <minecraft:stick>` the player will hold a stick in their hand after finishing the event
and the bucket "vanishes"
