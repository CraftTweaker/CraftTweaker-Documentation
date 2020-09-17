# 玩家FillBucket

当玩家填充桶时，玩家将被发射。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerFillBucketEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerFillBucket 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                              |
| --------- | -------------------------------------------------- |
| `已取消`     | boolean                                            |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `结果`      | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `清空`      | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `x`       | 整数                                                 |
| `年`       | 整数                                                 |
| `z`       | 整数                                                 |
| `世界`      | [IWorld](/Vanilla/World/IWorld/)                   |
| `封禁状态`    | [IBlockState](/Vanilla/Blocks/IBlockState/)        |
| `封禁`      | [IBlock](/Vanilla/Blocks/IBlock/)                  |
| `尺寸`      | 整数                                                 |
| `射线跟踪结果`  | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |

## ZenMethods

- `event.cancel()` 将事件设置为取消。

## 设置

- `event.result = <minecraft:ender_pearl>` 这也将处理该事件！