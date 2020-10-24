# 玩家交互块

当玩家右键点击方块时，播放器InteractBlock事件将被触发。  
它可以被取消以防止发生任何其他事件。 如果事件被取消，则可以提供成功、失败或通过的特定结果。 默认情况下，结果是通过的。

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerInterinterBlock事件实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

The following information can be retrieved from the event:

| zengetter   | zensetter | 类型                                     |
| ----------- | --------- | -------------------------------------- |
| `hitvector` |           | [IVector3d](/Vanilla/World/IVector3d/) |
| `使用块`       | `使用块`     | 字符串 ("allow" / "deny" / "default")     |
| `useitem`   | `useitem` | 字符串 ("allow" / "deny" / "default")     |
| `取消结果`      | `取消结果`    | 字符串 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` sets the event as cancelled.