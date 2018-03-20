# PlayerUseHoe

The PlayerUseHoe Event is fired whenever a player uses his hoe... If you know what I mean.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseHoeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
PlayerUseHoe Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)
- [IProcessableEvent](IProcessableEvent)
- [IEventPositionable](IEventPositionable)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter    | Return Type                               |
|--------------|-------------------------------------------|
| `canceled`   | boolean                                   |
| `processed`  | boolean                                   |
| `x`          | int                                       |
| `y`          | int                                       |
| `z`          | int                                       |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer)       |
| `world`      | [IWorld](/Vanilla/World/IWorld)           |
| `block`      | [IBlock](/Vanilla/Blocks/IBlock)          |
| `blockState` | [IBlock](/Vanilla/Blocks/IBlockState)     |
| `dimension`  | int                                       |
| `item`       | [IItemStack](/Vanilla/Items/IItemStack)   |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.process()` sets the event as processed