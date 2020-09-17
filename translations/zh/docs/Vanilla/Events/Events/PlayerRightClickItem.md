# 玩家右键点击项目

播放器右键ClickItem 事件在某个项目的功能被触发前不久被触发。 如果玩家正在瞄准方块或实体，则不会开火。 它可以被取消，以防止发生任何其他事件。 如果事件被取消，可以提供允许、拒绝或传递的特定结果。 默认情况下，结果是通过的。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRightClickItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerRightClickItems 事件实现了以下接口，并且能够同时调用他们的所有方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [玩家交互功能](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSettters
在这次活动中，可以调整以下信息。

| ZenGetter | ZenSetter | 类型                                 |
| --------- | --------- | ---------------------------------- |
| `取消结果`    | `取消结果`    | 字符串 ("allow" / "deny" / "default") |
