# IBlock
An IBlock Object consists of a [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), a metadata and a TileData.  
It refers to a block in the game.

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## 调用 IBlock 对象

返回 IBlock 对象的方法有多种：

* 把一个 [IItemStack](/Vanilla/Items/IItemStack/) 转换为 IBlock （可以使用 `AS` 关键字，或 `asBlock()` 方法）
* 使用 [IWorld](/Vanilla/World/IWorld/) 提供的 getBlock(x,y,z) 方法
* 使用 ContentTweaker 中 [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) 提供的 getBlock() 方法

警告: 只能使用第二个方法才能使 `数据` ZenGetter 返回一个非空的 IData!

## Zengetters

| Getter     | 功能                        | 返回值类型                                                    |
| ---------- | ------------------------- | -------------------------------------------------------- |
| definition | 返回方块的定义                   | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)    |
| meta       | 返回方块的元数据                  | int                                                      |
| data       | 返回方块的 TileData            | [IData #数据](/Vanilla/Data/IData/)                        |
| fluid      | Returns the Block's fluid | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) |



# IBlockPattern

IBlocks 扩展 [IBlock模式](/Vanilla/Blocks/IBlockPattern/) 对象。 这意味着IBlock模式对象可用的所有函数也可以用于IBlock对象：

* 使用ZenGetter 方法 `blocks`
* 使用 OR 运算符
* 使用 `in` 关键字匹配
* 使用 ZenGetter 方法 `displayName`
