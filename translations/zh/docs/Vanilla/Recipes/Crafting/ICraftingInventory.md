# ICrafting库存

ICraftingInventory includes all various information on the listing a prodrafting process.

## 导入相关包

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.配方。ICraftingInventory`

## ZenGetters

| ZenGetter | 退货类型                                         | 描述        |
| --------- | -------------------------------------------- | --------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)         | 拥有这个物品的玩家 |
| `大小`      | 整数                                           | 库存大小      |
| `width`   | 整数                                           | 背包宽度      |
| `高度`      | 整数                                           | 物品栏高度     |
| `堆栈计数`    | 整数                                           | 实际填写的堆栈数量 |
| `项目`      | [IItemStack[][]](/Vanilla/Items/IItemStack/) | 制造桌上存在的物品 |
| `条目数组`    | [IItemStack[]](/Vanilla/Items/IItemStack/)   | 制造桌上存在的物品 |

## ZenMethods

以下方法可用：

`inventory.getStack(index)` 返回给定索引的 [IItemStack](/Vanilla/Items/IItemStack/) 如果没有项目，则为空。 索引是一个整数。  
`inventory.setStack(index, item)` 将堆栈设在给定的索引中提供的条目。 索引是一个 int，条目是一个 IItemStack。 如果您想要清除该索引的堆栈，请使用 null

左上角的堆栈是位置 (0, 0), 行和列是英寸。  
`库存。 etStack(row, column)` 返回给定位置的 [IItemStack](/Vanilla/Items/IItemStack/) 如果没有项目存在，则为空  
`inventory.setStack(行, 列, 项目)` 将堆栈设定在给定的位置到提供的项目。 物品是一个 IItemStack。 如果您想要清除堆栈在那个位置，请使用 null