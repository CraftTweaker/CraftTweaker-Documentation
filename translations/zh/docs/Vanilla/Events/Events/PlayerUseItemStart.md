# PlayerUseItemStart

当玩家开始使用某个项目时，玩家开始活动即被开除。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseItemStartEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerUseItemStart 事件实现了以下接口，并且能够调用他们的所有方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                    |
| --------- | ---------------------------------------- |
| `已取消`     | boolean                                  |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `项目`      | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

- `event.cancel()` 将事件设置为取消