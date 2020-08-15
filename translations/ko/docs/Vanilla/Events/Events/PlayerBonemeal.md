# PlayerBonemeal

The PlayerBonemeal Event is fired whenever a player uses bonemeal on a block.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBonemealEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerBonemeal Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter    | 반환 타입                                       |
| ------------ | ------------------------------------------- |
| `canceled`   | boolean                                     |
| `processed`  | boolean                                     |
| `x`          | int                                         |
| `y`          | int                                         |
| `z`          | int                                         |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `world`      | [IWorld](/Vanilla/World/IWorld/)            |
| `block`      | [IBlock](/Vanilla/Blocks/IBlock/)           |
| `blockState` | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `blockPos`   | [IBlockPos](/Vanilla/World/IBlockPos/)      |
| `dimension`  | int                                         |
| `item`       | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethods

- `event.cancel()` sets the event as cancelled
- `event.process()` sets the event as processed