# 玩家使用锄头（PlayerUseHoe）

玩家使用锄头事件在玩家使用他的锄头时触发……你应该知道我在说什么。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerUseHoeEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
玩家使用锄头事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)
- [IProcessableEvent](IProcessableEvent)
- [IEventPositionable](IEventPositionable)


## ZenGetters
从事件中可以获取如下信息：

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

- `event.cancel()` 设置事件为可取消的。
- `event.process()` 设置事件为可处理的。
