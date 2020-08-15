# IPotionBrewEvent

This event is extended by all events involving the brewing stand, although not the player-based function for extracting items from the brewing stand.

## 导入类
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPotionBrewEvent;`

## 他们能够做些什么？

| ZenGetter | ZenSetter | 类型 |
| --------- | --------- | -- |
| `length`  |           | 整数 |

## 可用方法

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Returns the IItemStack contained in the list of items at the specified array. Will return an empty IItemStack if the specified index is greater than `length`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Replaces the itemstack at the specified index with the specified item. If th index is greater than the length of the item array, nothing will happen.
