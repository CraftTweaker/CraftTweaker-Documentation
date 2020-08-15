# PlayerInteractEntity

每当玩家与某个实体发生互动时都会触发玩家交互实体事件。 为了防止互动发生，可以取消它。 如果事件被取消，则可以提供成功、失败或通过的特定结果。 默认情况下，结果是通过的。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerInteractEntityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerInteractEnty 事件实现以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [玩家交互功能](/Vanilla/Events/Events/PlayerInteract/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters & ZenSettters

以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 返回值类型                                 |
| --------- | --------- | ------------------------------------- |
| `播放器`     |           | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `target`  |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `取消结果`    | `取消结果`    | 字符串 ("success" / "pass" / "fail")     |

## ZenMethods

- `event.cancel()` 将事件设置为取消。