# IBlockPattern

IBlockPattern 接口允许你将几个方块绑定到一个对象。  
这和 [IIngredient](/Vanilla/Variable_Types/IIngredient/) 接口与 [IItemStacks](/Vanilla/Items/IItemStack/) 的关系相似。

## 导入相关包

如果你遇到问题 (例如创建 [数组](/AdvancedFunctions/Arrays_and_Loops/))，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockPattern;`

## 调用 IBlockPattern 对象

技术上，每当你调用 [IBlock](/Vanilla/Blocks/IBlock/) 对象时，你都会调用到 IBlockPattern 对象。  
但也有一些情况会明确地返回 IBlockPattern 对象。

* 对两个 [IBlocks](/Vanilla/Blocks/IBlock/) 执行 OR 运算

## ZenGetters

| ZenGetter   | 功能          | 返回值类型                                   |
| ----------- | ----------- | --------------------------------------- |
| blocks      | 返回所有可能方块的列表 | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | 返回恰当方块的显示名称 | String                                  |

## OR 运算

你可以用 OR 运算符 `|` 对两个 IBlockPattern 对象执行 OR 运算

## 匹配

你可以用 `in` 关键字检查一个 IBlockPattern 对象是否包含另一个。  
例如，你可以检查一个 Block 是否被一个 IBlockPattern 包含。