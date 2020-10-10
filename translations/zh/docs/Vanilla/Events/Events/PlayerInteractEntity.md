# PlayerInteractEntity

The PlayerInteractEntity Event is fired whenever a player interacts with an Entity. It can be canceled to prevent the interaction from taking place. 如果事件被取消，则可以提供成功、失败或通过的特定结果。 默认情况下，结果是通过的。

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerInteractEntity Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [PlayerInteract](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSetters

The following information can be retrieved from the event:

| ZenGetter | ZenSetters | 返回值类型                                 |
| --------- | ---------- | ------------------------------------- |
| `player`  |            | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`  |            | [IEntity](/Vanilla/Entities/IEntity/) |
| `取消结果`    | `取消结果`     | 字符串 ("success" / "pass" / "fail")     |

## ZenMethods

- `event.cancel()` sets the event as cancelled.