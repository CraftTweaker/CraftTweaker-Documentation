# 玩家交互块

当玩家右键点击方块时，播放器InteractBlock事件将被触发。  
它可以被取消以防止发生任何其他事件。 如果事件被取消，则可以提供成功、失败或通过的特定结果。 默认情况下，结果是通过的。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerInterinterBlock事件实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [玩家交互功能](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| zengetter   | zengetter | 类型                                     |
| ----------- | --------- | -------------------------------------- |
| `hitvector` |           | [ivector3d](/vanilla/world/ivector3d/) |
| `使用块`       | `使用块`     | 字符串 ("allow" / "deny" / "default")     |
| `useitem`   | `useitem` | 字符串 ("allow" / "deny" / "default")     |
| `取消结果`      | `取消结果`    | 字符串 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` 将事件设置为取消。