# 玩家盛装桶（PlayerFillBucket）

玩家盛装桶事件在玩家盛装桶的时候触发。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：  
`crafttweaker.event.PlayerFillBucketEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。


## 事件接口拓展
玩家盛装桶事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)
- [IProcessableEvent](IProcessableEvent)
- [IEventPositionable](IEventPositionable)

## ZenGetters
从事件中可以获取如下信息：

| ZenGetter        | Return Type                                         |
|------------------|-----------------------------------------------------|
| `canceled`       | boolean                                             |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer)                 |
| `result`         | [IItemStack](/Vanilla/Items/IItemStack)             |
| `emptyBucket`    | [IItemStack](/Vanilla/Items/IItemStack)             |
| `x`              | int                                                 |
| `y`              | int                                                 |
| `z`              | int                                                 |
| `world`          | [IWorld](/Vanilla/World/IWorld)                     |
| `blockState`     | [IBlockState](/Vanilla/Blocks/IBlockState)          |
| `block`          | [IBlock](/Vanilla/Blocks/IBlock)                    |
| `dimension`      | int                                                 |
| `rayTraceResult` | [IRayTraceResult](/Vanilla/World/IRayTraceResult)   |

## ZenMethods

- `event.cancel()` 设置事件为可取消的

## Setters
- `event.result = <minecraft:ender_pearl>` 这也可以处理事件！
