# IPotionBrewEvent

这个事件通过涉及酿造台的所有事件延伸，尽管不是从酿造台提取物品的基于玩家的功能。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.event.IPotionBrewEvent；`

## 他们能够做些什么？

| ZenGetter | ZenSetter | 类型 |
| --------- | --------- | -- |
| `长度`      |           | 整数 |

## 可用方法

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

返回指定数组中项目列表中包含的IItemStack。 如果指定的索引大于 `长度` ，将返回一个空的 IItemStack 。

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

在指定的索引处替换项目堆栈。 如果索引大于项目数组的长度，则不会发生任何事情。
