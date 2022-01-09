# IBlockPattern

An IBlockPattern is an interface that allows for combining several blocks into one object.  
It is comparable to what the [IIngredient](/Vanilla/Variable_Types/IIngredient/) Interface is to [IItemStacks](/Vanilla/Items/IItemStack/).

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockPattern;`


## 调用 IBlockPattern 对象

Technically, each time you call an [IBlock](/Vanilla/Blocks/IBlock/) object, you call an IBlockPattern object.  
But there are cases when you explicitly get an IBlockPattern Object as return.

* 对两个 [IBlocks](/Vanilla/Blocks/IBlock/) 执行 OR 运算

## ZenGetters

| ZenGetter   | 功能          | 返回值类型                                   |
| ----------- | ----------- | --------------------------------------- |
| blocks      | 返回所有可能方块的列表 | List<[IBlock](/Vanilla/Blocks/IBlock/)> |
| displayName | 返回恰当方块的显示名称 | string                                  |

## OR

你可以用 OR 运算符 `|` 对两个 IBlockPattern 对象执行 OR 运算

## 匹配
You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.