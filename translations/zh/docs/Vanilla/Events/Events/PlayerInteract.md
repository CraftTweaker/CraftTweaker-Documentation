# 玩家交互功能

每当玩家与方块交互时，玩家交互活动都会被射出。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerInteract 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                |
| --------- | ------------------------------------ |
| `已取消`     | boolean                              |
| `使用项目`    | boolean                              |
| `正在使用块`   | boolean                              |
| `x`       | 整数                                   |
| `年`       | 整数                                   |
| `z`       | 整数                                   |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/) |
| `世界`      | [IWorld](/Vanilla/World/IWorld/)     |
| `封禁`      | [IBlock](/Vanilla/Blocks/IBlock/)    |
| `尺寸`      | 整数                                   |

## ZenMethods

- `event.cancel()` 将事件设置为取消
- `event.useBlock()` 将方块设置为 true
- `event.useItem()` 将项目设置为 true