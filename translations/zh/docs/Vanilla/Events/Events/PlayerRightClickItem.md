# PlayerRightClickItem

The PlayerRightClickItem Event is fired shortly before an item's functionality is fired. It is not fired if the player is targetting a block or entity. It can be canceled to prevent any other events from taking place. If the event is canceled, a specific result of allow, deny, or pass can be provided. 默认情况下，结果是通过的。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRightClickItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerRightClickItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [玩家交互功能](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSettters
The following information can be adjusted in the event.

| ZenGetter | ZenSetter | 类型                                 |
| --------- | --------- | ---------------------------------- |
| `取消结果`    | `取消结果`    | 字符串 ("allow" / "deny" / "default") |
