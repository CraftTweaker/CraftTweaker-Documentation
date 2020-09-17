# 严格的Hit事件

每当玩家攻击另一个生物时，挑战命中事件就会被射击。 它有一个 **结果** 来决定是否发生默认的 crit 行为：

- **允许**: 攻击被迫处于危急状态
- **拒绝**: 攻击被阻止为危急状态
- **默认**: 攻击使用默认的原版行为来确定它是否是裂缝。

您也可以调整关键命中的损坏修饰符。

## 注

`event.oldDamageModifier` 包含事件的原始损害修饰符， `事件。 sVanillaCrit` 是一个判断这是否实际上已经是关键命中的布尔值。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CriticalHitEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
严峻的事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
以下信息可以从事件中检索：

| ZenGetter           | ZenSetter | 返回值类型                                 |
| ------------------- | --------- | ------------------------------------- |
| `target`            |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `oldDamageModifier` |           | 浮点数                                   |
| `修饰符`               | `修饰符`     | float                                 |
| `isVanillaCrit`     |           | boolean                               |

## ZenMethods

- `event.deny()` 设置结果为拒绝.
- `event.allow()` 设置结果为允许。
- `event.default()` 设置结果为默认值。
