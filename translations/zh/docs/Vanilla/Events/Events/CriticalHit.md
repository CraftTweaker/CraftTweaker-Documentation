# CriticalHitEvent

The CriticalHit Event is fired whenever a player attacks another creature. It has a **result** which determines whether or not default crit behaviour occurs:

- **allow**: the attack is forced to be a critical
- **deny**: the attack is prevented from being a critical
- **default**: the attack uses default Vanilla behaviour to determine if it's a crit.

You can also adjust the damage modifier for the critical hit.

## 注

`event.oldDamageModifier` contains the original damage modifier of the event, while `event.isVanillaCrit` is a boolean value that determines whether or not this is actually already a critical hit.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CriticalHitEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
CriticalHit Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
以下信息可以从事件中检索：

| ZenGetter           | ZenSetter        | 返回值类型                                 |
| ------------------- | ---------------- | ------------------------------------- |
| `target`            |                  | [IEntity](/Vanilla/Entities/IEntity/) |
| `oldDamageModifier` |                  | 浮点数                                   |
| `damageModifier`    | `damageModifier` | float                                 |
| `isVanillaCrit`     |                  | boolean                               |

## ZenMethods

- `event.deny()` sets the result to deny.
- `event.allow()` sets the result to allow.
- `event.default()` sets the result to default.
