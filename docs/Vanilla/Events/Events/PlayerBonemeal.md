# 玩家使用骨粉

玩家使用骨粉事件在玩家对一个方块使用骨粉是触发。

## 事件类
你需要使用以下方式作为函数头以创建此类:  
`crafttweaker.event.PlayerBonemealEvent`  
你当然可以先[导入](/AdvancedFunctions/Import)类然后再使用。

## Event interface extensions
PlayerBonemeal Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)
- [IProcessableEvent](IProcessableEvent)
- [IEventPositionable](IEventPositionable)


## ZenGetters
可以从事件中检索以下信息:

| ZenGetter   | Return Type                                |
|-------------|--------------------------------------------|
| `canceled`  | boolean                                    |
| `processed` | boolean                                    |
| `x`         | int                                        |
| `y`         | int                                        |
| `z`         | int                                        |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)        |
| `world`     | [IWorld](/Vanilla/World/IWorld)            |
| `block`     | [IBlock](/Vanilla/Blocks/IBlock)           |
| `blockState`| [IBlockState](/Vanilla/Blocks/IBlockState) |
| `blockPos`  | [IBlockPos](/Vanilla/World/IBlockPos)      |
| `dimension` | int                                        |
| `item`      | [IItemStack](/Vanilla/Items/IItemStack)    |

## ZenMethods

- `event.cancel()` 将事件设置为取消。
- `event.process()` 将事件设置为处理。
