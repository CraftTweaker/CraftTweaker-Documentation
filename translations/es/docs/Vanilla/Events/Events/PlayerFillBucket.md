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

## ZenGetters

The following information can be retrieved from the event:

| ZenGetter        | Return Type                                        |
| ---------------- | -------------------------------------------------- |
| `canceled`       | boolean                                            |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `result`         | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `emptyBucket`    | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `x`              | int                                                |
| `y`              | int                                                |
| `z`              | int                                                |
| `world`          | [IWorld](/Vanilla/World/IWorld/)                   |
| `blockState`     | [IBlockState](/Vanilla/Blocks/IBlockState/)        |
| `block`          | [IBlock](/Vanilla/Blocks/IBlock/)                  |
| `dimension`      | int                                                |
| `rayTraceResult` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.

## Setters

- `event.result = <minecraft:ender_pearl>` This will also process the event!