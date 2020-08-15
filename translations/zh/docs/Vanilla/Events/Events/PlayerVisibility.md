# PlayerVisibility

This event is fired to determine the visibility of a player, i.e., whether or not they are close enough to be noticed by an attacker. The result of this event is used to calculate (with modifiers from Vanilla Minecraft for sneaking, etc) the range a player can get to a creature before that creature sees them.

While this can be used to increase the visibility range (if it were decreased by Minecraft or another mod), it cannot be increased above its maximum value (the standard target distance).

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerVisibilityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerVisibilityEvent Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter    | ZenSetter          | 类型        |
| ------------ | ------------------ | --------- |
| `visibility` |                    | 双精度       |
|              | `modifyVisibility` | See note. |

## Note

This value cannot be directly set. Calling `modifyVisibility` with a double value will replace the modifier with the result of `modifiy * double value`.
