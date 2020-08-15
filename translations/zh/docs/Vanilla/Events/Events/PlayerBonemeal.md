# PlayerBonemeal

每当玩家在一个方块上使用真正的公墓时，玩家会被发射。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBonemealEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerBonemeal 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter  | 返回值类型                                       |
| ---------- | ------------------------------------------- |
| `已取消`      | boolean                                     |
| `已处理`      | boolean                                     |
| `x`        | 整数                                          |
| `年`        | 整数                                          |
| `z`        | 整数                                          |
| `播放器`      | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `世界`       | [IWorld](/Vanilla/World/IWorld/)            |
| `封禁`       | [IBlock](/Vanilla/Blocks/IBlock/)           |
| `封禁状态`     | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `blockPos` | [IBlockPos](/Vanilla/World/IBlockPos/)      |
| `尺寸`       | 整数                                          |
| `项目`       | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethods

- `event.cancel()` 将事件设置为取消
- `event.process()` 将事件设置为已处理