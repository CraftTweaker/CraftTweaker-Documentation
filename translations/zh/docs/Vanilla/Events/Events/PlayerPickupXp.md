# 玩家皮卡普Xp

每当玩家拿起体验轨道时都会触发玩家皮卡普Xp 事件。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupXpEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerPickupXp 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter  | 返回值类型                                     |
| ---------- | ----------------------------------------- |
| `已取消`      | boolean                                   |
| `播放器`      | [IPlayer](/Vanilla/Players/IPlayer/)      |
| `entityXp` | [IEntityXp](/Vanilla/Entities/IEntityXp/) |
| `xp`       | 浮点数                                       |

## ZenMethods

- `event.cancel()` 将事件设置为取消。