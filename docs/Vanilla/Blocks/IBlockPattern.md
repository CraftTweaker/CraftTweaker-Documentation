# 方块模式（IBlockPattern）

方块模式是一个接口，这个接口能够集合多种方块为一个对象。  
类似于 [IIngredient](/Vanilla/Variable_Types/IIngredient) 接口和 [IItemStacks](/Vanilla/Items/IItemStack) 对象的关系。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。   
`import crafttweaker.block.IBlockPattern;`


## 调用方块模式（IBlockPattern）对象

实际上，你每次调用[方块](IBlock)对象的时候，你就调用了方块模式对象。   
不过某些情况下，你可能需要明确的返回一个方块模式对象。

* OR two [方块](IBlock)对象。

## ZenGetters

|  ZenGetter  |            介绍            |        返回类型        |
| :---------: | :------------------------: | :--------------------: |
|   blocks    | 这个对象的所有可能方块列表 | List<[IBlock](IBlock)> |
| displayName | 返回符合条件方块的显示名称 |         String         |

## OR

You can OR two IBlockPattern Objects using the OR `|` Operator

## Matching
You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.