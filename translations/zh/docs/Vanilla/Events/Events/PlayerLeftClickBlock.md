# PlayerLeftClickBlock

The PlayerLeftClickBlock Event is fired whenever a player left clicks a block.  
It can be canceled to prevent any other events from taking place. If the player holds down the left click, the event will fire again even if it has been canceled. Canceling this event will prevent the left click from being registered, preventing block breaking (although not in creative mode). 如果事件被取消，则可以提供成功、失败或通过的特定结果。 默认情况下，结果是通过的。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerLeftClickBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [玩家交互功能](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSettters
以下信息可以从事件中检索：

| ZenGetter   | ZenSetter | 类型                                     |
| ----------- | --------- | -------------------------------------- |
| `hitvector` |           | [ivector3d](/vanilla/world/ivector3d/) |
| `使用块`       | `使用块`     | 字符串 ("allow" / "deny" / "default")     |
| `useitem`   | `useitem` | 字符串 ("allow" / "deny" / "default")     |
| `取消结果`      | `取消结果`    | 字符串 ("success" / "pass" / "fail")      |

## ZenMethods

- `event.cancel()` 将事件设置为取消。
