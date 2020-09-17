# LivingExperienceDrop

当一个实体去世并掉落体验时，就会触发这个事件，允许修改体验数量。 Alternately, the event can be **canceled** to prevent experience from being dropped.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingExperienceDropEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
LivingExperienceDrop Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter            | ZenSetter | 类型                                   |
| -------------------- | --------- | ------------------------------------ |
| `播放器`                |           | [IPlayer](/Vanilla/Players/IPlayer/) |
| `丢弃的体验`              | `丢弃的体验`   | int                                  |
| `originalExperience` |           | 整数                                   |

## 注

`原始经验` 包含原始的原版体验量。 触发此事件时 `已丢失经验` 可能已经被修改。
