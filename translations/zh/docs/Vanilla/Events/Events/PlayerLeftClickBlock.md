# PlayerLeftClickBlock

播放器左键点击方块时将触发单击事件。  
它可以被取消以防止发生任何其他事件。 如果玩家按住左键，则事件将再次开火，即使它已被取消。 取消此事件将阻止左键点击进行注册，阻止阻止方块破坏(尽管不是创造性模式)。 如果事件被取消，则可以提供成功、失败或通过的特定结果。 默认情况下，结果是通过的。

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerLeftClickBlock 事件实现了以下接口，同时也可以调用他们的所有方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter   | ZenSetter | 类型                                     |
| ----------- | --------- | -------------------------------------- |
| `hitvector` |           | [IVector3d](/Vanilla/World/IVector3d/) |
| `使用块`       | `使用块`     | 字符串 ("allow" / "deny" / "default")     |
| `useitem`   | `useitem` | 字符串 ("allow" / "deny" / "default")     |
| `取消结果`      | `取消结果`    | 字符串 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
