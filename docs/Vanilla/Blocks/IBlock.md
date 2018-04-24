# 方块（IBlock）
一个方块对象往往包含一个 [方块定义](IBlockDefinition)，一个元数据（MetaData），以及一个 TileData。 
这样才能对应游戏中的一个方块。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.block.IBlock;`

## 调用方块对象

有多种方式能够返回一个方块对象：

* 以方块对象方式声明一个 [IItemStack](/Vanilla/Items/IItemStack) 对象（使用 `AS` 关键词来指明对象，或者用 `asBlock()` 方法）
* 在 [IWorld](/Vanilla/World/IWorld) 中直接使用 `getBlock(x,y,z)` 方法。
* 在 ContentTweaker 的 [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState) 中直接使用 `getBlock()` 方法。

## Zengetters

|   Getter   |       返回值        |                       返回类型                       |
| :--------: | :-----------------: | :--------------------------------------------------: |
| definition |   返回方块的定义    | 方块定义对象（[IBlockDefinition](IBlockDefinition)） |
|    meta    |  返回方块的元数据   |                     整型（int）                      |
|    data    | 返回方块的 tileData |             [IData](/Vanilla/Data/IData)             |



# 方块模式（IBlockPattern）

方块对象（IBlocks）继承自 [方块模式](IBlockPattern) 对象。这意味着所有来自于方块模式对象的方法均可以在方块对象中使用：

* 可以使用 `blocks`  ZenGetter
* OR'ing
* 可以配合 `in` 关键字使用
* 可以使用 `displayName` ZenGetter