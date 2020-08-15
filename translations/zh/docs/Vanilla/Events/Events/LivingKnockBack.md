# LivingKnockBack

This event is fired whenever an entity is knocked back. The event is **cancelable** and doing so will prevent the entity from being knocked back. Alternately, the strength of the knockback in addition to the X and Z ratios can be adjusted.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingKnockBackEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
LivingKnockBack Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter          | ZenSetter  | 类型                                    |
| ------------------ | ---------- | ------------------------------------- |
| `attacker`         | `attacker` | [IEntity](/Vanilla/Entities/IEntity/) |
| `originalAttacker` |            | [IEntity](/Vanilla/Entities/IEntity/) |
| `strength`         | `strength` | float                                 |
| `originalStrength` |            | 浮点数                                   |
| `ratioX`           | `ratioX`   | 双精度                                   |
| `ratioZ`           | `ratioZ`   | 双精度                                   |
| `originalRatioX`   |            | 双精度                                   |
| `originalRatioZ`   |            | 双精度                                   |

## 注

When the event arrives, it's possible that the `attacker`, `strength`, or the various `ratio`s have already been modified. You can find these values in the `original*` variables.
