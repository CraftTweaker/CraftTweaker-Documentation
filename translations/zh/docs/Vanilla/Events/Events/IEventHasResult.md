# IEventHasResult

此接口由所有具有事件使用的结果的事件扩展。 一个事件的结果可以是三个值之一：

- 允许
- 拒绝
- 默认

它们的含义取决于背景。 一般情况下，拒绝某一事件不会发生与事件有关的具体行动(即使没有保证发生)。 同样，允许活动将迫使行为发生(即使没有得到保证)。 默认只会导致事件继续其正常逻辑。 并非所有事件都使用每个结果。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftweaper.eventIEventHasResult；`

## 他们能够做些什么？

- `event.result` Getter, 返回一个字符串值 `默认`, `down` 或 `允许`
- `event.deny()` 方法, 将事件的结果设置为 `否定`
- `event.allow()` Method, 设置事件的结果为 `允许`
- `event.default()` 方法, 将事件的结果设置为 `默认`
