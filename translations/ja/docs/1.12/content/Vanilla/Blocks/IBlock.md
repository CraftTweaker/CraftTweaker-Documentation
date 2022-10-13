# IBlock
An IBlock Object consists of a [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/), a metadata and a TileData.  
It refers to a block in the game.

## パッケージのインポート
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlock;`

## Calling an IBlock Object

There are multiple ways thet return an IBlock object:

* Casting a [IItemStack](/Vanilla/Items/IItemStack/) as IBlock (using the `AS` keyword, or the `asBlock()` method)
* Using the getBlock(x,y,z) on an [IWorld](/Vanilla/World/IWorld/).
* Using getBlock() on ContentTweaker's [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/)

警告: `data` ZenGetter が non-null IDataを返すことは、2つ目のメソッドのみを使用することができます。

## Zengetters

| Getter     | What does it do                | 戻り値                                                      |
| ---------- | ------------------------------ | -------------------------------------------------------- |
| definition | Returns the Block's definition | [IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/)    |
| meta       | Returns the Block's metadata   | int                                                      |
| data       | Returns the Block's tileData   | [IData](/Vanilla/Data/IData/)                            |
| fluid      | Returns the Block's fluid      | [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) |



# IBlockPattern

IBlocks は [IBlockPattern](/Vanilla/Blocks/IBlockPattern/) オブジェクトを拡張します。 つまり、IBlockPattern オブジェクトに利用可能なすべての機能は、IBlock オブジェクトにも使用できます。

* Use the `blocks` ZenGetter
* OR'ing
* Matching using the `in` keyword
* Use the `displayName` ZenGetter
